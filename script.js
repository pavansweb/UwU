document.getElementById('top-nav-homeButton').addEventListener('click', () => {
    document.getElementById('profile-container').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('top-nav-projectsButton').addEventListener('click', () => {
    document.getElementById('projects-container').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('top-nav-contactButton').addEventListener('click', () => {
    document.getElementById('contact-container').scrollIntoView({behavior: 'smooth'});
});

const containers = document.querySelectorAll('.content-container');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

function scrollToNearestContainer() {
    let nearestContainer = null;
    let nearestDistance = Infinity;

    containers.forEach(container => {
        const rect = container.getBoundingClientRect();
        const distance = Math.abs(rect.top - header.offsetHeight); // Adjust for fixed header

        if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestContainer = container;
        }
    });

    if (nearestContainer) {
        const isFirstContainer = nearestContainer === containers[0];
        const isLastContainer = nearestContainer === containers[containers.length - 1];

        let offset = isFirstContainer ? header.offsetHeight : header.offsetHeight; // Adjust for fixed header

        if (isLastContainer) {
            const footerHeight = footer.offsetHeight;
            offset -= footerHeight;
        }

        window.scrollTo({
            top: nearestContainer.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

// Debounce function to limit the rate of execution
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('scroll', debounce(scrollToNearestContainer, 100));
