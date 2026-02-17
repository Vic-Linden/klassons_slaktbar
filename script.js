// Calendar functionality
const months = [
    'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
    'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
];

let currentMonth = 5; // Juni (0-indexed)
let currentYear = 2022;

function updateCalendar() {
    const monthDisplay = document.getElementById('currentMonth');
    if (monthDisplay) {
        monthDisplay.textContent = `${months[currentMonth]} ${currentYear}`;
    }
    
    // Here you could add logic to dynamically generate calendar days
    // based on the current month and year
}

// Calendar navigation
document.getElementById('prevMonth')?.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar();
});

document.getElementById('nextMonth')?.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
});

// Smooth scroll for navigation arrows
document.getElementById('slideLeft')?.addEventListener('click', () => {
    window.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth'
    });
});

document.getElementById('slideRight')?.addEventListener('click', () => {
    window.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth'
    });
});

// Card hover effects and interactions
document.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('click', () => {
        // Add navigation logic here
        console.log('Card clicked:', card.querySelector('.card-title')?.textContent);
    });
});

// Match items click handling
document.querySelectorAll('.match-item').forEach(item => {
    item.addEventListener('click', () => {
        console.log('Match item clicked');
        // Add navigation to match details
    });
});

// Calendar day click handling
document.querySelectorAll('.day').forEach(day => {
    if (day.textContent) {
        day.addEventListener('click', () => {
            // Remove previous selection
            document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
            // Add selection to clicked day
            day.classList.add('selected');
            console.log('Day selected:', day.textContent);
        });
    }
});

// Initialize calendar on page load
updateCalendar();

// Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
});
