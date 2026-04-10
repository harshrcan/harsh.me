// Projects data
const projects = [
    { 
        title: "Modern Snake Game", 
        tech: ["JS"], 
        link: "https://snake.game.harshrana.me/",
        repo: "",
        description: "A modern take on the classic Snake game with smooth gameplay and intuitive controls."
    },
    { 
        title: "Fully Functional Restaurant Website", 
        tech: ["HTML", "CSS", "JS"], 
        link: "https://harshrcan.github.io/Restraunt-website-/",
        repo: "https://github.com/harshrcan/Restraunt-website-",
        description: "A complete restaurant website with menu, reservations, and contact features."
    },
    { 
        title: "Virtual Photobooth", 
        tech: ["HTML", "CSS", "JS"], 
        link: "https://photobooth-by-harsh.netlify.app/",
        repo: "",
        description: "An interactive virtual photobooth with filters and effects for fun photo sessions."
    },
    { 
        title: "rentAroom", 
        tech: ["TypeScript", "SQL"], 
        link: "https://rent-aroom.vercel.app/",
        repo: "",
        description: "A room rental platform connecting property owners with tenants."
    },
    { 
        title: "Secret Project 5", 
        tech: ["React", "Node.js"], 
        link: "#project5",
        repo: "",
        description: "A project currently under development with React and Node.js."
    },
    { 
        title: "Secret Project 6", 
        tech: ["Next.js", "MongoDB"], 
        link: "#project6",
        repo: "",
        description: "Building a full-stack application with Next.js and MongoDB."
    },
    { 
        title: "Secret Project 7", 
        tech: ["React", "Firebase"], 
        link: "#project7",
        repo: "",
        description: "A React application with Firebase backend integration."
    },
    { 
        title: "Secret Project 8", 
        tech: ["JS", "Web API"], 
        link: "#project8",
        repo: "",
        description: "Exploring Web APIs with vanilla JavaScript."
    },
    { 
        title: "Secret Project 9", 
        tech: ["React", "API"], 
        link: "#project9",
        repo: "",
        description: "A React project integrating with external APIs."
    },
    { 
        title: "Secret Project 10", 
        tech: ["React", "Chart.js"], 
        link: "#project10",
        repo: "",
        description: "Data visualization project using React and Chart.js."
    },
    { 
        title: "Secret Project 11", 
        tech: ["JS", "Monaco"], 
        link: "#project11",
        repo: "",
        description: "A code editor implementation using Monaco editor."
    },
    { 
        title: "✨ Ultra Secret Project", 
        tech: ["???", "Magic", "AI"], 
        link: "#ultra-secret",
        repo: "",
        description: "A top-secret project that's still in the works. Stay tuned!"
    }
];

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <a href="${project.link}" class="project-card" target="_blank" rel="noopener">
            <div class="project-image" style="background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);"></div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <span class="project-link">Visit Site</span>
                    ${project.repo ? `<a href="${project.repo}" class="project-link" target="_blank" rel="noopener">View Repository</a>` : ''}
                </div>
            </div>
        </a>
    `).join('');
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(btn.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize projects when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjects);
} else {
    renderProjects();
}
