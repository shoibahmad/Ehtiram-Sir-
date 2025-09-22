// Admin Panel JavaScript
let currentSection = 'publications';
let editingId = null;

// Preloaded data from main site
const preloadedPublications = [
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

const preloadedPatents = [
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

const preloadedEvents = [
    {
        title: "International Conference on Machine Learning",
        description: "Keynote speaker on AI applications in healthcare systems",
        date: "15 March 2024",
        location: "New Delhi, India",
        type: "Conference"
    },
    {
        title: "Workshop on Big Data Analytics",
        description: "Conducting hands-on workshop on data processing techniques",
        date: "22 February 2024",
        location: "Jamia Hamdard",
        type: "Workshop"
    },
    {
        title: "IEEE Symposium on IoT Security",
        description: "Presenting research on secure IoT frameworks",
        date: "10 January 2024",
        location: "Mumbai, India",
        type: "Symposium"
    }
];

let adminData = {
    publications: preloadedPublications,
    patents: preloadedPatents,
    events: preloadedEvents
};

document.addEventListener('DOMContentLoaded', function() {
    loadData();
    initializeAdmin();
});

function initializeAdmin() {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            switchSection(section);
        });
    });
}

function switchSection(section) {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-section="${section}"]`).classList.add('active');

    document.querySelectorAll('.admin-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(`${section}-section`).classList.add('active');

    currentSection = section;
}

function loadData() {
    renderPublications();
    renderPatents();
    renderEvents();
}

function renderPublications() {
    const grid = document.getElementById('publications-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    adminData.publications.forEach((pub, index) => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.innerHTML = `
            <div class="card-header">
                <div>
                    <div class="card-title">${pub.title}</div>
                    <div class="card-meta">${pub.year} • ${pub.type}</div>
                </div>
            </div>
            <p>${pub.subtitle}</p>
            <div class="card-actions">
                <button class="btn btn-secondary btn-small" onclick="editItem('publications', ${index})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-danger btn-small" onclick="deleteItem('publications', ${index})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderPatents() {
    const grid = document.getElementById('patents-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    adminData.patents.forEach((patent, index) => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.innerHTML = `
            <div class="card-header">
                <div>
                    <div class="card-title">${patent.title}</div>
                    <div class="card-meta">Patent No: ${patent.patentNo}</div>
                </div>
            </div>
            <p><strong>Date:</strong> ${patent.date}</p>
            <p><strong>Status:</strong> ${patent.status}</p>
            <div class="card-actions">
                <button class="btn btn-secondary btn-small" onclick="editItem('patents', ${index})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-danger btn-small" onclick="deleteItem('patents', ${index})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderEvents() {
    const grid = document.getElementById('events-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    adminData.events.forEach((event, index) => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.innerHTML = `
            <div class="card-header">
                <div>
                    <div class="card-title">${event.title}</div>
                    <div class="card-meta">${event.date} • ${event.location}</div>
                </div>
            </div>
            <p>${event.description}</p>
            <div class="card-actions">
                <button class="btn btn-secondary btn-small" onclick="editItem('events', ${index})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-danger btn-small" onclick="deleteItem('events', ${index})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openAddModal(type) {
    editingId = null;
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const formFields = document.getElementById('form-fields');

    title.textContent = `Add ${type.charAt(0).toUpperCase() + type.slice(0, -1)}`;
    
    let fieldsHTML = '';
    
    if (type === 'publication') {
        fieldsHTML = `
            <div class="form-group">
                <label>Title</label>
                <input type="text" name="title" required>
            </div>
            <div class="form-group">
                <label>Subtitle</label>
                <input type="text" name="subtitle" required>
            </div>
            <div class="form-group">
                <label>Year</label>
                <input type="number" name="year" min="2000" max="2030" required>
            </div>
            <div class="form-group">
                <label>Type</label>
                <select name="type" required>
                    <option value="Journal">Journal</option>
                    <option value="Conference">Conference</option>
                    <option value="Book">Book</option>
                </select>
            </div>
            <div class="form-group">
                <label>Journal/Venue</label>
                <textarea name="journal" required></textarea>
            </div>
        `;
    } else if (type === 'patent') {
        fieldsHTML = `
            <div class="form-group">
                <label>Title</label>
                <input type="text" name="title" required>
            </div>
            <div class="form-group">
                <label>Patent Number</label>
                <input type="text" name="patentNo" required>
            </div>
            <div class="form-group">
                <label>Date</label>
                <input type="date" name="date" required>
            </div>
            <div class="form-group">
                <label>Status</label>
                <select name="status" required>
                    <option value="Granted">Granted</option>
                    <option value="Pending">Pending</option>
                    <option value="Filed">Filed</option>
                </select>
            </div>
        `;
    } else if (type === 'event') {
        fieldsHTML = `
            <div class="form-group">
                <label>Event Title</label>
                <input type="text" name="title" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea name="description" required></textarea>
            </div>
            <div class="form-group">
                <label>Date</label>
                <input type="date" name="date" required>
            </div>
            <div class="form-group">
                <label>Location</label>
                <input type="text" name="location" required>
            </div>
            <div class="form-group">
                <label>Type</label>
                <select name="type" required>
                    <option value="Conference">Conference</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Seminar">Seminar</option>
                    <option value="Webinar">Webinar</option>
                </select>
            </div>
        `;
    }

    formFields.innerHTML = fieldsHTML;
    modal.classList.add('active');

    document.getElementById('item-form').onsubmit = function(e) {
        e.preventDefault();
        saveItem(type);
    };
}

function editItem(type, index) {
    editingId = index;
    const item = adminData[type][index];
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    
    title.textContent = `Edit ${type.charAt(0).toUpperCase() + type.slice(0, -1)}`;
    
    openAddModal(type.slice(0, -1));
    
    setTimeout(() => {
        const form = document.getElementById('item-form');
        Object.keys(item).forEach(key => {
            const field = form.querySelector(`[name="${key}"]`);
            if (field) {
                if (key === 'date' && item[key]) {
                    const date = new Date(item[key]);
                    field.value = date.toISOString().split('T')[0];
                } else {
                    field.value = item[key];
                }
            }
        });
    }, 100);
}

function saveItem(type) {
    const form = document.getElementById('item-form');
    const formData = new FormData(form);
    const item = {};

    for (let [key, value] of formData.entries()) {
        if (key === 'date' && value) {
            const date = new Date(value);
            item[key] = date.toLocaleDateString('en-GB');
        } else {
            item[key] = value;
        }
    }

    const dataKey = type + 's';
    
    if (editingId !== null) {
        adminData[dataKey][editingId] = item;
    } else {
        adminData[dataKey].push(item);
    }

    localStorage.setItem(dataKey, JSON.stringify(adminData[dataKey]));
    updateMainSiteData();
    closeModal();
    loadData();
}

function deleteItem(type, index) {
    if (confirm('Are you sure you want to delete this item?')) {
        adminData[type].splice(index, 1);
        localStorage.setItem(type, JSON.stringify(adminData[type]));
        updateMainSiteData();
        loadData();
    }
}

function updateMainSiteData() {
    localStorage.setItem('sitePublications', JSON.stringify(adminData.publications));
    localStorage.setItem('sitePatents', JSON.stringify(adminData.patents));
    localStorage.setItem('siteEvents', JSON.stringify(adminData.events));
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    editingId = null;
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.html';
    }
}