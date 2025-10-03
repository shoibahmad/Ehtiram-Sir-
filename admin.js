// Admin Panel JavaScript
let currentSection = 'publications';
let editingId = null;

// Preloaded data
const preloadedPublications = [
    {
        year: "2024",
        type: "Journal",
        title: "Real Time Anomaly Detection in Big Data",
        subtitle: "Using scalable Machine Learning Techniques",
        journal: "Advances in Nonlinear Variational Inequalities, Vol 27 No 4 (2024). ISSN: 1902-910X"
    }
];

const preloadedPatents = [
    {
        patentNo: "202110143",
        title: "Computer - implemented method for encryption over a blockchain data sharing in secure network",
        date: "11 January 2021",
        status: "Granted"
    }
];

const preloadedEvents = [
    {
        id: 1,
        title: "International Conference on AI & Machine Learning",
        date: "2025-03-15",
        location: "New Delhi, India",
        type: "Conference",
        description: "Keynote speaker on 'Future of AI in Healthcare Systems' - discussing latest research in medical AI applications."
    },
    {
        id: 2,
        title: "IEEE Workshop on IoT Security",
        date: "2025-04-22",
        location: "Mumbai, India",
        type: "Workshop",
        description: "Leading a comprehensive workshop on 'Cybersecurity Frameworks for IoT Networks'."
    }
];

let adminData = {
    publications: preloadedPublications,
    patents: preloadedPatents,
    events: JSON.parse(localStorage.getItem('allEvents')) || preloadedEvents
};

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function () {
    initializeAdmin();
    loadData();
    setupFormHandlers();
});

function initializeAdmin() {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function (e) {
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

function renderEvents() {
    const grid = document.getElementById('events-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (adminData.events.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-calendar-plus"></i>
                <h3>No Events Yet</h3>
                <p>Create your first event to get started.</p>
                <button class="btn btn-primary" onclick="openAddModal('event')">
                    <i class="fas fa-plus"></i> Add First Event
                </button>
            </div>
        `;
        return;
    }

    adminData.events.forEach((event, index) => {
        const eventDate = new Date(event.date);
        const today = new Date();
        const isPast = eventDate < today;

        const card = document.createElement('div');
        card.className = 'content-card';
        card.innerHTML = `
            <div class="card-header">
                <div>
                    <div class="card-title">${event.title}</div>
                    <div class="card-meta">${event.date} • ${event.type}</div>
                </div>
                <div class="event-status ${isPast ? 'past' : 'upcoming'}">
                    ${isPast ? 'Past' : 'Upcoming'}
                </div>
            </div>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
            <div class="card-actions">
                <button class="btn btn-secondary btn-small" onclick="editEvent(${event.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-danger btn-small" onclick="deleteEvent(${event.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
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
        `;
        grid.appendChild(card);
    });
}

// Modal functions
function openAddModal(type) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const formFields = document.getElementById('form-fields');

    editingId = null;

    if (type === 'event') {
        modalTitle.textContent = 'Add New Event';
        formFields.innerHTML = `
            <div class="form-group">
                <label for="event-title">Event Title *</label>
                <input type="text" id="event-title" name="title" required>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="event-date">Event Date *</label>
                    <input type="date" id="event-date" name="date" required>
                </div>
                <div class="form-group">
                    <label for="event-type">Event Type *</label>
                    <select id="event-type" name="type" required>
                        <option value="">Select Type</option>
                        <option value="Conference">Conference</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Seminar">Seminar</option>
                        <option value="Webinar">Webinar</option>
                        <option value="Symposium">Symposium</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="event-location">Location *</label>
                <input type="text" id="event-location" name="location" required>
            </div>
            <div class="form-group">
                <label for="event-description">Description *</label>
                <textarea id="event-description" name="description" required rows="4"></textarea>
            </div>
        `;
    }

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';

    const form = document.getElementById('item-form');
    if (form) {
        form.reset();
    }
    editingId = null;
}

function editEvent(eventId) {
    const event = adminData.events.find(e => e.id === eventId);
    if (!event) return;

    editingId = eventId;
    openAddModal('event');

    // Populate form
    document.getElementById('event-title').value = event.title;
    document.getElementById('event-date').value = event.date;
    document.getElementById('event-type').value = event.type;
    document.getElementById('event-location').value = event.location;
    document.getElementById('event-description').value = event.description;

    document.getElementById('modal-title').textContent = 'Edit Event';
}

function deleteEvent(eventId) {
    if (confirm('Are you sure you want to delete this event?')) {
        adminData.events = adminData.events.filter(e => e.id !== eventId);
        saveEvents();
        renderEvents();
        showNotification('Event deleted successfully!', 'success');
    }
}

function setupFormHandlers() {
    const form = document.getElementById('item-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            if (currentSection === 'events') {
                handleEventSubmission();
            }
        });
    }
}

function handleEventSubmission() {
    const formData = new FormData(document.getElementById('item-form'));
    const eventData = {
        title: formData.get('title'),
        date: formData.get('date'),
        type: formData.get('type'),
        location: formData.get('location'),
        description: formData.get('description')
    };

    // Validate
    if (!eventData.title || !eventData.date || !eventData.type || !eventData.location || !eventData.description) {
        showNotification('Please fill all required fields', 'error');
        return;
    }

    if (editingId) {
        // Update existing event
        const eventIndex = adminData.events.findIndex(e => e.id === editingId);
        if (eventIndex !== -1) {
            adminData.events[eventIndex] = { ...adminData.events[eventIndex], ...eventData };
            showNotification('Event updated successfully!', 'success');
        }
    } else {
        // Create new event
        const newEvent = {
            id: Date.now(),
            ...eventData
        };
        adminData.events.push(newEvent);
        showNotification('Event created successfully!', 'success');
    }

    saveEvents();
    renderEvents();
    closeModal();
}

function saveEvents() {
    localStorage.setItem('allEvents', JSON.stringify(adminData.events));
    localStorage.setItem('siteEvents', JSON.stringify(adminData.events));

    // Trigger storage event for real-time updates
    window.dispatchEvent(new StorageEvent('storage', {
        key: 'siteEvents',
        newValue: JSON.stringify(adminData.events),
        storageArea: localStorage
    }));
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelectorAll('.notification');
    existing.forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

// Authentication system
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// Check authentication on page load
document.addEventListener('DOMContentLoaded', function () {
    checkAuthentication();
    setupLoginForm();
});

function checkAuthentication() {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
    
    if (isLoggedIn) {
        showAdminPanel();
        initializeAdmin();
        loadData();
        setupFormHandlers();
    } else {
        showLoginForm();
    }
}

function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('login-error');
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        // Successful login
        sessionStorage.setItem('adminLoggedIn', 'true');
        errorDiv.style.display = 'none';
        showAdminPanel();
        initializeAdmin();
        loadData();
        setupFormHandlers();
        showNotification('Login successful! Welcome to admin panel.', 'success');
    } else {
        // Failed login
        errorDiv.style.display = 'block';
        document.getElementById('password').value = '';
        
        // Add shake animation to login card
        const loginCard = document.querySelector('.login-card');
        loginCard.classList.add('shake');
        setTimeout(() => {
            loginCard.classList.remove('shake');
        }, 500);
    }
}

function showLoginForm() {
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('admin-container').style.display = 'none';
}

function showAdminPanel() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('admin-container').style.display = 'block';
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('password-toggle-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.removeItem('adminLoggedIn');
        showLoginForm();
        
        // Clear form
        document.getElementById('login-form').reset();
        document.getElementById('login-error').style.display = 'none';
        
        showNotification('Logged out successfully!', 'success');
    }
}