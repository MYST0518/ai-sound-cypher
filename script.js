// Smooth Scroll Navigation
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

// Form Submission Handler
const form = document.getElementById('submission-form');
const formMessage = document.getElementById('form-message');

if (form) {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!data['artist-name'] || !data['track-title'] || !data['ai-tool'] || !data['track-url'] || !data['email']) {
            showMessage('すべての必須項目を入力してください', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showMessage('有効なメールアドレスを入力してください', 'error');
            return;
        }

        // URL validation
        try {
            new URL(data['track-url']);
        } catch {
            showMessage('有効なURLを入力してください', 'error');
            return;
        }

        // Here you would typically send the data to your backend
        // For now, we'll just show a success message
        console.log('Form data:', data);

        // Simulate submission
        showMessage('応募を受け付けました！ありがとうございます。', 'success');
        form.reset();

        // Note: To actually submit the form, you would need to:
        // 1. Set up a backend endpoint (e.g., Google Forms, EmailJS, or custom API)
        // 2. Send the data using fetch() or similar
        // Example:
        /*
        try {
            const response = await fetch('YOUR_SUBMISSION_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                showMessage('応募を受け付けました！ありがとうございます。', 'success');
                form.reset();
            } else {
                showMessage('送信に失敗しました。もう一度お試しください。', 'error');
            }
        } catch (error) {
            showMessage('送信エラーが発生しました。', 'error');
        }
        */
    });
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Auto-hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about-card, .video-card, .theme-announcement, .form-wrapper, .listen-card, .personality-card');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animate section titles on scroll
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach((title, index) => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(30px) scale(0.95)';
        title.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        observer.observe(title);
    });
});

// Add parallax effect to background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bgAnimation = document.querySelector('.bg-animation');
    if (bgAnimation) {
        bgAnimation.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic theme update (you can call this function to update the monthly theme)
function updateTheme(themeName, description, deadline) {
    const themeTitle = document.querySelector('.current-theme');
    const themeDesc = document.querySelector('.theme-description');
    const themeDeadline = document.querySelector('.deadline');

    if (themeTitle) themeTitle.textContent = `「${themeName}」`;
    if (themeDesc) themeDesc.textContent = description;
    if (themeDeadline) themeDeadline.textContent = `締切: ${deadline}`;
}

// Example usage:
// updateTheme('宇宙の旅', 'AIが描く壮大な宇宙空間...', '2026年2月28日 23:59');
