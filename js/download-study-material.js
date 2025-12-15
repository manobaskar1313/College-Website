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

//   dsm page js

function openTab(evt, tabName) {
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.dsm-tab-button').forEach(b => b.classList.remove('active'));
      document.getElementById(tabName).classList.add('active');
      evt.currentTarget.classList.add('active');
    }

    // Initialize filtering for each tab
    function initTabFilter(tabIndex) {
      const table = document.getElementById(`resourcesTable${tabIndex}`);
      const rows = Array.from(table.querySelectorAll('tbody tr'));
      const categoryList = document.getElementById(`categoryList${tabIndex}`);
      const dropdownButton = document.getElementById(`semesterDropdown${tabIndex}`);
      const dropdownMenu = document.getElementById(`semesterDropdownMenu${tabIndex}`);
      const searchBox = document.getElementById(`searchBox${tabIndex}`);
      const subjectList = document.getElementById(`subjectList${tabIndex}`);

      const semesters = [...new Set(rows.map(r => r.children[0].textContent.trim()))];
      const subjects = [...new Set(rows.map(r => r.children[1].textContent.trim()))];

      // Populate dropdown
      dropdownMenu.innerHTML = `<li><a class="dropdown-item" href="#" data-value="all">ALL SEMESTERS</a></li>`;
      semesters.forEach(s => {
        const li = document.createElement('li');
        li.innerHTML = `<a class="dropdown-item" href="#" data-value="${s}">${s}</a>`;
        dropdownMenu.appendChild(li);
      });

      // Populate badges
      categoryList.innerHTML = '';
      const badgeMap = {};
      semesters.forEach(s => {
        const b = document.createElement('span');
        b.className = 'badge bg-light text-dark p-2 badge-cat';
        b.textContent = s;
        categoryList.appendChild(b);
        badgeMap[s] = b;
      });

      // Populate subjects checkboxes
      subjectList.innerHTML = '';
      subjects.sort().forEach(sub => {
        const div = document.createElement('div');
        div.className = 'form-check';
        div.innerHTML = `<input class="form-check-input subject-checkbox" type="checkbox" value="${sub}" id="sub-${tabIndex}-${sub}"> <label class="form-check-label">${sub}</label>`;
        subjectList.appendChild(div);
      });

      // Dropdown click -> filter table + highlight badge
      dropdownMenu.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', e => {
          e.preventDefault();
          const value = e.target.dataset.value;
          dropdownButton.textContent = e.target.textContent;
          filterTable(value);
          highlightBadge(value);
        });
      });

      // Badge click -> set dropdown + filter table
      Object.keys(badgeMap).forEach(s => {
        badgeMap[s].addEventListener('click', () => {
          const active = badgeMap[s].classList.toggle('active');
          const sem = active ? s : 'all';
          dropdownButton.textContent = active ? s : 'ALL SEMESTERS';
          filterTable(sem);
          highlightBadge(sem);
        });
      });

      // Subject filter
      subjectList.addEventListener('change', () => filterTable(dropdownButton.textContent === 'ALL SEMESTERS' ? 'all' : dropdownButton.textContent));

      // Search input
      searchBox.addEventListener('input', () => filterTable(dropdownButton.textContent === 'ALL SEMESTERS' ? 'all' : dropdownButton.textContent));

      function filterTable(selectedSemester) {
        const sem = selectedSemester === 'all' ? 'all' : selectedSemester;
        const checkedSubjects = Array.from(subjectList.querySelectorAll('.subject-checkbox:checked')).map(i => i.value);
        const query = searchBox.value.trim().toLowerCase();

        rows.forEach(r => {
          let visible = true;
          if (sem !== 'all' && r.children[0].textContent.trim() !== sem) visible = false;
          if (checkedSubjects.length && !checkedSubjects.includes(r.children[1].textContent.trim())) visible = false;
          if (query && !Array.from(r.children).some(td => td.textContent.toLowerCase().includes(query))) visible = false;
          r.style.display = visible ? '' : 'none';
        });
      }

      function highlightBadge(selectedSemester) {
        Object.keys(badgeMap).forEach(s => badgeMap[s].classList.toggle('active', selectedSemester !== 'all' && s === selectedSemester));
      }
    }

    // Initialize all tabs
    for (let i = 1; i <= 15; i++) initTabFilter(i);

