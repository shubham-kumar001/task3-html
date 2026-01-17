// Hotel Booking Website JavaScript

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const bookNowBtn = document.getElementById('bookNowBtn');
const checkAvailabilityBtn = document.getElementById('checkAvailability');
const bookingModal = document.getElementById('bookingModal');
const closeModal = document.querySelector('.close-modal');
const bookingForm = document.getElementById('bookingForm');
const messageForm = document.getElementById('messageForm');
const toast = document.getElementById('toast');
const roomsGrid = document.querySelector('.rooms-grid');
const selectedRoomSelect = document.getElementById('selectedRoom');
const checkInInput = document.getElementById('check-in');
const checkOutInput = document.getElementById('check-out');
const modalCheckIn = document.getElementById('modalCheckIn');
const modalCheckOut = document.getElementById('modalCheckOut');

// Set minimum date for check-in to today
const today = new Date().toISOString().split('T')[0];
checkInInput.min = today;
checkOutInput.min = today;
modalCheckIn.min = today;
modalCheckOut.min = today;

// Set default check-out to 5 days from now
const defaultCheckOut = new Date();
defaultCheckOut.setDate(defaultCheckOut.getDate() + 5);
checkOutInput.value = defaultCheckOut.toISOString().split('T')[0];
modalCheckOut.value = defaultCheckOut.toISOString().split('T')[0];

// Rooms Data
const rooms = [
    {
        id: 1,
        name: "Standard Room",
        description: "Comfortable room with essential amenities",
        price: 159,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        size: "300 sq ft",
        guests: 2,
        beds: 1,
        features: ["Free WiFi", "TV", "Coffee Maker"]
    },
    {
        id: 2,
        name: "Deluxe Room",
        description: "Spacious room with premium amenities",
        price: 229,
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        size: "450 sq ft",
        guests: 3,
        beds: 2,
        features: ["Free WiFi", "TV", "Mini Bar", "Balcony"]
    },
    {
        id: 3,
        name: "Executive Suite",
        description: "Luxurious suite with separate living area",
        price: 349,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        size: "650 sq ft",
        guests: 4,
        beds: 2,
        features: ["Free WiFi", "TV", "Mini Bar", "Balcony", "Jacuzzi"]
    },
    {
        id: 4,
        name: "Presidential Suite",
        description: "Ultimate luxury with panoramic city views",
        price: 599,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        size: "1200 sq ft",
        guests: 4,
        beds: 2,
        features: ["Free WiFi", "TV", "Mini Bar", "Balcony", "Jacuzzi", "Butler Service"]
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Render rooms
    renderRooms();
    
    // Populate room select in modal
    populateRoomSelect();
    
    // Update booking summary
    updateBookingSummary();
});

// Toggle mobile navigation
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile navigation when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Open booking modal
bookNowBtn.addEventListener('click', openBookingModal);
checkAvailabilityBtn.addEventListener('click', openBookingModal);

// Close booking modal
closeModal.addEventListener('click', function() {
    bookingModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if(e.target === bookingModal) {
        bookingModal.style.display = 'none';
    }
});

// Open booking modal with selected room
function openBookingModal() {
    // Transfer search values to modal
    modalCheckIn.value = checkInInput.value;
    modalCheckOut.value = checkOutInput.value;
    
    // Update booking summary
    updateBookingSummary();
    
    // Show modal
    bookingModal.style.display = 'block';
}

// Populate room select in modal
function populateRoomSelect() {
    selectedRoomSelect.innerHTML = '';
    
    rooms.forEach(room => {
        const option = document.createElement('option');
        option.value = room.id;
        option.textContent = `${room.name} - $${room.price}/night`;
        selectedRoomSelect.appendChild(option);
    });
}

// Calculate nights between dates
function calculateNights(checkIn, checkOut) {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(checkIn);
    const secondDate = new Date(checkOut);
    const nights = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return nights > 0 ? nights : 1;
}

// Update booking summary
function updateBookingSummary() {
    const selectedRoomId = parseInt(selectedRoomSelect.value);
    const selectedRoom = rooms.find(room => room.id === selectedRoomId) || rooms[0];
    const nights = calculateNights(modalCheckIn.value, modalCheckOut.value);
    const total = selectedRoom.price * nights;
    
    document.getElementById('summaryRoom').textContent = selectedRoom.name;
    document.getElementById('summaryNights').textContent = nights;
    document.getElementById('summaryTotal').textContent = total;
}

// Event listeners for updating booking summary
selectedRoomSelect.addEventListener('change', updateBookingSummary);
modalCheckIn.addEventListener('change', updateBookingSummary);
modalCheckOut.addEventListener('change', updateBookingSummary);

// Render rooms to the page
function renderRooms() {
    roomsGrid.innerHTML = '';
    
    rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'room-card';
        
        roomCard.innerHTML = `
            <div class="room-image">
                <img src="${room.image}" alt="${room.name}">
            </div>
            <div class="room-info">
                <h3>${room.name}</h3>
                <div class="room-price">$${room.price} <span>per night</span></div>
                <p>${room.description}</p>
                <div class="room-features">
                    <span><i class="fas fa-expand-arrows-alt"></i> ${room.size}</span>
                    <span><i class="fas fa-user-friends"></i> ${room.guests} Guests</span>
                    <span><i class="fas fa-bed"></i> ${room.beds} Bed${room.beds > 1 ? 's' : ''}</span>
                </div>
                <button class="btn-room" data-room-id="${room.id}">Book Now</button>
            </div>
        `;
        
        roomsGrid.appendChild(roomCard);
    });
    
    // Add event listeners to room booking buttons
    document.querySelectorAll('.btn-room').forEach(button => {
        button.addEventListener('click', function() {
            const roomId = parseInt(this.getAttribute('data-room-id'));
            selectedRoomSelect.value = roomId;
            openBookingModal();
        });
    });
}

// Handle booking form submission
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const selectedRoomId = parseInt(selectedRoomSelect.value);
    const checkIn = modalCheckIn.value;
    const checkOut = modalCheckOut.value;
    const specialRequests = document.getElementById('specialRequests').value;
    
    const selectedRoom = rooms.find(room => room.id === selectedRoomId);
    const nights = calculateNights(checkIn, checkOut);
    const total = selectedRoom.price * nights;
    
    // In a real application, you would send this data to a server
    console.log({
        fullName,
        email,
        phone,
        room: selectedRoom.name,
        checkIn,
        checkOut,
        nights,
        total,
        specialRequests
    });
    
    // Show success message
    showToast('Booking confirmed! A confirmation email has been sent.');
    
    // Close modal
    bookingModal.style.display = 'none';
    
    // Reset form
    bookingForm.reset();
    populateRoomSelect();
    updateBookingSummary();
});

// Handle contact form submission
messageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real application, you would send this data to a server
    console.log('Contact form submitted');
    
    // Show success message
    showToast('Message sent successfully! We will respond within 24 hours.');
    
    // Reset form
    messageForm.reset();
});

// Show toast notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Update active navigation link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize with today's date in check-in
checkInInput.value = today;
modalCheckIn.value = today;
