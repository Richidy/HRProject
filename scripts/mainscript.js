document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.animated-image');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image.classList.add('in-view');
                observer.unobserve(image);
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(image);
});
