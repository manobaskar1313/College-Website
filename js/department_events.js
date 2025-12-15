// -----------------------------
// COUNTER ANIMATION
// -----------------------------
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-count"));
    const increment = target / 100;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 20);
  });
}

// Trigger animation when stats section visible
const statsSection = document.querySelector(".stats-section");
if (statsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(statsSection);
}

// -----------------------------
// DROPDOWN HOVER EFFECTS
// -----------------------------
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  let timeout;
  const menu = dropdown.querySelector(".dropdown-menu");

  if (!menu) return;

  menu.style.opacity = "0";
  menu.style.transform = "translateY(-10px)";
  menu.style.transition = "all 0.3s ease";
  menu.style.display = "none";

  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    menu.style.display = "block";
    setTimeout(() => {
      menu.style.opacity = "1";
      menu.style.transform = "translateY(0)";
    }, 10);
  });

  dropdown.addEventListener("mouseleave", () => {
    menu.style.opacity = "0";
    menu.style.transform = "translateY(-10px)";
    timeout = setTimeout(() => {
      menu.style.display = "none";
    }, 300);
  });
});

// -----------------------------
// CUSTOM DROPDOWN TOGGLE
// -----------------------------
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("open");

  document.querySelectorAll(".dropdownlist").forEach((dd) => {
    if (dd.id !== id) dd.classList.remove("open");
  });
}

// -----------------------------
// MAIN PAGE SCRIPT
// -----------------------------
document.addEventListener("DOMContentLoaded", async function () {
  const tbody = document.querySelector("#eventsTable tbody");
  const pageItems = document.querySelectorAll(".pagination .page-item");
  const pageLinks = document.querySelectorAll(".pagination .page-link");
  const departmentToggle = document.querySelector(
    "#departmentDropdown .dropdown-toggle1"
  );
  const yearToggle = document.querySelector("#yearDropdown .dropdown-toggle1");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  const TOTAL_PAGES = 8;
  let allData = [];
  let pageData = {};

  // -----------------------------
  // TABLE FUNCTIONS
  // -----------------------------
  function clearTable() {
    tbody.innerHTML = "";
  }

  function populateTable(data) {
    clearTable();
    data.forEach((event) => {
      const date = event.date || event["Event Date"] || "";
      const department =
        event.department || event["Department"] || "";
      const faculty = event.faculty || event["Faculty"] || "";
      const details = event.details || event["Details"] || "";
      const year = event.year || event["Academic Year"] || "";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${date}</td>
        <td>${department}</td>
        <td>${faculty}</td>
        <td>${details}</td>
        <td>${year}</td>
      `;
      tbody.appendChild(row);
    });
  }

  function setActivePage(index) {
    pageItems.forEach((item, idx) => {
      if (index === -1) item.classList.remove("active");
      else item.classList.toggle("active", idx === index);
    });
  }

  async function fetchData(fileName) {
    try {
      const res = await fetch(fileName);
      return res.ok ? await res.json() : [];
    } catch {
      return [];
    }
  }

  async function loadAllPages() {
    const files = [];
    for (let i = 1; i <= TOTAL_PAGES; i++) {
      files.push(`json/page${i}-data.json`);
    }
    const results = await Promise.all(files.map(fetchData));
    results.forEach((data, idx) => (pageData[idx + 1] = data || []));
    allData = Object.values(pageData).flat();
  }

  // -----------------------------
  // INITIALIZE DROPDOWN LISTENERS
  // -----------------------------
  document.querySelectorAll(".dropdownlist").forEach((dropdown) => {
    const items = dropdown.querySelectorAll(".dropdown-items");
    const toggleDiv = dropdown.querySelector(".dropdown-toggle1");
    items.forEach((item) => {
      item.addEventListener("click", function () {
        toggleDiv.childNodes[0].nodeValue = this.textContent.trim();
        dropdown.classList.remove("open");
      });
    });
  });

  // -----------------------------
  // INITIAL DATA LOAD
  // -----------------------------
  await loadAllPages();
  populateTable(pageData[1] || []);
  setActivePage(0);

  // -----------------------------
  // PAGINATION HANDLING
  // -----------------------------
  pageLinks.forEach((link, idx) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const deptText = departmentToggle.textContent.trim();
      const yearText = yearToggle.textContent.trim();
      const isDeptSelected = deptText !== "Select Department";
      const isYearSelected = yearText !== "Select Year";

      const pageNumber = idx + 1;

      if (!isDeptSelected && !isYearSelected) {
        populateTable(pageData[pageNumber] || []);
        setActivePage(idx);
      } else {
        setActivePage(-1);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // -----------------------------
  // OUTSIDE CLICK CLOSE DROPDOWNS
  // -----------------------------
  document.addEventListener("click", (event) => {
    document.querySelectorAll(".dropdownlist").forEach((dropdown) => {
      if (!dropdown.contains(event.target)) dropdown.classList.remove("open");
    });
  });

  // -----------------------------
  // SCROLL TO TOP BUTTON
  // -----------------------------
  window.addEventListener("scroll", () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    scrollTopBtn.style.display =
      scrollTop > (docHeight - windowHeight) / 2 ? "block" : "none";
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      const scrollStep = 50;
      const scrollInterval = 10;
      const scrollTimer = setInterval(() => {
        if (window.scrollY > 0) window.scrollBy(0, -scrollStep);
        else clearInterval(scrollTimer);
      }, scrollInterval);
    });
  }

  // -----------------------------
  // SEARCH FILTER
  // -----------------------------
  const searchButton = document.getElementById("search-button");
  if (searchButton) searchButton.addEventListener("click", handleSearch);

  function handleSearch() {
    const deptText = departmentToggle.textContent.trim();
    const yearText = yearToggle.textContent.trim();
    const isDeptSelected = deptText !== "Select Department";
    const isYearSelected = yearText !== "Select Year";

    if (!isDeptSelected && !isYearSelected) {
      populateTable(pageData[1] || []);
      setActivePage(0);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    let filtered = allData.slice();

    if (isDeptSelected) {
      filtered = filtered.filter((e) => {
        const v = (e.department || e["Department"] || "").toString().trim();
        return v === deptText;
      });
    }

    if (isYearSelected) {
      filtered = filtered.filter((e) => {
        const v = (e.year || e["Academic Year"] || "").toString().trim();
        return v === yearText;
      });
    }

    if (!filtered.length) {
      clearTable();
      tbody.innerHTML = `<tr><td colspan="5">No events found for selected criteria.</td></tr>`;
    } else {
      populateTable(filtered);
    }

    setActivePage(-1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
