 const guideshipPDFs = {
      'dr_shanti_suresh': 'https://siesce.edu.in/docs/3.2.3%20university%20letter%20of%20PHD%20guides-Dr.%20Shanti.pdf',
      'dr_seethalekshmy_n': 'https://siesce.edu.in/docs/1729498640%20SEETA%20MAAM%20FINAL.pdf',
      'dr_rinkesh_chheda': 'https://siesce.edu.in/docs/1763781139%20RINKESH%20MERGED%20GUIDE%20LETTER.pdf'
    };

    // Open PDF Function
    function openGuideshipPDF(guideId) {
      const pdfPath = guideshipPDFs[guideId];
      
      if (pdfPath && pdfPath !== 'path/to/' + guideId + '.pdf') {
        window.open(pdfPath, '_blank');
      } else {
        const guideName = guideId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
       
      }
    }

    // Navigation Function
    function navigateToHome(event) {
      event.preventDefault();
      
    }

    
   

    // Initialize Page
    document.addEventListener('DOMContentLoaded', function() {
      console.log('Research Recognitions page loaded successfully!');
    });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9810ff98469f1432',t:'MTc1ODIwMDEzNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

// nav.js

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
