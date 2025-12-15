
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


  document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".stafftab");
  const tableBody = document.querySelector("#staff-achievements_table tbody");

  // Function to load data from a given JSON file with fade transition
  function loadData(jsonFile) {
    // Start fade-out
    tableBody.style.transition = "opacity 0.4s ease";
    tableBody.style.opacity = 0;

    // Wait for fade-out before fetching new data
    setTimeout(() => {
      fetch(jsonFile)
        .then(response => {
          if (!response.ok) throw new Error("Network error while loading " + jsonFile);
          return response.json();
        })
        .then(data => {
          tableBody.innerHTML = ""; // Clear old data

          data.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${item.Faculty}</td>
              <td>${item["Achievement Type"]}</td>
              <td>${item.Details}</td>
            `;
            tableBody.appendChild(row);
          });

          // Fade-in effect
          setTimeout(() => {
            tableBody.style.opacity = 1;
          }, 100);
        })
        .catch(error => {
          console.error(error);
          tableBody.innerHTML = `<tr><td colspan="3">Error loading data.</td></tr>`;
          tableBody.style.opacity = 1;
        });
    }, 300); // short delay for fade-out
  }

  // Set default (load first tab's JSON)
  loadData("json/1stpage.json");

  // Add click listeners to tabs
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      // Set clicked tab as active
      tab.classList.add("active");

      // Load data depending on tab text
      if (tab.textContent.trim() === "2021-2022") {
        loadData("json/1stpage.json");
      } else if (tab.textContent.trim() === "2020-2021") {
        loadData("json/2ndpage.json");
      }
    });
  });
});


