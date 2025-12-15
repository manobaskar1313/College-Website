
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

/*history*/
/*management*/
/*What They Say*/

function filterTestimonials(event, category) {
  const cards = document.querySelectorAll('.testimonial-card');
  document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  cards.forEach(card => {
    card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
  });
}
/*organogram*/
/*administration*/
/*facilities*/
/*institutional goals*/

/*Policy and procedures*/
const policyFiles = {
      // Institutional Policies
      'research_policy': 'https://siesce.edu.in/docs/1702364777%20Research%20Policy.pdf',
      'infrastructure_policy': 'https://siesce.edu.in/docs/Procedures%20and%20policies.pdf',
      'it_policy': 'https://siesce.edu.in/docs/1750944730%20250624%20SIES%20IT%20Policy.pdf',
      'plastic_ban_policy': 'https://siesce.edu.in/docs/1703050285%20Ban%20on%20Single%20use%20plastic%20policy%20doc.pdf',
      
      // Academic Procedures
      'sop_admissions': 'https://siesce.edu.in/docs/SOP%20ADMISSIONS.pdf',
      'sop_examinations': 'https://siesce.edu.in/docs/SOP%20EXAM%20SK.pdf',
      'sop_placements': 'https://siesce.edu.in/docs/SOP%20PLACEMENTS.pdf',
      'sop_extracurricular': 'https://siesce.edu.in/docs/SOP%20Extra%20Curricular%20Activity.pdf',
      
      // Research Policies
      'research_promotion_policy': 'https://siesce.edu.in/docs/1669441897%20policy%20document%20for%20research.pdf',
      'research_ethics_code': 'https://siesce.edu.in/docs/1669441818%20code%20of%20ethics.pdf',
      
      // Conduct Policies
      'code_of_conduct': 'https://siesce.edu.in/docs/1729586491%20Code%20of%20Conduct.pdf'
    };

    function openModal(title, policyId) {
      const modal = document.getElementById('policyModal');
      const modalTitle = document.getElementById('modalTitle');
      const modalContent = document.getElementById('modalContent');
      
      modalTitle.textContent = title;
      
      // Check if PDF file exists for this policy
      if (policyFiles[policyId] && policyFiles[policyId] !== 'YOUR_PDF_PATH_HERE.pdf') {
        // Open PDF in new tab instead of modal
        window.open(policyFiles[policyId], '_blank');
        return;
      } else {
        // Show simple message
        modalContent.innerHTML = `
          <div style="text-align: center; padding: 80px 40px;">
            <div style="font-size: 80px; margin-bottom: 40px; opacity: 0.3; background: linear-gradient(135deg, #d8731a, #e6a85c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">📄</div>
            <h3 style="color: #d8731a; margin-bottom: 25px; font-size: 28px; font-weight: 700;">${title}</h3>
            <p style="color: #6c757d; margin-bottom: 40px; font-size: 18px; line-height: 1.6; max-width: 600px; margin-left: auto; margin-right: auto;">
              This policy document will be available soon. Please check back later or contact the administration for more information.
            </p>
          </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    }



    function closeModal() {
      const modal = document.getElementById('policyModal');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById('policyModal');
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



    // Scroll to top functionality
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
      const scrollTop = document.querySelector('.scroll-top');
      if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
      } else {
        scrollTop.classList.remove('visible');
      }
    });

    // Navigation functions
    function navigateToHome(event) {
      event.preventDefault();
      // Simulate navigation with a smooth transition
      document.body.style.opacity = '0.7';
      setTimeout(() => {
        alert('Navigating to Home page...\n\nIn a real website, this would redirect to the homepage.');
        document.body.style.opacity = '1';
      }, 300);
    }

    function navigateToAcademics(event) {
      event.preventDefault();
      // Simulate navigation with a smooth transition
      document.body.style.opacity = '0.7';
      setTimeout(() => {
        alert('Navigating to Academics section...\n\nIn a real website, this would redirect to the academics page.');
        document.body.style.opacity = '1';
      }, 300);
    }



    // Filter policies by category
    function filterPolicies(category) {
      // Update active tab
      document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
      });
      document.querySelector(`[data-category="${category}"]`).classList.add('active');
      
      // Show/hide sections
      document.querySelectorAll('.policy-section').forEach(section => {
        if (section.getAttribute('data-category') === category) {
          section.style.display = 'block';
          section.style.opacity = '0';
          section.style.transform = 'translateY(30px)';
          setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
          }, 100);
        } else {
          section.style.display = 'none';
        }
      });
    }

    // Initialize page
    document.addEventListener('DOMContentLoaded', function() {
      console.log('Enhanced Policy & Procedure page loaded successfully!');
      
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

      // Add enhanced hover effects for policy cards
      document.querySelectorAll('.policy-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
        });
      });

      // Initialize with institutional tab active
      filterPolicies('institutional');
    });
  
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'98008a62142e3b28',t:'MTc1ODAyNzU2MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
/*short term courses*/
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active from all
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Activate current
    tab.classList.add("active");
    const target = document.getElementById(tab.dataset.tab);
    target.classList.add("active");
  });
});
/*courses and syllabus*/
const pdfFiles = {
      // ===== BACHELOR OF COMMERCE PROGRAM =====
      'fy_bcom_outcomes':'https://siesce.edu.in/docs/FY%20B.%20Com%20Sem%20I%20and%20II%20Course%20outcomes.pdf',  // First Year B.Com Course Outcomes
      'fy_bcom_sem1_syllabus':'https://siesce.edu.in/docs/1754017173%20NEP-FYBCOM%20SEM%201%20Approved%20Syllabus%202023-24.pdf', // First Year B.Com Sem I Syllabus
      'fy_bcom_sem2_syllabus':'https://siesce.edu.in/docs/1754017255%20NEP-FYBCOM%20SEM%202%20Approved%20Syllabus%202023-24.pdf', // First Year B.Com Sem II Syllabus
      'sy_bcom_outcomes':'https://siesce.edu.in/docs/CO-SYBCOM.pdf',           // Second Year B.Com Course Outcomes
      'sy_bcom_sem3_syllabus':'https://siesce.edu.in/docs/1754017298%20NEP-SYBCOM%20SEM%203%20Approved%20Syllabus%202024-25.pdf', // Second Year B.Com Sem III Syllabus
      'sy_bcom_sem4_syllabus':'https://siesce.edu.in/docs/1754017526%20NEP-SYBCOM%20SEM%204%20Approved%20Syllabus%202024-25.pdf', // Second Year B.Com Sem IV Syllabus
      'ty_bcom_outcomes':'https://siesce.edu.in/docs/1702622567%20BCOM%20NEW%20.pdf',           // Third Year B.Com Course Outcomes
      'ty_bcom_sem5_syllabus':'https://siesce.edu.in/docs/1754017571%20NEP-TYBCOM%20SEM%205%20Approved%20Syllabus%202025-26.pdf', // Third Year B.Com Sem V Syllabus
      'ty_bcom_sem6_syllabus':'https://siesce.edu.in/docs/1754017666%20NEP-TYBCOM%20SEM%206%20Approved%20Syllabus%202025-26.pdf', // Third Year B.Com Sem VI Syllabus

      // ===== SELF FINANCED PROGRAMS - FIRST YEAR =====
      'fy_baf_outcomes': 'https://siesce.edu.in/docs/F.Y.%20B.A.F%20Sem%20I%20and%20II%20Course%20Outcomes.pdf',
      'fy_baf_syllabus': 'https://siesce.edu.in/docs/1731571020%20NEP%20Syllabus%20B%20Com%20A&F%20Sem%20I%20&%20II%20-%20AY%202024%20-%2025.pdf',             // F.Y. B.A.F Syllabus
      'fy_bbi_outcomes': 'https://siesce.edu.in/docs/F.Y.%20B.B.I.%20Sem%20I%20and%20II%20Course%20Outcomes.pdf',             // F.Y. B.B.I. Course Outcomes         
      'fy_bbi_syllabus': 'https://siesce.edu.in/docs/1731566301%20FYBBI%202024-25%20Syllabus%20.pdf',             // F.Y. B.B.I. Course Outcomes         
    
      'fy_bfm_outcomes': 'https://siesce.edu.in/docs/F.Y.%20B.F.M.%20Sem%20I%20and%20II%20Course%20Outcomes.pdf',             // F.Y. B.F.M. Course Outcomes
      'fy_bfm_syllabus': 'https://siesce.edu.in/docs/1720145190%20FYBFM%20NEP%20SYLLABUS%20(AUTONOMOUS)%20WITH%20EFFECT%20FROM%202023-24.pdf',             // F.Y. B.F.M. Syllabus
      'fy_bscit_outcomes':'https://siesce.edu.in/docs/FY%20B.%20Sc%20IT%20Sem%20I%20and%20II%20Course%20Outcomes.pdf',         // FY B. Sc IT Course Outcomes
      'fy_bscit_syllabus':'https://siesce.edu.in/docs/1731559034%20NEP-FYBScIT%20IT%20Approved%20Syllabus%20.pdf',         // FY B. Sc IT Syllabus
      'fy_bms_outcomes': 'https://siesce.edu.in/docs/FY.%20B.M.S.%20Sem%20I%20and%20II%20Course%20Outcomes.pdf',             // FY. B.M.S. Course Outcomes
      'fy_bms_syllabus': 'https://siesce.edu.in/docs/1731904958%20FINAL%20FYBMS%20NEP%20SYLLABUS.pdf',             // FY. B.M.S. Syllabus
      'fy_ibcom_outcomes': 'https://siesce.edu.in/docs/1702622672%20INT%20BCOM.pdf',         // FY.IBCom. Course Outcomes
      'fy_ibcom_syllabus': 'https://siesce.edu.in/docs/1702622672%20INT%20BCOM.pdf',         // FY.IBCom. Syllabus

      // ===== SELF FINANCED PROGRAMS - SECOND YEAR =====
      'sy_baf_outcomes': 'https://siesce.edu.in/docs/CO-SYBAF.pdf',             // S.Y. B.A.F Course Outcomes
      'sy_baf_syllabus': 'https://siesce.edu.in/docs/1731488440%20SYBAF%20Sem%203&%204%20complete%20syllabus%20as%20per%20NEP.pdf',             // S.Y. B.A.F Syllabus
      'sy_bbi_outcomes': 'https://siesce.edu.in/docs/CO-SYBBI.pdf',             // S.Y. B.B.I. Course Outcomes
      'sy_bbi_syllabus': 'https://siesce.edu.in/docs/1731566032%20SYBBI%20NEP%202024-2025%20Syllabus%20.pdf',             // S.Y. B.B.I. Syllabus
      'sy_bfm_outcomes': 'https://siesce.edu.in/docs/CO-SYBFM.pdf',             // S.Y.B.F.M. Course Outcomes
      'sy_bfm_syllabus': 'https://siesce.edu.in/docs/1731565865%20SYBFM%20-%20Board%20of%20Studies.pdf',             // S.Y.B.F.M. Syllabus
      'sy_bscit_outcomes':'https://siesce.edu.in/docs/CO-SYBScIT.pdf',         // SY B. Sc IT Course Outcomes
      'sy_bscit_syllabus':'https://siesce.edu.in/docs/1731489093%20SYBSc%20IT%20NEP%20Syllabus%2024-25.pdf',         // SY B. Sc IT Syllabus
      'sy_bms_outcomes': 'https://siesce.edu.in/docs/CO-SYBMS.pdf',             // S.Y.B.M.S. Course Outcomes
      'sy_bms_syllabus': 'https://siesce.edu.in/docs/1731488923%20Final_SYBMS_NEP_SYLLABUS.pdf',             // S.Y.B.M.S. Syllabus

      // ===== SELF FINANCED PROGRAMS - THIRD YEAR =====
      'ty_bbi_outcomes': 'https://siesce.edu.in/docs/1702622514%20BBI%20NEW.pdf',             // T.Y. B.B.I. Course Outcomes
      
      'ty_bbi_syllabus': 'https://siesce.edu.in/docs/1670578462%20TY%20BBI%20Syllabus.pdf',             // T.Y. B.B.I. Syllabus
      'ty_bms_outcomes': 'https://siesce.edu.in/docs/1702622607%20BMS%20NEW.pdf',             // T.Y. B.M.S. Course Outcomes
      'ty_bms_syllabus': 'https://siesce.edu.in/docs/1670572016%20TY%20BMS%20Syllabus.pdf',             // T.Y. B.M.S. Syllabus
      'ty_bfm_outcomes': 'https://siesce.edu.in/docs/1702622586%20BFM%20NEW.pdf',             // T.Y.B.F.M. Course Outcomes
      'ty_bfm_syllabus': 'https://siesce.edu.in/docs/1670578481%20TYBFM%20Syllabus.pdf',             // T.Y.B.F.M. Syllabus
      'ty_bscit_outcomes':'https://siesce.edu.in/docs/1702622629%20BSc%20IT%20New.pdf',         // TY B. Sc IT Course Outcomes
      'ty_bscit_syllabus':'https://siesce.edu.in/docs/1670578512%20TYBSc%20IT%20Syllabus.pdf',         // TY B. Sc IT Syllabus
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

/*major minor projects*/

const filterButtons = document.querySelectorAll('.filter-btn');
    const tableRows = document.querySelectorAll('tbody tr');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        tableRows.forEach(row => {
          const category = row.getAttribute('data-category');
          if (filter === 'all' || category.includes(filter)) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });


    /*courses offered*/
       // Course data with detailed information
    const courseData = {
      bcom: {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        description: "This is a foundational business degree that teaches you the basics of how businesses work. You'll learn about money management, accounting (keeping track of business finances), economics (how markets work), and general business principles.",
        eligibility: [
          "A candidate for being eligible for admission to the three year course leading to the Bachelor of Commerce must have passed the Higher Secondary School Certificate (Std. XII) examination conducted by the different Divisional Board or the Maharashtra State Board of Secondary and Higher Secondary Education with the following subjects:",
          "English",
          "Any one of the Modern Indian languages or Modern Foreign Languages or any Classical language or Information Technology",
          "Any three subjects from among the subjects mentioned below:",
          " Economics",
          "Book-Keeping and Accountancy", 
          " Organisation of Commerce and Management",
          " Geography",
          " Mathematics and Statistics",
          " Secretarial Practice",
          " Environment Education (EVS)"
        ],
        career: [
          "Accountant - Managing financial records and transactions",
          "Financial Analyst - Analyzing investment opportunities", 
          "Business Consultant - Advising companies on business strategies",
          "Banking Professional - Working in various banking roles",
          "Tax Consultant - Helping with tax planning and compliance",
          "Government Jobs - Various administrative and finance positions"
        ],
        subjects: [
          "Financial Accounting - Recording and reporting financial transactions",
          "Business Economics - Understanding market dynamics",
          "Business Mathematics - Mathematical applications in business",
          "Business Communication - Professional communication skills",
          "Principles of Management - Basic management concepts",
          "Marketing Management - Understanding customer needs and markets"
        ],
        structure: {
          title: "STRUCTURE OF THE B.COM. PROGRAMME WITH CREDIT SYSTEM",
          semesters: [
            {
              title: "YEAR I - SEMESTER I",
              courses: [
                { course: "1", title: "Accountancy & Financial Management - I", lectures: "4", credit: "3", category: "Core Courses/Commerce Discipline" },
                { course: "2", title: "Commerce - I", lectures: "3", credit: "3", category: "Core Courses/Commerce Discipline" },
                { course: "3", title: "Business Economics - I", lectures: "3", credit: "3", category: "Core Courses/Commerce Discipline" },
                { course: "4", title: "Business Communication - I", lectures: "03 (Tut. - 1 per Batch)", credit: "3", category: "Allied Courses" },
                { course: "5", title: "Environmental Studies - I", lectures: "4", credit: "3", category: "Allied Courses" },
                { course: "6", title: "Mathematical and Statistical Techniques - I", lectures: "05 (Tut. - 1 per Batch)", credit: "3", category: "Allied Courses" },
                { course: "7", title: "Foundation Course - I", lectures: "3", credit: "2", category: "Foundation Course (Interdisciplinary)" }
              ]
            },
            {
              title: "YEAR I - SEMESTER II",
              courses: [
                { course: "1", title: "Accountancy & Financial Management - II", lectures: "4", credit: "3", category: "Core Courses/Commerce Discipline" },
                { course: "2", title: "Commerce - II", lectures: "3", credit: "3", category: "Core Courses/Commerce Discipline" },
                { course: "3", title: "Business Economics - II", lectures: "3", credit: "3", category: "Core Courses/Commerce Discipline" },
                { course: "4", title: "Business Communication - II", lectures: "03 (Tut. - 1 per Batch)", credit: "3", category: "Allied Courses" },
                { course: "5", title: "Environmental Studies - II", lectures: "4", credit: "3", category: "Allied Courses" },
                { course: "6", title: "Mathematical and Statistical Techniques - II", lectures: "05 (Tut. - 1 per Batch)", credit: "3", category: "Allied Courses" },
                { course: "7", title: "Foundation Course - II", lectures: "3", credit: "2", category: "Foundation Course (Interdisciplinary)" }
              ]
            }
          ]
        }
      },
      bms: {
        title: "Bachelor of Management Studies (BMS)",
        duration: "3 Years",
        description: "This is an integrated course of three years duration. The Course shall be a full time course. The duration of the course shall be six semesters spread over three years. The course shall consist 39 theory papers and 1 project.",
        eligibility: [
          "A Candidate for being eligible for admission to the BMS Degree Course shall have passed XII Std. examination of the Maharashtra Board of Higher Secondary Education or its Equivalent examination or Diploma in any Engineering branches with two years or three years or four years duration after the SSC conducted by the board of Technical Education, Maharashtra State or its Equivalent examination by securing minimum 45% marks for general Category in first attempt at the respective examination and minimum 40% for the Reserved Category in first attempt.",
          "The college shall not conduct any entrance test in any form and the admissions are purely based on merit duly following the reservation policy as per the norms of Government of Maharashtra.",
          "While drawing the merit list weightage has to be given to students from Arts, Commerce and Science Stream at 12th Standard Level. The stream wise weightage to be given is as under:",
          "Commerce: 45%",
          " Arts: 25%",
          " Science: 25%",
          " Diploma in Engineering and Other: 5%"
        ],
        career: [
          "Manager - Leading teams and departments",
          "Business Analyst - Analyzing business processes and data",
          "HR Professional - Managing human resources and talent",
          "Marketing Executive - Developing and executing marketing strategies",
          "Operations Manager - Overseeing daily business operations",
          "Entrepreneur - Starting and running your own business"
        ],
        subjects: [
          "Principles of Management - Fundamental management theories",
          "Organizational Behavior - Understanding workplace dynamics",
          "Human Resource Management - Managing people effectively",
          "Marketing Management - Creating and delivering value to customers",
          "Financial Management - Managing company finances",
          "Strategic Management - Long-term planning and decision making"
        ],
        structure: {
          title: "FYBMS - Under Choice Based Credit, Grading & Semester System Course Structure (Implemented from Academic Year 2020 – 2021)",
          semesters: [
            {
              title: "SEMESTER I",
              courses: [
                { course: "1", title: "Introduction to Financial Accounts", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "2", title: "Business Law", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "3", title: "Business Statistics", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "4", title: "Business Communication - I", lectures: "", credit: "3", category: "Ability Enhancement Compulsory Course (AECC)" },
                { course: "5", title: "Foundation Course - I", lectures: "", credit: "2", category: "Skill Enhancement Course (SEC)" },
                { course: "6", title: "Foundation of Human Skills", lectures: "", credit: "3", category: "Core Course (CC)" },
                { course: "7", title: "Business Economics - I", lectures: "", credit: "3", category: "Core Course (CC)" }
              ]
            },
            {
              title: "SEMESTER II",
              courses: [
                { course: "1", title: "Principles of Marketing", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "2", title: "Industrial Law", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "3", title: "Business Mathematics", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "4", title: "Business Communication - II", lectures: "", credit: "3", category: "Ability Enhancement Compulsory Course (AECC)" },
                { course: "5", title: "Foundation Course - II", lectures: "", credit: "2", category: "Skill Enhancement Course (SEC)" },
                { course: "6", title: "Business Environment", lectures: "", credit: "3", category: "Core Course (CC)" },
                { course: "7", title: "Principles of Management", lectures: "", credit: "3", category: "Core Course (CC)" }
              ]
            }
          ]
        }
      },
      bscit: {
        title: "B.Sc. (Information Technology)",
        duration: "3 Years",
        description: "This is an integrated course of three years duration. The course shall be a full time course. The duration of the course shall be six semesters spread over three years. The course includes 30 theory papers and one project work to be done in the sixth semester preferably in the Software organization/Institution /Research organization.",
        eligibility: [
          "GUIDELINES FOR ELIGIBILITY",
          "A candidate for being eligible for admission to the degree course in Bachelor of Science – Information Technology shall have passed XII standard examination of the Maharashtra Board of Secondary and Higher Secondary education or its equivalent with Mathematics as one of the subjects and should have secured not less than, 45% marks in aggregate in case of open category student and 40% marks in aggregate in case of reserved category candidates at one and the same sitting.",
          "OR",
          "Candidates who have passed Diploma in Computer Engineering / Computer Science / Computer Technology/ Information Technology / Electrical, Electronics / Allied Branches, Mechanical and Allied Branches, Civil and Allied Branches of Engineering are eligible for admission to the first year of the B.Sc.(IT) degree course. However, the diploma should be recognized by the Maharashtra State Board of Technical Education or any other recognized government body. Minimum marks required is 45% aggregate for open category candidates and 40% aggregate for reserved category candidates.",
          "AND",
          "Students with post HSC- Diploma in computer Engineering / Computer Science / Computer Technology will be eligible for direct admission to the second Year of B.Sc(IT). However, the Diploma should be recognized by the Maharashtra State Board of Technical Education or any other recognized government body."
        ],
        career: [
          "Software Developer - Creating applications and software solutions",
          "Web Developer - Building websites and web applications",
          "Database Administrator - Managing and maintaining databases",
          "IT Support Specialist - Providing technical support and troubleshooting",
          "System Analyst - Analyzing and improving IT systems",
          "Cybersecurity Specialist - Protecting systems from digital threats"
        ],
        subjects: [
          "Programming in C - Foundation programming language",
          "Database Management Systems - Storing and retrieving data efficiently",
          "Web Technologies - HTML, CSS, JavaScript for web development",
          "Software Engineering - Systematic approach to software development",
          "Computer Networks - Understanding how computers communicate",
          "Mobile Application Development - Creating apps for smartphones"
        ]
      },
      bcomaf: {
        title: "B.Com (Accounting & Finance)",
        duration: "3 Years",
        description: "The course shall be a full time course. The duration of the course shall be six semesters spread over three years. The course shall consist of 39 subjects and 1 project.",
        eligibility: [
          "ELIGIBILITY: Ordinance",
          "A Candidate for being eligible for the Bachelor of Commerce (Accounting & Finance) Degree course shall have passed Std. XII Examination of the Maharashtra Board of Higher Secondary Education or its equivalent and secured not less than 45% marks in aggregate at one and the same sitting (40% in case of reserved category)."
        ],
        career: [
          "Chartered Accountant - Professional accounting and auditing",
          "Financial Advisor - Helping individuals and businesses with financial planning",
          "Investment Analyst - Analyzing investment opportunities and risks",
          "Audit Assistant - Supporting auditing processes and compliance",
          "Tax Consultant - Providing tax planning and preparation services",
          "Corporate Finance Professional - Managing company financial operations"
        ],
        subjects: [
          "Advanced Financial Accounting - Complex accounting principles and standards",
          "Cost Accounting - Calculating and controlling business costs",
          "Management Accounting - Using accounting information for decision making",
          "Corporate Finance - Managing company financial resources",
          "Investment Analysis - Evaluating investment opportunities",
          "Taxation - Understanding tax laws and compliance"
        ],
        structure: {
          title: "F.Y.B.COM (ACCOUNTING & FINANCE) - Under Choice Based Credit, Grading & Semester System Course Structure (Implemented from Academic Year 2020 – 21)",
          semesters: [
            {
              title: "SEMESTER I",
              courses: [
                { course: "1", title: "Financial Accounting (Elements of Financial Accounting) - I", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "2", title: "Cost Accounting (Introduction and Element of cost) - I", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "3", title: "Financial Management (Introduction to Financial Management) - I", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "4", title: "Business Communication - I", lectures: "", credit: "3", category: "Ability Enhancement Compulsory Course (AECC)" },
                { course: "5", title: "Foundation Course - I", lectures: "", credit: "2", category: "Skill Enhancement Courses (SEC)" },
                { course: "6", title: "Commerce (Business Environment) - I", lectures: "", credit: "3", category: "Core Courses (CC)" },
                { course: "7", title: "Business Economics - I", lectures: "", credit: "3", category: "Core Courses (CC)" }
              ]
            },
            {
              title: "SEMESTER II",
              courses: [
                { course: "1", title: "Financial Accounting (Special Accounting Areas) - II", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "2", title: "Auditing (Introduction and Planning) - I", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "3", title: "Taxation - I (Indirect Taxes I)", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "4", title: "Business Communication - II", lectures: "", credit: "3", category: "Ability Enhancement Compulsory Course (AECC)" },
                { course: "5", title: "Foundation Course - II", lectures: "", credit: "2", category: "Skill Enhancement Courses (SEC)" },
                { course: "6", title: "Business Law (Business Regulatory Framework) - I", lectures: "", credit: "3", category: "Core Courses (CC)" },
                { course: "7", title: "Business Mathematics", lectures: "", credit: "3", category: "Core Courses (CC)" }
              ]
            }
          ]
        }
      },
      bcombi: {
        title: "B.Com (Banking & Insurance)",
        duration: "3 Years",
        description: "The Course shall be a full time course. The duration of the Course shall be Six Semester spread over three years. The Course shall consist of 39 subjects & 1 project.",
        eligibility: [
          "ELIGIBILITY:",
          "A Candidate for being eligible for admission to the Bachelor of Commerce (Banking & Insurance) Degree Course shall have passed Std. XII. Examination of Maharashtra State Board of Secondary and Higher Secondary Education or its equivalent and secured not less than 45% marks in aggregate (40% in case of reserved category) at one & the same sitting."
        ],
        career: [
          "Bank Officer - Managing banking operations and customer relationships",
          "Insurance Agent - Selling insurance products and providing advice",
          "Loan Officer - Evaluating and processing loan applications",
          "Financial Services Representative - Providing various financial services",
          "Risk Analyst - Assessing and managing financial risks",
          "Investment Advisor - Helping clients with investment decisions"
        ],
        subjects: [
          "Banking Operations - Understanding how banks function",
          "Insurance Principles - Types of insurance and their applications",
          "Risk Management - Identifying and mitigating financial risks",
          "Financial Services - Various services offered by financial institutions",
          "Credit Management - Managing lending and credit processes",
          "Investment Banking - Understanding capital markets and investments"
        ],
        structure: {
          title: "B.COM (BANKING & INSURANCE) PROGRAMME - Under Choice Based Credit, Grading & Semester System Course Structure (Implemented from Academic Year 2020 – 21)",
          semesters: [
            {
              title: "SEMESTER I",
              courses: [
                { course: "1", title: "Financial Accounting (Elements of Financial Accounting) - I", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "2", title: "Cost Accounting (Introduction and Element of cost) - I", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "3", title: "Financial Management (Introduction to Financial Management) - I", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "4", title: "Business Communication - I", lectures: "", credit: "3", category: "Ability Enhancement Compulsory Course (AECC)" },
                { course: "5", title: "Foundation Course - I", lectures: "", credit: "2", category: "Skill Enhancement Courses (SEC)" },
                { course: "6", title: "Commerce (Business Environment) - I", lectures: "", credit: "3", category: "Core Courses (CC)" },
                { course: "7", title: "Business Economics - I", lectures: "", credit: "3", category: "Core Courses (CC)" }
              ]
            },
            {
              title: "SEMESTER II",
              courses: [
                { course: "1", title: "Financial Accounting (Special Accounting Areas) - II", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "2", title: "Auditing (Introduction and Planning) - I", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "3", title: "Taxation - I (Indirect Taxes I)", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "4", title: "Business Communication - II", lectures: "", credit: "3", category: "Ability Enhancement Compulsory Course (AECC)" },
                { course: "5", title: "Foundation Course - II", lectures: "", credit: "2", category: "Skill Enhancement Courses (SEC)" },
                { course: "6", title: "Business Law (Business Regulatory Framework) - I", lectures: "", credit: "3", category: "Core Courses (CC)" },
                { course: "7", title: "Business Mathematics", lectures: "", credit: "3", category: "Core Courses (CC)" }
              ]
            }
          ]
        }
      },
      bscai: {
        title: "B.Sc. (Artificial Intelligence)",
        duration: "3 Years",
        description: "This cutting-edge program teaches you about artificial intelligence, machine learning, and smart computer systems. You'll learn how to create intelligent software that can learn and make decisions.",
        eligibility: [
          "Completed 12th grade (HSC) with Mathematics and preferably Computer Science",
          "Minimum 50% marks in 12th grade",
          "Strong analytical and logical thinking skills"
        ],
        career: [
          "AI Developer - Creating artificial intelligence applications",
          "Machine Learning Engineer - Building systems that learn from data",
          "Data Scientist - Extracting insights from large datasets",
          "AI Research Specialist - Conducting research in AI technologies",
          "Robotics Engineer - Developing intelligent robotic systems",
          "Tech Consultant - Advising companies on AI implementation"
        ],
        subjects: [
          "Introduction to AI - Fundamentals of artificial intelligence",
          "Machine Learning - Algorithms that learn from data",
          "Deep Learning - Advanced neural network techniques",
          "Natural Language Processing - Teaching computers to understand human language",
          "Computer Vision - Enabling computers to interpret visual information",
          "Robotics - Building and programming intelligent robots"
        ]
      },
      mcom: {
        title: "M.Com (Accountancy)",
        duration: "2 Years",
        description: "The course shall be a full time course spreading over two years. This advanced program deepens your knowledge of accounting principles, auditing, and financial reporting. You'll become an expert in managing complex financial records and understanding advanced accounting standards.",
        eligibility: [
          "ELIGIBILITY:",
          "A Candidate for being eligible for admission to the Master of Commerce Degree Course shall have passed B.Com or BMS or B.Com (B&I) or B.Com(A&F) or B.Com(FM) examinations of the University of Mumbai or any other University recognized by the U.G.C."
        ],
        career: [
          "Senior Accountant - Managing complex accounting operations",
          "Audit Manager - Leading audit teams and processes",
          "Financial Controller - Overseeing financial operations of organizations",
          "Tax Expert - Specializing in complex tax matters",
          "Accounting Professor - Teaching accounting at higher education level",
          "CFO (with experience) - Chief Financial Officer of companies"
        ],
        subjects: [
          "Strategic Management - Advanced strategic planning and implementation",
          "Economics for Business Decisions - Economic analysis for business strategy",
          "Cost & Management Accounting - Advanced cost analysis and management",
          "Business Ethics & Corporate Social Responsibility - Ethical business practices",
          "Research Methodology for Business - Research methods in business studies",
          "Macro Economics Concepts Applications - Macroeconomic theory and practice",
          "Corporate Finance - Advanced corporate financial management",
          "E-Commerce - Digital business and online commerce strategies"
        ],
        structure: {
          title: "MASTER OF COMMERCE (M.COM.) PROGRAMME - Under Choice Based Credit, Grading & Semester System Course Structure (Implemented from Academic Year 2020 – 21)",
          semesters: [
            {
              title: "SEMESTER I",
              courses: [
                { course: "1", title: "Strategic Management", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "2", title: "Economics for Business Decisions", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "3", title: "Cost & Management Accounting", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "4", title: "Business Ethics & Corporate Social Responsibility", lectures: "", credit: "6", category: "Core Courses (CC)" }
              ]
            },
            {
              title: "SEMESTER II",
              courses: [
                { course: "1", title: "Research Methodology for Business", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "2", title: "Macro Economics Concepts Applications", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "3", title: "Corporate Finance", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "4", title: "E-Commerce", lectures: "", credit: "6", category: "Core Courses (CC)" }
              ]
            }
          ]
        }
      },
      mscit: {
        title: "M.Sc (Information Technology)",
        duration: "2 Years",
        description: "M.Sc.(IT) is a full time course spreading over two years. It consists 16 subjects and 1 project. This advanced IT program covers sophisticated programming, software engineering, and emerging technologies. You'll learn to design and manage complex computer systems and applications.",
        eligibility: [
          "ELIGIBILITY:",
          "The Candidate must have passed the B.Sc. degree in Information Technology of the University of Mumbai or any recognized University with minimum 45% marks or B.Sc. (Computer Sci.) with minimum 45% marks or BE degree in any branch with 45% marks or B.Sc.(Maths) with minimum 45% marks or B.Sc.(Physics) with minimum 45% marks or B.Sc.(Statistics) with minimum 45% marks or B.Sc. (Electronics) with minimum 45% marks."
        ],
        career: [
          "Senior Software Developer - Leading software development projects",
          "IT Project Manager - Managing technology projects and teams",
          "Systems Architect - Designing complex IT system architectures",
          "Technical Lead - Leading technical teams and making technology decisions",
          "IT Consultant - Advising organizations on technology solutions",
          "Research Scientist - Conducting research in computer science"
        ],
        subjects: [
          "Data Mining - Extracting patterns and knowledge from large datasets",
          "Distributed System - Understanding distributed computing architectures",
          "Data Analysis Tools - Tools and techniques for data analysis",
          "Software Testing - Advanced testing methodologies and practices",
          "Mobile Computing - Development of mobile applications and systems",
          "Advanced Computer Networks - Complex networking concepts and protocols",
          "Cloud Computing & Ubiquitous Systems - Cloud technologies and pervasive computing",
          "Advanced Database Systems - Complex database design and management"
        ],
        structure: {
          title: "M.Sc.(IT) PROGRAMME - FIRST YEAR SUBJECTS",
          semesters: [
            {
              title: "SEMESTER I",
              courses: [
                { course: "1", title: "Data Mining", lectures: "", credit: "6", category: "Core Subjects" },
                { course: "2", title: "Distributed System", lectures: "", credit: "6", category: "Core Subjects" },
                { course: "3", title: "Data Analysis Tools", lectures: "", credit: "6", category: "Core Subjects" },
                { course: "4", title: "Software Testing", lectures: "", credit: "6", category: "Core Subjects" }
              ]
            },
            {
              title: "SEMESTER II",
              courses: [
                { course: "1", title: "Mobile Computing", lectures: "", credit: "6", category: "Core Subjects" },
                { course: "2", title: "Advanced Computer Networks", lectures: "", credit: "6", category: "Core Subjects" },
                { course: "3", title: "Cloud Computing & Ubiquitous Systems", lectures: "", credit: "6", category: "Core Subjects" },
                { course: "4", title: "Advanced Database Systems", lectures: "", credit: "6", category: "Core Subjects" }
              ]
            }
          ]
        }
      },
      mscds: {
        title: "M.Sc (Data Science)",
        duration: "2 Years",
        description: "M.Sc.(DS) is a full time course spreading over two years. It consists of 14 subjects, 1 internship and 1 project. This program teaches you to analyze large amounts of data to find patterns and insights. You'll learn statistical methods, programming, and how to help businesses make data-driven decisions.",
        eligibility: [
          "ELIGIBILITY:",
          "The Candidate must have passed B.Sc. (Information Technology), B.Sc. (Computer Science), B.Sc. (Mathematics), B.Sc. (Statistics), B.Sc. (Physics), B.Sc. (Electronics) or B.C.A. From any recognized university in India.",
          "It is mandatory that all students should have done Calculus and Linear Algebra course during their graduation."
        ],
        career: [
          "Data Scientist - Extracting insights from complex datasets",
          "Data Analyst - Analyzing data to support business decisions",
          "Business Intelligence Analyst - Creating reports and dashboards for business insights",
          "Machine Learning Engineer - Building predictive models and algorithms",
          "Research Analyst - Conducting data-driven research",
          "Quantitative Analyst - Using mathematical models for financial analysis"
        ],
        subjects: [
          "Statistical methods and Linear Programming - Advanced statistical techniques and optimization",
          "Advanced Database Management system - Complex database design and management",
          "Data Mining for Business Intelligence - Extracting business insights from data",
          "Data Science – I - Fundamentals of data science methodology",
          "Advanced Statistical Methods - Sophisticated statistical analysis techniques",
          "Machine Learning - Algorithms for predictive modeling and pattern recognition",
          "Linear Algebra - Mathematical foundations for data science",
          "Research Methodology - Scientific research methods and practices"
        ],
        structure: {
          title: "M.Sc.(DS) PROGRAMME - FIRST YEAR SUBJECTS",
          semesters: [
            {
              title: "SEMESTER I",
              courses: [
                { course: "1", title: "Statistical methods and Linear Programming", lectures: "", credit: "", category: "Core Subjects" },
                { course: "2", title: "Advanced Database Management system", lectures: "", credit: "", category: "Core Subjects" },
                { course: "3", title: "Data Mining for Business Intelligence", lectures: "", credit: "", category: "Core Subjects" },
                { course: "4", title: "Data Science – I", lectures: "", credit: "", category: "Core Subjects" }
              ]
            },
            {
              title: "SEMESTER II",
              courses: [
                { course: "1", title: "Advanced Statistical Methods", lectures: "", credit: "6", category: "Core Subjects" },
                { course: "2", title: "Machine Learning", lectures: "", credit: "6", category: "Core Subjects" },
                { course: "3", title: "Linear Algebra", lectures: "", credit: "6", category: "Core Subjects" },
                { course: "4", title: "Research Methodology", lectures: "", credit: "6", category: "Core Subjects" }
              ]
            }
          ]
        }
      },
      mcomgwm: {
        title: "M.Com (Global Wealth Management)",
        duration: "2 Years",
        description: "Master of Commerce (Global Wealth Management) is a fulltime specialized program spreading over 4 semesters over 2 years. The program is focused towards helping students understand the global wealth management landscape to align financial products in line with clients' financial objectives. The program not only aims at specializing a student in handholding clients through their investment journey and achieving their financial goals, but it also includes the learnings in the areas of life cycle management and estate planning. The program consists of 15 subjects, 1 midterm assisted internship and 1 research based project.",
        eligibility: [
          "ELIGIBILITY:",
          "A Candidate for being eligible for admission to the Master of Commerce (Global Wealth Management) Degree should possess a valid bachelor's degree from any recognised university in India or Abroad.",
          "An entrance test will be conducted on General and Logical Aptitude.",
          "The selected students will go through an interview process"
        ],
        career: [
          "Wealth advisory outfits - Providing comprehensive wealth management services",
          "Assets management companies - Managing investment portfolios and funds",
          "Broking firms - Facilitating securities trading and investment services",
          "Insurance companies - Providing insurance and investment products",
          "Banking sector - Offering private banking and wealth management services",
          "Advisory business - Independent financial advisory and consulting services"
        ],
        subjects: [
          "Indian and Global Financial Economics - Understanding economic principles in financial markets",
          "Indian and Global Financial System - Structure and functioning of financial systems",
          "Regulatory Requirements and Ethics of Financial Markets - Compliance and ethical practices",
          "Indian and Global Taxation on Investments - Tax implications of various investments",
          "Quantitative Methods in Finance - Mathematical and statistical methods in finance",
          "Alternative Investments - Non-traditional investment options and strategies",
          "Behavioural Finance and Investors' Psychology - Understanding investor behavior",
          "Introduction to Global Wealth Management and Financial Research and Technical Analysis - Comprehensive wealth management strategies"
        ],
        structure: {
          title: "M.Com (Global Wealth Management) PROGRAMME - Under Choice Based Credit, Grading & Semester System Course Structure (Implemented from Academic Year 2022 – 23)",
          semesters: [
            {
              title: "SEMESTER I",
              courses: [
                { course: "1", title: "Indian and Global Financial Economics", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "2", title: "Indian and Global Financial System", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "3", title: "Regulatory Requirements and Ethics of Financial Markets", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "4", title: "Indian and Global Taxation on Investments", lectures: "", credit: "6", category: "Core Courses (CC)" }
              ]
            },
            {
              title: "SEMESTER II",
              courses: [
                { course: "1", title: "Quantitative Methods in Finance", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "2", title: "Alternative Investments", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "3", title: "Behavioural Finance and Investors' Psychology", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "4", title: "Introduction to Global Wealth Management and Financial Research and Technical Analysis", lectures: "", credit: "6", category: "Core Courses (CC)" }
              ]
            }
          ]
        }
      },
      phd: {
        title: "Ph.D. (Commerce)",
        duration: "3-5 Years",
        description: "This is the highest academic degree where you conduct original research in commerce, economics, or business. You'll contribute new knowledge to your field and become an expert researcher and scholar.",
        eligibility: [
          "Master's degree in Commerce or related field with minimum 55% marks",
          "Cleared UGC NET/JRF or equivalent examination",
          "Research aptitude and strong academic background",
          "Entrance test and interview may be required"
        ],
        career: [
          "Professor - Teaching and research at universities",
          "Research Scientist - Conducting advanced research in commerce and economics",
          "Policy Advisor - Advising government and organizations on policy matters",
          "Think Tank Researcher - Conducting research for policy institutes",
          "Academic Administrator - Managing academic institutions",
          "Industry Research Head - Leading research departments in companies"
        ],
        subjects: [
          "Research Methodology - Advanced research methods and techniques",
          "Advanced Statistics - Statistical methods for research analysis",
          "Literature Review - Comprehensive review of existing research",
          "Thesis Writing - Developing and writing original research",
          "Publication Ethics - Understanding academic publishing standards",
          "Specialized Research Area - Deep focus on chosen research topic"
        ]
      },
      mcombf: {
        title: "M.Com (Banking And Finance)",
        duration: "2 Years",
        description: "This specialized program focuses on advanced banking operations, financial services, and modern finance concepts. You'll learn about banking regulations, financial markets, and advanced financial management techniques.",
        eligibility: [
          "Bachelor's degree in Commerce, Finance, or related field",
          "Minimum 50% marks in graduation (45% for reserved categories)",
          "Background in banking or finance subjects preferred"
        ],
        career: [
          "Bank Manager - Managing banking operations and customer relationships",
          "Financial Services Manager - Overseeing financial service operations",
          "Credit Analyst - Evaluating loan applications and credit risks",
          "Investment Banking Associate - Working in investment banking services",
          "Financial Risk Manager - Managing and mitigating financial risks",
          "Corporate Banking Specialist - Handling corporate banking relationships"
        ],
        subjects: [
          "Advanced Banking Operations - Modern banking systems and processes",
          "Financial Markets and Institutions - Understanding financial market dynamics",
          "Corporate Finance - Advanced corporate financial management",
          "Risk Management in Banking - Identifying and managing banking risks",
          "International Banking - Global banking practices and regulations",
          "Financial Derivatives - Understanding and using financial instruments"
        ]
      },
      mcomfrta: {
        title: "M.Com (Financial Research And Technical Analysis)",
        duration: "2 Years",
        description: "Master of Commerce (Financial Research and Technical Analysis) is a fulltime specialised program spreading over 4 semesters over 2 years. The program is focused towards helping students understand the areas of financial research and technical analysis for aligning financial products in line with clients' financial objectives. The program not only aims at specializing a student in handholding clients through their investment journey and achieving their financial goals, but it also includes the learning in the domain of research report writing, designing and testing strategies along with theories of market dynamics. The program consists of 15 subjects, 1 midterm assisted internship and 1 research based project.",
        eligibility: [
          "ELIGIBILITY:",
          "A Candidate for being eligible for admission to the Master of Commerce (Financial Research and Technical Analysis) Degree should possess a valid bachelor's degree from any recognised university in India or Abroad.",
          "An entrance test will be conducted on General and Logical Aptitude.",
          "The selected students will go through an interview process"
        ],
        career: [
          "Wealth advisory outfits - Providing comprehensive wealth management and research services",
          "Assets management companies - Managing investment portfolios and conducting research",
          "Broking firms - Facilitating securities trading with research support",
          "Insurance companies - Providing insurance and investment research products",
          "Banking sector - Offering research-based banking and financial services",
          "Advisory business - Independent financial advisory and research consulting services"
        ],
        subjects: [
          "Indian and Global Financial Economics - Understanding economic principles in financial markets",
          "Indian and Global Financial System - Structure and functioning of financial systems",
          "Regulatory Requirements and Ethics of Financial Markets - Compliance and ethical practices in research",
          "Indian and Global Taxation on Investments - Tax implications of various investments",
          "Quantitative Methods in Finance - Mathematical and statistical methods in finance research",
          "Alternative Investments - Research on non-traditional investment options and strategies",
          "Behavioural Finance and Investors' Psychology - Understanding investor behavior for research",
          "Research report writing - Professional financial research documentation and analysis"
        ],
        structure: {
          title: "M.Com (Financial Research and Technical Analysis) PROGRAMME - Under Choice Based Credit, Grading & Semester System Course Structure (Implemented from Academic Year 2022 – 23)",
          semesters: [
            {
              title: "SEMESTER I",
              courses: [
                { course: "1", title: "Indian and Global Financial Economics", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "2", title: "Indian and Global Financial System", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "3", title: "Regulatory Requirements and Ethics of Financial Markets", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "4", title: "Indian and Global Taxation on Investments", lectures: "", credit: "6", category: "Core Courses (CC)" }
              ]
            },
            {
              title: "SEMESTER II",
              courses: [
                { course: "1", title: "Quantitative Methods in Finance", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "2", title: "Alternative Investments", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "3", title: "Behavioural Finance and Investors' Psychology", lectures: "", credit: "6", category: "Core Courses (CC)" },
                { course: "4", title: "Financial Research and Technical Analysis Specialization", lectures: "", credit: "6", category: "Core Courses (CC)" }
              ]
            }
          ]
        }
      },
      mcombm: {
        title: "M.Com (Business Management)",
        duration: "2 Years",
        description: "This comprehensive program combines commerce knowledge with advanced business management skills. You'll learn strategic planning, leadership, and advanced management techniques for senior business roles.",
        eligibility: [
          "Bachelor's degree in Commerce, Management, or related field",
          "Minimum 50% marks in graduation (45% for reserved categories)",
          "Interest in business management and leadership"
        ],
        career: [
          "Business Manager - Managing business operations and strategies",
          "Operations Manager - Overseeing day-to-day business operations",
          "Strategic Planning Manager - Developing and implementing business strategies",
          "Business Development Manager - Identifying and pursuing growth opportunities",
          "General Manager - Managing multiple business functions",
          "Management Consultant - Advising businesses on management practices"
        ],
        subjects: [
          "Strategic Management - Long-term planning and competitive strategy",
          "Advanced Business Analytics - Using data for business decision making",
          "Leadership and Organizational Behavior - Managing people and teams effectively",
          "International Business Management - Managing global business operations",
          "Innovation and Entrepreneurship - Creating and managing new business ventures",
          "Business Ethics and Corporate Governance - Responsible business practices"
        ]
      },
      bcomfm: {
        title: "B.Com (Financial Markets)",
        duration: "3 Years",
        description: "The course shall be a full time course. The duration of the course shall be six semester spread over three years. The course shall consist of 39 modules & 1 project.",
        eligibility: [
          "ELIGIBILITY:",
          "A candidate for being eligible for admission to the Bachelor of Commerce (Financial Markets) Degree Course shall have passed XII Std. examination of the State Board of Secondary and Higher Secondary Education or its equivalent and secured not less than 45% marks in the aggregate (40% in case of Reserved Category) at one and the same sitting."
        ],
        career: [
          "Stock Broker - Facilitating buying and selling of securities",
          "Investment Analyst - Analyzing investment opportunities and market trends",
          "Portfolio Manager - Managing investment portfolios for clients",
          "Financial Market Researcher - Conducting research on market trends",
          "Mutual Fund Manager - Managing mutual fund investments",
          "Securities Trader - Trading stocks, bonds, and other securities"
        ],
        subjects: [
          "Financial Markets and Institutions - Understanding market structure and participants",
          "Securities Analysis - Evaluating stocks, bonds, and other securities",
          "Portfolio Management - Creating and managing investment portfolios",
          "Derivatives and Risk Management - Understanding futures, options, and risk mitigation",
          "Capital Market Operations - How capital markets function and operate",
          "Investment Banking - Understanding investment banking services and operations"
        ],
        structure: {
          title: "B.COM (FINANCIAL MARKETS) PROGRAMME - Under Choice Based Credit, Grading & Semester System Course Structure (Implemented from Academic Year 2020 – 21)",
          semesters: [
            {
              title: "SEMESTER I",
              courses: [
                { course: "1", title: "Financial Accounting – I", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "2", title: "Introduction to Financial System", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "3", title: "Business Mathematics", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "4", title: "Business Communication - I", lectures: "", credit: "3", category: "Ability Enhancement Compulsory Course (AECC)" },
                { course: "5", title: "Foundation Course - I", lectures: "", credit: "2", category: "Skill Enhancement Courses (SEC)" },
                { course: "6", title: "Business Environment", lectures: "", credit: "3", category: "Core Courses (CC)" },
                { course: "7", title: "Business Economics - I", lectures: "", credit: "3", category: "Core Courses (CC)" }
              ]
            },
            {
              title: "SEMESTER II",
              courses: [
                { course: "1", title: "Financial Accounting - II", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "2", title: "Principles of Management", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "3", title: "Business Statistics", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "4", title: "Business Communication - II", lectures: "", credit: "3", category: "Ability Enhancement Compulsory Course (AECC)" },
                { course: "5", title: "Foundation Course - II", lectures: "", credit: "2", category: "Skill Enhancement Courses (SEC)" },
                { course: "6", title: "Environmental Science", lectures: "", credit: "3", category: "Core Courses (CC)" },
                { course: "7", title: "Computer Skills - I", lectures: "", credit: "3", category: "Core Courses (CC)" }
              ]
            }
          ]
        }
      },
      bcomhia: {
        title: "B.Com Hons. (International Accounting)",
        duration: "3 Years",
        description: "B.Com (Hons.) in International Accounting is a fulltime specialised program spreading over 6 semesters over 3 years. The program's curriculum is based on ACCA - IFRS (International Financial Reporting Standards). The program aims at specializing students to International Accounting / IFRS to develop the career of the students in the field of Global Accounting, Finance and Leadership thereby extending global recognition and career opportunities in INDIA and across 179 Countries. With B.Com (Hons.) in International Accounting core qualification offering students a well-rounded 360 Degree Technical and Business driven knowledge which will enable them to learn everything that would support their implementation and productivity in the practical scenario. The program consists of Core subjects, specialisations and focused approach on student transformation through Business Skill driven learning delivered by experienced faculties, domain experts and leaders from the Industry. Degree will add 2x higher value in their Career Portfolio. Apart from the globally recognised ACCA Degree (post ACCA examination); the program will also offer them certification from NSE, NISM in Financial literacy subjects, Business Analytics training certified by IBM will add further Global recognition to their Skills. On successful completion of B.Com (Hons.) in International Accounting qualification a student can be employed in the Big 4 accounting Firms, Global Banks, Financial Institutions & government regulators.",
        eligibility: [
          "ELIGIBILITY:",
          "A candidate for being eligible for admission to the Bachelor of Commerce (International Accounting) Degree Course shall have passed XII Std. examination of the State Board of Secondary and Higher Secondary Education or its equivalent and secured not less than 45% marks in the aggregate (40% in case of Reserved Category) at one and the same sitting."
        ],
        career: [
          "Big 4 Accounting Firms - Working with global accounting giants like Deloitte, PwC, EY, KPMG",
          "Global Banks - International banking operations and financial services",
          "Financial Institutions - Investment banks, insurance companies, and financial services",
          "Government Regulators - Financial regulatory bodies and compliance organizations",
          "International Accountant - Managing accounts for multinational companies",
          "Global Financial Analyst - Analyzing international financial data and markets"
        ],
        subjects: [
          "Financial Accounting (FA) - ACCA-based financial accounting principles",
          "Management Accounting (MA) - Strategic management accounting techniques",
          "Business in Technology (BT) - Technology applications in business",
          "Performance Management (PM) - Performance measurement and management systems",
          "NSE Capital Markets - Certification in capital market operations",
          "Business Analytics - IBM certified training in data analysis"
        ],
        structure: {
          title: "B.Com (Hons.) in International Accounting PROGRAMME - Under Choice Based Credit, Grading & Semester System Course Structure (Implemented from Academic Year 2020 – 21)",
          semesters: [
            {
              title: "SEMESTER I",
              courses: [
                { course: "1", title: "Financial Accounting (FA)", lectures: "", credit: "4", category: "Elective Courses (EC)" },
                { course: "2", title: "Business in Technology (BT)", lectures: "", credit: "4", category: "Elective Courses (EC)" },
                { course: "3", title: "Business Economics – Micro", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "4", title: "NSE – Capital Markets – (Certification)", lectures: "", credit: "3", category: "Ability Enhancement Courses (AEC)" },
                { course: "5", title: "Business Communication", lectures: "", credit: "3", category: "Ability Enhancement Courses (AEC)" },
                { course: "6", title: "Excel & Advanced Excel", lectures: "", credit: "3", category: "Skill Enhancement Courses (SEC)" }
              ]
            },
            {
              title: "SEMESTER II",
              courses: [
                { course: "1", title: "Management Accounting (MA)", lectures: "", credit: "4", category: "Elective Courses (EC)" },
                { course: "2", title: "Performance Management (PM)", lectures: "", credit: "4", category: "Elective Courses (EC)" },
                { course: "3", title: "Business Economics – Macro", lectures: "", credit: "3", category: "Elective Courses (EC)" },
                { course: "4", title: "Equity & Derivatives", lectures: "", credit: "3", category: "Ability Enhancement Courses (AEC)" },
                { course: "5", title: "Business Environment (IIMS)", lectures: "", credit: "3", category: "Ability Enhancement Courses (AEC)" },
                { course: "6", title: "Accounting Tally ERP", lectures: "", credit: "3", category: "Skill Enhancement Courses (SEC)" }
              ]
            }
          ],
          passingStandard: {
            title: "Passing Standard",
            details: [
              "The learners to pass a course shall have to obtain a minimum of 50% marks in aggregate for each subject where the subjects consist of Internal Assessment / Continuous Evaluation and Semester End Examination.",
              "The learners shall obtain minimum of 50% marks (i.e. 20 out of 40) in the Internal Assessment / Continuous Evaluation and 50% marks in Semester End Examination (i.e. 30 Out of 60) separately, to pass the course and minimum of Grade E to pass a particular semester.",
              "A learner will be said to have passed the course if the learner passes the Internal Assessment / Continuous Evaluation and Semester End Examination together."
            ]
          }
        }
      }
    };



    // Show course modal
    function showCourseModal(courseId) {
      const course = courseData[courseId];
      if (!course) return;
      
      let structureSection = '';
      if (course.structure) {
        structureSection = `
          <div class="modal-section">
            <h3>${course.structure.title}</h3>
            ${course.structure.semesters.map(semester => `
              <div style="margin-bottom: 30px;">
                <h4 style="color: #ff8c5a; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid #f0f0f0; padding-bottom: 5px;">${semester.title}</h4>
                <div style="overflow-x: auto;">
                  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
                    <thead>
                      <tr style="background-color: #f8f9fa;">
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: left; font-weight: 600;">Course</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: left; font-weight: 600;">Title of the Course</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: left; font-weight: 600;">Lectures/Tutorials</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: left; font-weight: 600;">Credit</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${semester.courses.map((courseItem, index) => {
                        let categoryHeader = '';
                        if (index === 0 || semester.courses[index-1].category !== courseItem.category) {
                          categoryHeader = `<tr><td colspan="4" style="background-color: #fff3e0; padding: 8px; font-weight: 600; color: #ff8c5a; border: 1px solid #ddd;">${courseItem.category}</td></tr>`;
                        }
                        return categoryHeader + `
                          <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">${courseItem.course}</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${courseItem.title}</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${courseItem.lectures}</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${courseItem.credit}</td>
                          </tr>
                        `;
                      }).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }
      
      const modalContent = `
        <div class="modal-header">
          <h2>${course.title}</h2>
          <p><strong>Duration:</strong> ${course.duration}</p>
        </div>
        
        <div class="modal-body">
          <div class="modal-section">
            <h3>About This Program</h3>
            <p>${course.description}</p>
          </div>
          
          <div class="modal-section">
            <h3>Eligibility Criteria</h3>
            <ul>
              ${course.eligibility.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          
          ${structureSection}
          
          ${course.structure && course.structure.passingStandard ? `
            <div class="modal-section">
              <h3>${course.structure.passingStandard.title}</h3>
              <ul>
                ${course.structure.passingStandard.details.map(detail => `<li>${detail}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

        </div>
      `;
      
      document.getElementById('modalContent').innerHTML = modalContent;
      document.getElementById('courseModal').style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    // Close course modal
    function closeCourseModal() {
      document.getElementById('courseModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById('courseModal');
      if (event.target === modal) {
        closeCourseModal();
      }
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeCourseModal();
      }
    });

    // Initialize page
    document.addEventListener('DOMContentLoaded', function() {
      console.log('Courses page loaded successfully!');
    });
  
    
  
/*research recognitions */
 const guideshipPDFs = {
      'dr_shanti_suresh': 'https://siesce.edu.in/docs/3.2.3%20university%20letter%20of%20PHD%20guides-Dr.%20Shanti.pdf',
      'dr_seethalekshmy_n': 'https://siesce.edu.in/docs/1729498640%20SEETA%20MAAM%20FINAL.pdf',
      'dr_rinkesh_chheda': 'https://siesce.edu.in/docs/1729498310%20RINKESH%20FINAL.pdf'
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

    // Scroll to Top Functionality
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // Show/Hide Scroll Button
    window.addEventListener('scroll', function() {
      const scrollBtn = document.querySelector('.scroll-top');
      if (window.pageYOffset > 300) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });

    // Initialize Page
    document.addEventListener('DOMContentLoaded', function() {
      console.log('Research Recognitions page loaded successfully!');
    });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9810ff98469f1432',t:'MTc1ODIwMDEzNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

/*research scholars*/

 const scholars = [
      // Commerce - Guide: Dr. Seethalekshmy. Narayana Iyer
      { dept: "Commerce", guide: "Dr. Seethalekshmy. Narayana Iyer", student: "Dr. Swati Suryanarayanan", title: "A study of Investment pattern of faculty members of colleges affiliated to University of Mumbai", reg: "12", status: "Completed" },
      { dept: "Commerce", guide: "Dr. Seethalekshmy. Narayana Iyer", student: "Dr. Vijaya Balaji", title: "An analytical study of training programmes conducted in small and medium scale industries with special reference to MAHAPE Industrial estates Navi-Mumbai ( IT Companies)", reg: "15", status: "Completed" },
      { dept: "Commerce", guide: "Dr. Seethalekshmy. Narayana Iyer", student: "Dr. S. Lakshmi", title: "A study on Skill Gap between Academia and Banking sector with respect to Employability", reg: "22", status: "Completed" },
      { dept: "Commerce", guide: "Dr. Seethalekshmy. Narayana Iyer", student: "Dr. Usha Bhandare", title: "A study on work Life balance of Degree College Teachers affiliated to University of Mumbai", reg: "14", status: "Completed" },
      { dept: "Commerce", guide: "Dr. Seethalekshmy. Narayana Iyer", student: "Dr. Urmila Shetve", title: "A study of agro tourism as a supplementary business for enterprising farmers with reference to satara", reg: "13", status: "Completed" },
      { dept: "Commerce", guide: "Dr. Seethalekshmy. Narayana Iyer", student: "Ms. Jathanna Arnold Sebastin Ancilla", title: "A study of opportunities and challenges of MSMES with special reference to twin city of KDMC region", reg: "27", status: "Pursuing" },
      { dept: "Commerce", guide: "Dr. Seethalekshmy. Narayana Iyer", student: "Mr.Shirsat Nikhil Vijay Asha", title: "A study of financial literacy and its impact on financial planning among teachers of degree college and professional institutes affiliation to the University of Mumbai", reg: "26", status: "Pursuing" },
      { dept: "Commerce", guide: "Dr. Seethalekshmy. Narayana Iyer", student: "Ms.Nazkani Shehnaaz Mohd. Yakub Aisha", title: "A study on the usage of M-Wallets among GEN X and GEN Y with special reference to Mumbai", reg: "25", status: "Pursuing" },

      // Commerce - Guide: Dr. Shanti Suresh
      { dept: "Commerce", guide: "Dr. Shanti Suresh", student: "Ms Fleur Fernandes", title: "Business Responsibility Reporting Practices and Financial Performance Evaluation of NIFTY Midcap companies", reg: "Awaited", status: "Pursuing" },
      { dept: "Commerce", guide: "Dr. Shanti Suresh", student: "Ms Renji Vinod", title: "Retention strategies adopted by market infrastructure institutions - A study of registered infrastructure institutions in Mumbai", reg: "Awaited", status: "Pursuing" },
      { dept: "Commerce", guide: "Dr. Shanti Suresh", student: "Ms Shruthi Sadanandan", title: "A study on the impact of Social Media on Buying Behaviour of Gen Z with respect to Green Consumerism", reg: "Awaited", status: "Pursuing" },
      { dept: "Commerce", guide: "Dr. Shanti Suresh", student: "Ms Divya Thakur", title: "A Behavioural Science approach to enhance the Learner’s Engagement and Completion of MOOCs", reg: "Awaited", status: "Pursuing" },
      { dept: "Commerce", guide: "Dr. Shanti Suresh", student: "Mr Aniket Swaraj", title: "Human Resource implications in implementing Wage Code 2019 & Change Management Initiatives - A Study of listed IT companies in India", reg: "Awaited", status: "Pursuing" },
      { dept: "Commerce", guide: "Dr. Shanti Suresh", student: "Mr. Vijay Subramaniam", title: "A critical and comparative evaluation of data regulations in a connected world", reg: "Awaited", status: "Pursuing" },

      // BMS - Guide: Dr. Rinkesh Chheda
      { dept: "Bachelor Of Management Studies (BMS)", guide: "Dr. Rinkesh Chheda", student: "Ms Prachi Vankiani", title: "A study of media channels that influence consumers buying behaviour with special reference to food industry in metropolitan region", reg: "19120026", status: "Pursuing" },
      { dept: "Bachelor Of Management Studies (BMS)", guide: "Dr.Falguni Mathews", student: "Dr.Falguni Mathews", title: "A study of consumer buying behaviour towards online shopping with reference to fashion apparels in mumbai district", reg: "19120044", status: "Completed" },
      { dept: "Bachelor Of Management Studies (BMS)", guide: "Dr. Rinkesh Chheda", student: "Dr. Puja Prempal Ahuja", title: "A study on advertisement appeals and its impact on consumer buying behaviour with special reference to fast moving consumer goods in Mumbai", reg: "24618019", status: "Completed" },
      { dept: "Bachelor Of Management Studies (BMS)", guide: "Dr. Rinkesh Chheda", student: "Dr. Anoushka Mirgnani", title: "A study on emotional labour and its impact on productivity of faculties at undergraduate level with special reference to Mumbai Metropolitan Region", reg: "24618049", status: "Completed" },
      { dept: "Bachelor Of Management Studies (BMS)", guide: "Dr. Rinkesh Chheda", student: "Dr. Aanchal Jain", title: "A study of consumer buying behaviour with special reference to airport retail versus store based retailing for fashion goods", reg: "24618074", status: "Completed" },
      { dept: "Bachelor Of Management Studies (BMS)", guide: "Dr. Rinkesh Chheda", student: "Dr.Sadaf Baig", title: "A study of personality types and its impact on effective decision making with special reference to non-banking financial companies in Mumbai", reg: "24618035", status: "Completed" },
      { dept: "Bachelor Of Management Studies (BMS)", guide: "Dr. Rinkesh Chheda", student: "Ms Devika S Suryavanshi", title: "An analytical study of emotional intelligence on decision making process with special reference to employees in banking sector in mumbai", reg: "24618027", status: "Completed" },
      { dept: "Bachelor Of Management Studies (BMS)", guide: "Dr. Rinkesh Chheda", student: "Mr Sayèd Amjad Kadri", title: "A study on productivity of low acreage farmers on the decision making process with special reference to raigadh district in kokan region", reg: "24618028", status: "Completed" },
      { dept: "Bachelor Of Management Studies (BMS)", guide: "Dr. Rinkesh Chheda", student: "Ms. Charmi Shah", title: "A study of Brand Ambassador and its influence on CBB with special reference to FMCG industry", reg: "29821085", status: "Awaiting for Final Vivas" },
      { dept: "Bachelor Of Management Studies (BMS)", guide: "Dr. Rinkesh Chheda", student: "Ms. Sitalaxmi Viswamami Tharakadraman", title: "A study on E-learning on Academic performance of degree college students with", reg: "Awaited", status: "Pursuing" }
    ];

    // Elements
    const cardsGrid   = document.getElementById("researchcardsGrid");
    const filterDept  = document.getElementById("filterDept");
    const filterStatus= document.getElementById("filterStatus");
    const searchText  = document.getElementById("searchText");
    const clearBtn    = document.getElementById("clearBtn");
    const resultsMeta = document.getElementById("resultsMeta");
    const emptyState  = document.getElementById("emptyState");

    function statusClass(status){
      switch(status){
        case "Completed": return "status-btn status-completed";
        case "Pursuing": return "status-btn status-pursuing";
        case "Awaiting for Final Vivas": return "status-btn status-vivas";
        case "Awaited": return "status-btn status-awaited";
        default: return "status-btn status-awaited";
      }
    }

    function makeCard(item, idx){
      return `
        <article class="researchcard" style="padding-right:30px" tabindex="0" data-index="${idx}">
          <button class="${statusClass(item.status)}" type="button" data-status="${item.status}" title="Filter by status">${item.status}</button>
          <h4>${item.student}</h4>
          <p class="dept">${item.dept}</p>

          <div class="block">
            <p class="label">Research Guide:</p>
            <p class="value">${item.guide}</p>
          </div>
          <div class="block">
            <p class="label">Research Title:</p>
            <p class="value">${item.title}</p>
          </div>
          <div class="block">
            <p class="label">Registration Number:</p>
            <p class="value">${item.reg}</p>
          </div>
        </article>
      `;
    }

    function render(list){
      cardsGrid.innerHTML = list.map((it,i)=>makeCard(it,i)).join("");
      resultsMeta.textContent = `Showing ${list.length} of ${scholars.length}`;

      // Clicking a status pill filters by that status
      cardsGrid.querySelectorAll(".status-btn").forEach(btn=>{
        btn.addEventListener("click", (e)=>{
          e.preventDefault();
          const s = btn.getAttribute("data-status");
          filterStatus.value = s;
          applyFilters();
        });
      });

      // Empty state toggle
      if(list.length === 0){
        emptyState.classList.add("show");
      } else {
        emptyState.classList.remove("show");
      }
    }

    function applyFilters(){
      const d = filterDept.value;
      const s = filterStatus.value;
      const q = searchText.value.trim().toLowerCase();

      const filtered = scholars.filter(it=>{
        const matchDept = d === "All" || it.dept === d;
        const matchStatus = s === "All" || it.status === s;
        const hay = (it.student + " " + it.title + " " + it.guide).toLowerCase();
        const matchSearch = q === "" || hay.includes(q);
        return matchDept && matchStatus && matchSearch;
      });

      render(filtered);
    }

    // Events
    filterDept.addEventListener("change", applyFilters);
    filterStatus.addEventListener("change", applyFilters);
    searchText.addEventListener("input", applyFilters);
    clearBtn.addEventListener("click", ()=>{
      filterDept.value = "All";
      filterStatus.value = "All";
      searchText.value = "";
      applyFilters();
    });

    // Init
    applyFilters();
  
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'98192d16261d84d1',t:'MTc1ODI4NTg4NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

/*committee events*/


/*capacity development*/

    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

    //Back Button
  // Get the button
  let topButton = document.getElementById("topBtn");

  // Show button after scrolling 100px
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

  // When clicked, scroll to top smoothly
  function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
/*career guidance*/
 (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

  //Back Button



  /*entreprenuership cell*/
  
    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

    //Back Button


    /*gender sensitization*/
     (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

       //Back Button


       /*action taken reports*/
       

    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

//Back Button

  
/*AQAR */

    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

    /*best practices*/
    
    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

  //Back Button
 
/*Instituional Distictiveness*/

    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();


    /*IQAC Committee*/
    function filterTable() {
  const roleFilter = document.getElementById('roleFilter').value;
  const searchFilter = document.getElementById('searchFilter').value.toLowerCase();
  const tableRows = document.querySelectorAll('.committee-table tbody tr');
  let visibleRows = 0;

  tableRows.forEach(row => {
    const nameCell = row.querySelector('.name-cell').textContent.toLowerCase();
    const roleBadge = row.querySelector('.role-badge');
    const roleClass = roleBadge.className;

    let roleMatch = true;
    let nameMatch = true;

    // Role filter
    if (roleFilter !== 'all') {
      roleMatch = roleClass.includes(roleFilter);
    }

    // Name search filter
    if (searchFilter !== '') {
      nameMatch = nameCell.includes(searchFilter);
    }

    // Show/hide row based on filters
    if (roleMatch && nameMatch) {
      row.style.display = '';
      visibleRows++;
    } else {
      row.style.display = 'none';
    }
  });

  // Show "no results" message if no rows are visible
  showNoResultsMessage(visibleRows === 0);
}

function clearFilters() {
  document.getElementById('roleFilter').value = 'all';
  document.getElementById('searchFilter').value = '';
  filterTable();
}

function showNoResultsMessage(show) {
  let noResultsRow = document.querySelector('.no-results-row');

  if (show && !noResultsRow) {
    const tbody = document.querySelector('.committee-table tbody');
    noResultsRow = document.createElement('tr');
    noResultsRow.className = 'no-results-row';
    noResultsRow.innerHTML = '<td colspan="4" class="no-results">No members found matching your criteria.</td>';
    tbody.appendChild(noResultsRow);
  } else if (!show && noResultsRow) {
    noResultsRow.remove();
  }
}
/*Minutes Of Meetings*/

    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();
    /*NAAC Certificates*/
     (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

    /*SSR*/
    
    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();
    /*strategic plan deployment*/
    
    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();
    /*student satisfaction reports*/
    
    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();
/*scholarships*/
(function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

    /*NIRF*/
    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

    /*placements*/
    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

    /*internships*/
    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();
/*feedback*/
(function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

    /*ALumini*/
    (function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

/*CDC*/
(function() {
      function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
          var d = b.createElement('script');
          d.innerHTML = "window.__CF$cv$params={r:'98021cdab4a98374',t:'MTc1ODA0NDA0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
          b.getElementsByTagName('head')[0].appendChild(d);
        }
      }
      if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
          var e = document.onreadystatechange || function() {};
          document.onreadystatechange = function(b) {
            e(b);
            'loading' !== document.readyState && (document.onreadystatechange = e, c());
          };
        }
      }
    })();

    

    // research scholar
    