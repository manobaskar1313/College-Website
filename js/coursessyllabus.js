const pdfFiles = {
      // ===== BACHELOR OF COMMERCE PROGRAM =====
      'fy_bcom_outcomes':'https://siesce.edu.in/docs/FY%20B.%20Com%20Sem%20I%20and%20II%20Course%20outcomes.pdf',  // First Year B.Com Course Outcomes
      'fy_bcom_sem1_syllabus':'https://siesce.edu.in/docs/1766130402%201_NEP_FYBCOM%20SEM%201%20Approved%20Syllabus%202023_24.pdf', // First Year B.Com Sem I Syllabus
      'fy_bcom_sem2_syllabus':'https://siesce.edu.in/docs/1766130578%202_NEP_FYBCOM%20SEM%202%20Approved%20Syllabus%202023_24.pdf', // First Year B.Com Sem II Syllabus
      'sy_bcom_outcomes':'https://siesce.edu.in/docs/CO-SYBCOM.pdf',           // Second Year B.Com Course Outcomes
      'sy_bcom_sem3_syllabus':'https://siesce.edu.in/docs/1766130627%203_NEP_SYBCOM%20SEM%203%20Approved%20Syllabus%202024_25.pdf', // Second Year B.Com Sem III Syllabus
      'sy_bcom_sem4_syllabus':'https://siesce.edu.in/docs/1766130703%204_NEP_SYBCOM%20SEM%204%20Approved%20Syllabus%202024_25.pdf', // Second Year B.Com Sem IV Syllabus
      'ty_bcom_outcomes':'https://siesce.edu.in/docs/1702622567%20BCOM%20NEW%20.pdf',           // Third Year B.Com Course Outcomes
      'ty_bcom_sem5_syllabus':'https://siesce.edu.in/docs/1766130804%205_NEP_TYBCOM%20SEM%205%20Approved%20Syllabus%202025_26.pdf', // Third Year B.Com Sem V Syllabus
      'ty_bcom_sem6_syllabus':'https://siesce.edu.in/docs/1766130896%206_NEP_TYBCOM%20SEM%206%20Approved%20Syllabus%202025_26.pdf', // Third Year B.Com Sem VI Syllabus

      // ===== SELF FINANCED PROGRAMS - FIRST YEAR =====
      'fy_baf_outcomes': 'https://siesce.edu.in/docs/F.Y.%20B.A.F%20Sem%20I%20and%20II%20Course%20Outcomes.pdf',
      'fy_baf_syllabus': 'https://siesce.edu.in/docs/1731571020%20NEP%20Syllabus%20B%20Com%20A&F%20Sem%20I%20&%20II%20-%20AY%202024%20-%2025.pdf',             // F.Y. B.A.F Syllabus
      'fy_bbi_outcomes': 'https://siesce.edu.in/docs/1766473885%20FYBBI%2025%20-26%20COPO%20NEP.docx.pdf',             // F.Y. B.B.I. Course Outcomes         
      'fy_bbi_syllabus': 'https://siesce.edu.in/docs/1766473662%20FYBBI%2025-26%20Sem%20I%20&%20II%20Syllabus.pdf',             // F.Y. B.B.I. Course Outcomes         
    
      'fy_bfm_outcomes': 'https://siesce.edu.in/docs/F.Y.%20B.F.M.%20Sem%20I%20and%20II%20Course%20Outcomes.pdf',             // F.Y. B.F.M. Course Outcomes
      'fy_bfm_syllabus': 'https://siesce.edu.in/docs/1720145190%20FYBFM%20NEP%20SYLLABUS%20(AUTONOMOUS)%20WITH%20EFFECT%20FROM%202023-24.pdf',             // F.Y. B.F.M. Syllabus
      'fy_bscit_outcomes':'pdf/FYBScIT PO CO Mapping 25-26.pdf',         // FY B. Sc IT Course Outcomes
      'fy_bscit_syllabus':'pdf/FYBScIT NEP Approved Syllabus 2025-26.pdf',         // FY B. Sc IT Syllabus
      'fy_bms_outcomes': 'https://siesce.edu.in/docs/FY.%20B.M.S.%20Sem%20I%20and%20II%20Course%20Outcomes.pdf',             // FY. B.M.S. Course Outcomes
      'fy_bms_syllabus': 'https://siesce.edu.in/docs/1731904958%20FINAL%20FYBMS%20NEP%20SYLLABUS.pdf',             // FY. B.M.S. Syllabus
      'fy_ibcom_outcomes': 'https://siesce.edu.in/docs/1702622672%20INT%20BCOM.pdf',         // FY.IBCom. Course Outcomes
      'fy_ibcom_syllabus': '',         // FY.IBCom. Syllabus

      // ===== SELF FINANCED PROGRAMS - SECOND YEAR =====
      'sy_baf_outcomes': 'https://siesce.edu.in/docs/CO-SYBAF.pdf',             // S.Y. B.A.F Course Outcomes
      'sy_baf_syllabus': 'https://siesce.edu.in/docs/1731488440%20SYBAF%20Sem%203&%204%20complete%20syllabus%20as%20per%20NEP.pdf',             // S.Y. B.A.F Syllabus
      'sy_bbi_outcomes': 'https://siesce.edu.in/docs/1766473915%20SYBBI%2025-26%20sem%203%204%20CO%20PO.pdf',             // S.Y. B.B.I. Course Outcomes
      'sy_bbi_syllabus': 'https://siesce.edu.in/docs/1766473902%20SYBBI%20NEP%202025-26%20Syllabus.pdf',             // S.Y. B.B.I. Syllabus
      'sy_bfm_outcomes': 'https://siesce.edu.in/docs/CO-SYBFM.pdf',             // S.Y.B.F.M. Course Outcomes
      'sy_bfm_syllabus': 'https://siesce.edu.in/docs/1731565865%20SYBFM%20-%20Board%20of%20Studies.pdf',             // S.Y.B.F.M. Syllabus
      'sy_bscit_outcomes':'pdf/SYBScIT PO CO Mapping 25-26.pdf',         // SY B. Sc IT Course Outcomes
      'sy_bscit_syllabus':'pdf/SYBScIT NEP Approved Syllabus 2025-26.pdf',         // SY B. Sc IT Syllabus
      'sy_bms_outcomes': 'https://siesce.edu.in/docs/CO-SYBMS.pdf',             // S.Y.B.M.S. Course Outcomes
      'sy_bms_syllabus': 'https://siesce.edu.in/docs/1731488923%20Final_SYBMS_NEP_SYLLABUS.pdf',             // S.Y.B.M.S. Syllabus

      // ===== SELF FINANCED PROGRAMS - THIRD YEAR =====
      'ty_bbi_outcomes': 'https://siesce.edu.in/docs/1766473938%20TYBBI%20CO%20PO%20only%20sem%205%20and%20sem%206%20subjects.pdf',             // T.Y. B.B.I. Course Outcomes
      
      'ty_bbi_syllabus': 'https://siesce.edu.in/docs/1766473926%20TYBBI%20sem%205%20and%206%20%20NEP%20syllabus.pdf',             // T.Y. B.B.I. Syllabus
      'ty_bms_outcomes': 'https://siesce.edu.in/docs/1702622607%20BMS%20NEW.pdf',             // T.Y. B.M.S. Course Outcomes
      'ty_bms_syllabus': 'https://siesce.edu.in/docs/1670572016%20TY%20BMS%20Syllabus.pdf',             // T.Y. B.M.S. Syllabus
      'ty_bfm_outcomes': 'https://siesce.edu.in/docs/1702622586%20BFM%20NEW.pdf',             // T.Y.B.F.M. Course Outcomes
      'ty_bfm_syllabus': 'https://siesce.edu.in/docs/1670578481%20TYBFM%20Syllabus.pdf',             // T.Y.B.F.M. Syllabus
      'ty_bscit_outcomes':'pdf/TYBScIT PO CO Mapping 25-26.pdf',         // TY B. Sc IT Course Outcomes
      'ty_bscit_syllabus':'pdf/TYBScIT NEP Approved Syllabus  2025-26.pdf',         // TY B. Sc IT Syllabus
      'ty_baf_outcomes': 'https://siesce.edu.in/docs/1702622495%20BAF%20NEW.pdf',             // TY. B.A.F Course Outcomes
      'ty_baf_syllabus': 'https://siesce.edu.in/docs/1670578522%20TYBAF%20Syllabus.pdf',             // TY. B.A.F Syllabus

      // ===== MASTERS PROGRAMS =====
      'mcom_gwm_outcomes': 'https://siesce.edu.in/docs/1731905371%20FY%20M%20Com%20GWM%20SEM%20I%20&%20II%20Course%20Outcomes%20Program%20Outcomes%20Mapping%20.pdf',         // MCOM (GWM) Course Outcomes
      'mcom_gwm_syllabus': 'https://siesce.edu.in/docs/1731564827%20NEP%20Syllabus%20-%20MCom%20GWMSem%20III%20&%20IV.pdf',         // MCOM (GWM) Syllabus
      'mcom_frta_outcomes': 'https://siesce.edu.in/docs/1731906408%20FY%20MCom%20FRTA%20SEM%20I%20&%20II%20Course%20Outcomes%20Program%20Outcomes%20Mapping%20.pdf',       // MCOM (FRTA) Course Outcomes
      'mcom_frta_syllabus': 'https://siesce.edu.in/docs/1731564950%20NEP%20Syllabus%20-%20MCom%20FRTASem%20III%20&%20IV.pdf',       // MCOM (FRTA) Syllabus
      'mscit_12_outcomes': 'https://siesce.edu.in/docs/1731905930%20MSCIT%20SYLLABUS%20.pdf',         // M. Sc IT Sem I & II Course Outcomes
      'mscit_12_syllabus': 'https://siesce.edu.in/docs/1731573542%20MScIT%20UPDATED%20NEP%20SYLLABUS%20.pdf',         // M. Sc IT Sem I & II Syllabus
      'mscit_34_outcomes': 'https://siesce.edu.in/docs/CO-MScIT.pdf',         // M. Sc IT Sem III & IV Course Outcomes
      'mscit_34_syllabus': 'https://siesce.edu.in/docs/1731487889%20MSCIT_merged.pdf',         // M. Sc IT Sem III & IV Syllabus
      'mcom_acc_12_outcomes':'https://siesce.edu.in/docs/1731905544%20MCom%20Part%20I%20CO%20PO%20-%20Accountancy.pdf',   // M.COM Accountancy Sem I & II Course Outcomes
      'mcom_acc_12_syllabus':'https://siesce.edu.in/docs/MCOM%20Accountancy%20Part%201%20Syllabus.pdf',   // M.COM Accountancy Sem I & II Syllabus
      'mcom_acc_34_outcomes':'https://siesce.edu.in/docs/CO-MCOM(ACC).pdf',   // M.COM Accountancy Sem III & IV Course Outcomes
      'mcom_acc_34_syllabus':'https://siesce.edu.in/docs/1731487038%20MCOM%20ACCOUNTANCY%20NEP%20SEM%20IIIIV%20FINAL.pdf',   // M.COM Accountancy Sem III & IV Syllabus
      'mcom_bf_12_outcomes': 'https://siesce.edu.in/docs/1731906016%20MCom%20Banking%20&%20Finance.pdf',     // M.COM Banking & Finance Sem I & II Course Outcomes
      'mcom_bf_12_syllabus': 'https://siesce.edu.in/docs/MCOM%20B_F%20I%20revised%20syllabus.pdf',     // M.COM Banking & Finance Sem I & II Syllabus
      'mcom_bf_34_outcomes': 'https://siesce.edu.in/docs/1731486585%20MCom%20B0F%20NEP%20SEM%20III0%20IV.pdf',     // M.COM Banking & Finance Sem III & IV Course Outcomes
      'mcom_bf_34_syllabus': 'https://siesce.edu.in/docs/M.%20Com%20B_F%20II%20Revised%20syllabus.pdf',     // M.COM Banking & Finance Sem III & IV Syllabus
      'msc_ds_12_outcomes': 'https://siesce.edu.in/docs/1731905445%20MSC%20DS%20PART-I%20CO%20PO%20MAPPING%20SEM%20I%20&%20II%20NEP%20SYLLABUS%20.pdf',       // MSc Data Science Sem I & II Course Outcomes
      'msc_ds_12_syllabus': 'https://siesce.edu.in/docs/1731572758%20MScDS%20NEP%20UPDATED%20SYLLABUS%20.pdf',       // MSc Data Science Sem I & II Syllabus
      'msc_ds_34_outcomes': 'https://siesce.edu.in/docs/1702630937%20MSc%20Data%20Science-Part%20II.pdf',       // MSc Data Science Sem III & IV Course Outcomes
      'msc_ds_34_syllabus': 'https://siesce.edu.in/docs/1731487527%20MSC_merged.pdf',       // MSc Data Science Sem III & IV Syllabus

      // ===== PHD PROGRAMS =====
      'phd_bpa_outcomes':'https://siesce.edu.in/docs/Ph.D%20COURSE%20WORK.pdf',           // Ph.D. in Business Policy and Administration Course Outcomes
      'phd_bpa_syllabus': 'https://siesce.edu.in/docs/Ph.D%20COURSE%20WORK.pdf',           // Ph.D. in Business Policy and Administration Syllabus
    };

    function openModal(title, documentId) {
      const modal = document.getElementById('documentModal');
      const modalTitle = document.getElementById('modalTitle');
      const modalContent = document.getElementById('modalContent');
      
      modalTitle.textContent = title;
      
      // Check if PDF file exists for this document
      if (pdfFiles[documentId]) {
        // Open PDF in new tab instead of modal
        window.open(pdfFiles[documentId], '_blank');
        return;
      } else {
        // Show instructions for adding PDF
        modalContent.innerHTML = `
          <div style="text-align: center; padding: 60px 40px;">
            <div style="font-size: 64px; margin-bottom: 30px; opacity: 0.3;">📄</div>
            <h3 style="color: #d8731a; margin-bottom: 20px; font-size: 24px;">${title}</h3>
            <p style="color: #6c757d; margin-bottom: 30px; font-size: 16px; line-height: 1.6;">
              PDF document not found. Please upload the PDF file to display it here.
            </p>
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h4 style="color: #856404; margin-bottom: 10px;">📋 How to Add PDF Files:</h4>
              <div style="color: #856404; font-size: 14px; line-height: 1.6; text-align: left;">
                <p><strong>1.</strong> Create a "pdfs" folder in your website directory</p>
                <p><strong>2.</strong> Upload your PDF file as "${documentId}.pdf"</p>
                <p><strong>3.</strong> The system will automatically open it in a new tab</p>
                <p><strong>4.</strong> Supported formats: PDF files up to 50MB</p>
              </div>
            </div>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #d8731a;">
              <p style="color: #495057; font-size: 14px; margin: 0;">
                <strong>File Path:</strong> pdfs/${documentId}.pdf
              </p>
            </div>
          </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    }

    function closeModal() {
      const modal = document.getElementById('documentModal');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById('documentModal');
      if (event.target === modal) {
        closeModal();
      }
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    // Program filtering functionality
    function filterPrograms(category) {
      // Update active button
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelector(`[data-filter="${category}"]`).classList.add('active');
      
      // Filter program sections
      const sections = document.querySelectorAll('.program-section');
      
      sections.forEach(section => {
        section.classList.remove('fade-in');
        
        if (section.dataset.category === category) {
          section.classList.remove('hidden');
          // Add fade-in animation with delay
          setTimeout(() => {
            section.classList.add('fade-in');
          }, 100);
        } else {
          section.classList.add('hidden');
        }
      });
      
      // Smooth scroll to content area
      const container = document.querySelector('.container');
      if (container) {
        container.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // Update URL hash for bookmarking
      window.history.replaceState(null, null, `#${category}`);
    }

    // Initialize page
    document.addEventListener('DOMContentLoaded', function() {
      console.log('Professional Course Outcomes & Syllabus page loaded successfully!');
      
      // Check for URL hash on page load, default to commerce
      const hash = window.location.hash.substring(1);
      if (hash && ['commerce', 'self-financed', 'masters', 'phd'].includes(hash)) {
        filterPrograms(hash);
      } else {
        filterPrograms('commerce');
      }
      
      // Add smooth scrolling for better UX
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
      
      // Add keyboard navigation for filter buttons
      document.querySelectorAll('.filter-btn').forEach((btn, index) => {
        btn.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
          }
        });
      });
    });
  
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'97cf8aec313c3cb2',t:'MTc1NzUxMzc4MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

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
