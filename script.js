// ===== ACADEMIC PORTFOLIO INTERACTIVE FEATURES =====

document.addEventListener('DOMContentLoaded', function () {

    // ===== NAVIGATION =====
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    // Active navigation link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // ===== SMOOTH SCROLLING =====
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== PUBLICATIONS DATA =====
    const publicationsData = [
        {
            year: "2024",
            type: "Journal",
            title: "Real Time Anomaly Detection in Big Data",
            subtitle: "Using scalable Machine Learning Techniques",
            journal: "Advances in Nonlinear Variational Inequalities, Vol 27 No 4 (2024). ISSN: 1902-910X"
        },
        {
            year: "2024",
            type: "Journal",
            title: "Content-aware Recommendation System",
            subtitle: "For integrated temporal semantic review text over web of things",
            journal: "Service Oriented Computing and Applications 2024"
        },
        {
            year: "2024",
            type: "Journal",
            title: "Bio-Inspired EEG Signal Computing",
            subtitle: "Using machine learning and Fuzzy Theory for Decision making in future-oriented Brain-Controlled Vehicles",
            journal: "SLAS Technology"
        },
        {
            year: "2024",
            type: "Journal",
            title: "Efficient key revocation in IoT",
            subtitle: "With lattice-based cryptography",
            journal: "Journal of Discrete Mathematical Sciences and Cryptography 2024"
        },
        {
            year: "2024",
            type: "Journal",
            title: "Knowledge-based Deep Learning System",
            subtitle: "For classifying Alzheimer's disease for multi-task learning",
            journal: "CAAI Transactions on Intelligence Technology 2024"
        },
        {
            year: "2024",
            type: "Journal",
            title: "The Diabacare Cloud",
            subtitle: "Predicting diabetes using machine learning",
            journal: "Acta Scientiarum – Technology 2024"
        },
        {
            year: "2023",
            type: "Journal",
            title: "Security and Energy Efficient Cyber-Physical Systems",
            subtitle: "Using predictive modeling approaches in Wireless Sensor Networks",
            journal: "Wireless Networks (Springer IF3.0), 2023"
        },
        {
            year: "2023",
            type: "Journal",
            title: "Hybrid Block-Based Lightweight Machine Learning",
            subtitle: "Predictive Models for Quality Preserving in the Internet of Things",
            journal: "Based Medical Images with Diagnostic Applications (SCI Indexed Impact Factor 4.4)"
        },
        {
            year: "2023",
            type: "Journal",
            title: "Computational Intelligence and Neuroscience",
            subtitle: "Hindawi, April 12, 2022, Volume 2022",
            journal: "Article ID 8173372"
        },
        {
            year: "2022",
            type: "Journal",
            title: "Optimal Design of Intelligent Control System",
            subtitle: "In the Communication Room Based on Artificial Intelligence",
            journal: "(SCI Indexed), Hindawi Wireless Communications and Mobile Computing, Volume 2022"
        },
        {
            year: "2022",
            type: "Journal",
            title: "Hybrid Multi-Criteria Long Data",
            subtitle: "Fusion-Based Medical Decision Learning Patterns",
            journal: "(Scopus Indexed), Manish Gupta, Ihtiram Raza Khan, B Gomathy and Ansuman Samal ECS Transactions"
        },
        {
            year: "2022",
            type: "Journal",
            title: "Data Mining in Employee Healthcare Detection",
            subtitle: "Using Intelligence Techniques for Industry Development",
            journal: "(SCI Indexed Impact Factor 2.682), Hindawi Journal of Healthcare Engineering"
        },
        {
            year: "2021",
            type: "Journal",
            title: "Detection of Emotion of Speech for RAYDESS Audio",
            subtitle: "Using Hybrid Convolution Neural Network in 5G Indexed Impact Factor 2.682)",
            journal: "Hindawi Journal- Intelligence Systems in E-Health and Medical Communication Services"
        },
        {
            year: "2021",
            type: "Journal",
            title: "Multidimensional CNN Model for Biomedical Entity Reorganization",
            subtitle: "(SCI Indexed Impact Factor 3.41) Hindawi BioMed Research International",
            journal: "Volume 2022"
        },
        {
            year: "2021",
            type: "Conference",
            title: "Deep Learning Based Patient-Friendly Clinical Expert",
            subtitle: "Recommendation Framework (IEEE Scopus)",
            journal: "Akhilesh Kumar, Sarfraz Fayaz Khan, Rajinder Singh Sodhi, Ihtiram Raza Khan"
        }
    ];

    // ===== PATENTS DATA =====
    const patentsData = [
        {
            patentNo: "202110143",
            title: "Computer - implemented method for encryption over a blockchain data sharing in secure network",
            date: "11 January 2021",
            status: "Granted"
        },
        {
            patentNo: "202131008193",
            title: "Machine Learning based Process for Medical Data Pattern Identification And Application With Visualisation In User Interfaces",
            date: "26 February 2021",
            status: "Granted"
        },
        {
            patentNo: "202110195",
            title: "Privacy-preserving Authentication and Key-Management Protocol for Health Information System",
            date: "21 April 2021",
            status: "Granted"
        },
        {
            patentNo: "202111011159",
            title: "Image processing system and method for object detection using machine learning",
            date: "16 March 2021",
            status: "Granted"
        },
        {
            patentNo: "202131012555",
            title: "Communication method of blockchain data sharing using secure encryption and decryption",
            date: "23 March 2021",
            status: "Granted"
        },
        {
            patentNo: "202111016924",
            title: "Internet of things sensor based smart and intelligent wheelchair system",
            date: "11 April 2021",
            status: "Granted"
        },
        {
            patentNo: "202131017275",
            title: "IoT based system for monitoring and notification for uses of liquefied petroleum gas",
            date: "13 April 2021",
            status: "Granted"
        },
        {
            patentNo: "202111017877",
            title: "Artificial intelligence-based system for design surface of computerized building design model",
            date: "17 April 2021",
            status: "Granted"
        },
        {
            patentNo: "202131018259",
            title: "Deep learning-based system for detection of covid-19 disease of Patient from chest risk",
            date: "20 April 2021",
            status: "Granted"
        },
        {
            patentNo: "202110194",
            title: "A Smart City System for Citizen's Utilizing Ubiquitous Computing Technique",
            date: "21 April 2021",
            status: "Granted"
        },
        {
            patentNo: "202110577",
            title: "An IoT Based System for Emergency Healthcare",
            date: "05 May 2021",
            status: "Granted"
        },
        {
            patentNo: "202141050174",
            title: "A Cloud computing enabled 5G wireless sensor",
            date: "19 Nov 2021",
            status: "Granted"
        }
    ];

    // ===== POPULATE PUBLICATIONS =====
    function populatePublications() {
        const publicationsGrid = document.getElementById('publications-grid');
        if (!publicationsGrid) return;

        // Show only first 6 publications initially
        const initialCount = 6;
        let currentCount = initialCount;
        let currentFilter = 'all';

        function getFilteredPublications() {
            if (currentFilter === 'all') {
                return publicationsData;
            }
            return publicationsData.filter(pub => pub.year === currentFilter);
        }

        function renderPublications(count = currentCount) {
            publicationsGrid.innerHTML = '';
            const filteredData = getFilteredPublications();
            const publicationsToShow = filteredData.slice(0, count);

            publicationsToShow.forEach(pub => {
                const publicationCard = document.createElement('div');
                publicationCard.className = 'publication-card';
                publicationCard.setAttribute('data-category', pub.year);

                publicationCard.innerHTML = `
                    <div class="publication-header">
                        <span class="publication-year">${pub.year}</span>
                        <span class="publication-type">${pub.type}</span>
                    </div>
                    <h3>${pub.title}</h3>
                    <p class="publication-subtitle">${pub.subtitle}</p>
                    <p class="publication-journal">${pub.journal}</p>
                    <div class="publication-actions">
                        <button class="btn-small"><i class="fas fa-eye"></i> View</button>
                        <button class="btn-small"><i class="fas fa-download"></i> Download</button>
                    </div>
                `;

                publicationsGrid.appendChild(publicationCard);
            });

            // Update load more button visibility
            updateLoadMoreButton();
        }

        function updateLoadMoreButton() {
            const loadMoreBtn = document.getElementById('load-more-publications');
            if (!loadMoreBtn) return;

            const filteredData = getFilteredPublications();
            
            if (currentFilter === 'all') {
                loadMoreBtn.style.display = 'inline-flex';
                if (currentCount >= filteredData.length) {
                    loadMoreBtn.innerHTML = '<i class="fas fa-check"></i> All Publications Loaded';
                    loadMoreBtn.disabled = true;
                } else {
                    loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Show More Publications';
                    loadMoreBtn.disabled = false;
                }
            } else {
                if (filteredData.length > initialCount) {
                    loadMoreBtn.style.display = 'inline-flex';
                    if (currentCount >= filteredData.length) {
                        loadMoreBtn.innerHTML = '<i class="fas fa-check"></i> All Publications Loaded';
                        loadMoreBtn.disabled = true;
                    } else {
                        loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Show More Publications';
                        loadMoreBtn.disabled = false;
                    }
                } else {
                    loadMoreBtn.style.display = 'none';
                }
            }
        }

        // Initial render
        renderPublications();

        // Load more functionality
        const loadMoreBtn = document.getElementById('load-more-publications');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function () {
                const filteredData = getFilteredPublications();
                
                if (currentCount >= filteredData.length) {
                    this.innerHTML = '<i class="fas fa-check"></i> All Publications Loaded';
                    this.disabled = true;
                    return;
                }

                currentCount = Math.min(currentCount + 6, filteredData.length);
                renderPublications(currentCount);
            });
        }

        // Filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                const filter = this.getAttribute('data-filter');
                currentFilter = filter;
                currentCount = initialCount; // Reset count when filtering

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Re-render publications with new filter
                renderPublications();
            });
        });
    }

    // ===== POPULATE PATENTS =====
    function populatePatents() {
        const patentsGrid = document.getElementById('patents-grid');
        if (!patentsGrid) return;

        // Show only first 6 patents initially
        const initialCount = 6;
        let currentCount = initialCount;

        function renderPatents(count = currentCount) {
            patentsGrid.innerHTML = '';
            const patentsToShow = patentsData.slice(0, count);

            patentsToShow.forEach(patent => {
                const patentCard = document.createElement('div');
                patentCard.className = 'patent-card';

                // Determine icon based on patent type
                let icon = 'fas fa-lock';
                if (patent.title.toLowerCase().includes('medical') || patent.title.toLowerCase().includes('health')) {
                    icon = 'fas fa-heartbeat';
                } else if (patent.title.toLowerCase().includes('iot') || patent.title.toLowerCase().includes('sensor')) {
                    icon = 'fas fa-microchip';
                } else if (patent.title.toLowerCase().includes('blockchain') || patent.title.toLowerCase().includes('security')) {
                    icon = 'fas fa-shield-alt';
                } else if (patent.title.toLowerCase().includes('ai') || patent.title.toLowerCase().includes('machine learning')) {
                    icon = 'fas fa-brain';
                }

                patentCard.innerHTML = `
                    <div class="patent-icon">
                        <i class="${icon}"></i>
                    </div>
                    <h3>${patent.title}</h3>
                    <p>Patent No: ${patent.patentNo}</p>
                    <div class="patent-meta">
                        <span class="patent-date">${patent.date}</span>
                        <span class="patent-status">${patent.status}</span>
                    </div>
                `;

                patentsGrid.appendChild(patentCard);
            });
        }

        // Initial render
        renderPatents();

        // Load more functionality
        const loadMoreBtn = document.getElementById('load-more-patents');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function () {
                if (currentCount >= patentsData.length) {
                    this.innerHTML = '<i class="fas fa-check"></i> All Patents Loaded';
                    this.disabled = true;
                    return;
                }

                currentCount = Math.min(currentCount + 6, patentsData.length);
                renderPatents(currentCount);

                if (currentCount >= patentsData.length) {
                    this.innerHTML = '<i class="fas fa-check"></i> All Patents Loaded';
                    this.disabled = true;
                }
            });
        }
    }

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Reset form labels
                const labels = contactForm.querySelectorAll('label');
                labels.forEach(label => {
                    label.style.transform = 'translateY(0) scale(1)';
                    label.style.color = 'var(--text-muted)';
                });
            }, 2000);
        });
    }

    // ===== FORM LABEL ANIMATIONS =====
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function () {
            const label = this.nextElementSibling;
            if (label) {
                label.style.transform = 'translateY(-1.5rem) scale(0.8)';
                label.style.color = 'var(--primary-color)';
            }
        });

        input.addEventListener('blur', function () {
            if (!this.value) {
                const label = this.nextElementSibling;
                if (label) {
                    label.style.transform = 'translateY(0) scale(1)';
                    label.style.color = 'var(--text-muted)';
                }
            }
        });
    });

    // ===== SCROLL ANIMATIONS =====
    function animateOnScroll() {
        const elements = document.querySelectorAll('.expertise-item, .timeline-item, .research-card, .publication-card, .patent-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }

    // ===== COUNTER ANIMATION FOR STATS =====
    function animateCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.textContent);
                    let current = 0;
                    const increment = target / 50;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            entry.target.textContent = target + '+';
                            clearInterval(timer);
                        } else {
                            entry.target.textContent = Math.floor(current) + '+';
                        }
                    }, 50);

                    observer.unobserve(entry.target);
                }
            });
        });

        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }

    // ===== INITIALIZE EVERYTHING =====
    populatePublications();
    populatePatents();
    animateOnScroll();
    animateCounters();

    console.log('🎓 Academic Portfolio Loaded Successfully!');
    console.log('📚 Publications and Patents populated with dropdown functionality');
    console.log('🎨 Light theme with responsive design active');
    console.log('🔍 Filter options working for publications');
});

// ===== UTILITY FUNCTIONS =====
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events for better performance
window.addEventListener('scroll', throttle(function () {
    // Scroll-based animations can be added here
}, 16)); // ~60fps