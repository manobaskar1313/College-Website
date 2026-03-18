/* script1.js - Committee Events */
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("open");

  // Close other dropdowns
  document.querySelectorAll(".dropdownlist").forEach((dd) => {
    if (dd.id !== id) dd.classList.remove("open");
  });
}

let allData = [];
let pageData = {};
const TOTAL_PAGES = 10;

document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.querySelector("#eventsTable tbody");
  const pageItems = document.querySelectorAll(".pagination .page-item");
  const pageLinks = document.querySelectorAll(".pagination .page-link");
  const departmentToggle = document.querySelector("#departmentDropdown .dropdown-toggle1");
  const yearToggle = document.querySelector("#yearDropdown .dropdown-toggle1");

  function clearTable() {
    tbody.innerHTML = "";
  }
  function populateTable(data) {
    clearTable();
    if (!data || data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4">No events found.</td></tr>`; // 👈 4 columns (faculty removed)
      return;
    }
  
    data.forEach((event) => {
      const date = event.date || event["Event Date"] || "";
      const committee = event.committee || event["Committee"] || event["Department"] || "";
      const details = event.details || event["Details"] || "";
      const year = event.year || event["Academic Year"] || "";
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${date}</td>
        <td>${committee}</td>
        <td>${details}</td>
        <td>${year}</td>
      `;
      tbody.appendChild(row);
    });
  }

  function setActivePage(index) {
    pageItems.forEach((item, idx) => {
      if (index === -1) {
        item.classList.remove("active");
      } else {
        item.classList.toggle("active", idx === index);
      }
    });
  }

  function fetchData(fileName) {
    return fetch(fileName)
      .then((res) => (res.ok ? res.json() : []))
      .catch(() => []);
  }

  async function loadAllPages() {
    const files = [];
    for (let i = 1; i <= TOTAL_PAGES; i++) files.push(`json/comm${i}.json`);
    const results = await Promise.all(files.map(fetchData));
    results.forEach((data, idx) => {
      pageData[idx + 1] = data || [];
    });
    allData = Object.values(pageData).flat();
  }

  // ✅ Initialize Page
  (async function init() {
    // Setup dropdown label updates (no auto-search now)
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

    await loadAllPages();

    // Default page load
    populateTable(pageData[1] || []);
    setActivePage(0);
  })();

  // ✅ Pagination for default mode
  pageLinks.forEach((link, idx) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const deptText = departmentToggle.textContent.trim();
      const yearText = yearToggle.textContent.trim();
      const isDeptSelected = deptText !== "Select Committee";
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

  // Close dropdowns on outside click
  document.addEventListener("click", function (event) {
    document.querySelectorAll(".dropdownlist").forEach((dropdown) => {
      if (!dropdown.contains(event.target)) dropdown.classList.remove("open");
    });
  });

  // Scroll to Top Button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.onscroll = function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    scrollTopBtn.style.display = scrollTop > (docHeight - windowHeight) / 2 ? "block" : "none";
  };

  if (scrollTopBtn) {
    scrollTopBtn.onclick = function () {
      const scrollStep = 50;
      const scrollInterval = 10;
      const scrollTimer = setInterval(() => {
        if (window.scrollY > 0) window.scrollBy(0, -scrollStep);
        else clearInterval(scrollTimer);
      }, scrollInterval);
    };
  }

  // ✅ Search button click filter logic
  document.getElementById("search-button").addEventListener("click", handleSearch);

  function handleSearch() {
    const deptText = departmentToggle.textContent.trim();
    const yearText = yearToggle.textContent.trim();
    const isDeptSelected = deptText !== "Select Committee";
    const isYearSelected = yearText !== "Select Year";

    // 🟢 Case 1: No filters selected → show default page 1
    if (!isDeptSelected && !isYearSelected) {
      populateTable(pageData[1] || []);
      setActivePage(0);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 🟡 Case 2: Filter data by committee/year
    let filtered = allData.slice();

    if (isDeptSelected) {
      filtered = filtered.filter((e) => {
        const v = (e.committee || e["Committee"] || e["Department"] || "").toString().trim();
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

    setActivePage(-1); // Remove page highlight for filtered view
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});



// navbar js

// Counter animation for stats
        function animateCounters() {
          const counters = document.querySelectorAll('.stat-number');
          counters.forEach(counter => {
              const target = parseInt(counter.getAttribute('data-count'));
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

      // Trigger counter animation when stats section is visible
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  animateCounters();
                  observer.unobserve(entry.target);
              }
          });
      });

      const statsSection = document.querySelector('.stats-section');
      if (statsSection) {
          observer.observe(statsSection);
      }

      // Enhanced dropdown hover effects
      document.querySelectorAll('.dropdown').forEach(dropdown => {
          let timeout;
          
          dropdown.addEventListener('mouseenter', () => {
              clearTimeout(timeout);
              const dropdownMenu = dropdown.querySelector('.dropdown-menu');
              dropdownMenu.style.display = 'block';
              setTimeout(() => {
                  dropdownMenu.style.opacity = '1';
                  dropdownMenu.style.transform = 'translateY(0)';
              }, 10);
          });
          
          dropdown.addEventListener('mouseleave', () => {
              const dropdownMenu = dropdown.querySelector('.dropdown-menu');
              dropdownMenu.style.opacity = '0';
              dropdownMenu.style.transform = 'translateY(-10px)';
              timeout = setTimeout(() => {
                  dropdownMenu.style.display = 'none';
              }, 300);
          });
      });

      // Initialize dropdown menu styles
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.style.opacity = '0';
          menu.style.transform = 'translateY(-10px)';
          menu.style.transition = 'all 0.3s ease';
          menu.style.display = 'none';
      });


      
  (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'973aa71f837efbde',t:'MTc1NTk1MjU1OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
