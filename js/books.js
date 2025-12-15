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


// Books and publications
/* ===========================
   PAGINATION CONTROLLER
=========================== */
(function(){
  const wrapper = document.querySelector('.pagination-wrapper');
  const list = wrapper.querySelector('.pagination');
  const numberButtons = Array.from(list.querySelectorAll('button[data-page-num]'));
  const prevBtn = list.querySelector('button[data-action="prev"]');
  const nextBtn = list.querySelector('button[data-action="next"]');
  const totalPages = numberButtons.length;

  function getCurrent(){
    const cur = list.querySelector('[aria-current="page"]');
    return cur ? Number(cur.dataset.page) : 1;
  }

  function setCurrent(page){
    if(page < 1 || page > totalPages) return;

    numberButtons.forEach(btn=>{
      const p = Number(btn.dataset.pageNum);
      const li = btn.closest('.page-item');

      if(p === page){
        li.setAttribute('aria-current','page');
        btn.classList.add('active');
      }else{
        li.removeAttribute('aria-current');
        btn.classList.remove('active');
      }
    });

    /* Prev / Next state */
    prevBtn.closest('.page-item').classList.toggle('disabled', page === 1);
    prevBtn.setAttribute('aria-disabled', page === 1);

    nextBtn.closest('.page-item').classList.toggle('disabled', page === totalPages);
    nextBtn.setAttribute('aria-disabled', page === totalPages);

    /* Dispatch event */
    wrapper.dispatchEvent(
      new CustomEvent('pagination-change',{detail:{page}})
    );
  }

  /* Number clicks */
  numberButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      setCurrent(Number(btn.dataset.pageNum));
    });
  });

  /* Prev / Next */
  prevBtn.addEventListener('click',()=>{
    const cur = getCurrent();
    if(cur > 1) setCurrent(cur - 1);
  });

  nextBtn.addEventListener('click',()=>{
    const cur = getCurrent();
    if(cur < totalPages) setCurrent(cur + 1);
  });

  /* Initial */
  setCurrent(1);
})();

/* ===========================
   PAGE DISPLAY HANDLER
=========================== */
document
  .querySelector('.pagination-wrapper')
  .addEventListener('pagination-change',(e)=>{
    const page = e.detail.page;

    document.querySelectorAll('.page-section').forEach(sec=>{
      sec.style.display = 'none';
    });

    document.getElementById('page'+page).style.display = 'block';
  });

  // TOP BUTTON
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

