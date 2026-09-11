document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Temple of<br>The Forgotten",
            desc: "An ancient temple environment created for real-time in Unreal Engine. Focused on atmosphere, composition and modular workflows.",
            tags: ["ENVIRONMENT", "REAL-TIME"],
            image: "assets/images/hero-image.png"
        },
        {
            title: "Cyberpunk<br>Alleyway",
            desc: "A futuristic city alleyway designed with high-fidelity textures and dynamic lighting setups mapped in Blender.",
            tags: ["ENVIRONMENT", "SCIFI"],
            image: "assets/images/let'stalk-section-image.png"
        },
        {
            title: "Warlord<br>Armor Set",
            desc: "High-poly character armor sculpt focused on anatomical accuracy, weathering details, and intricate ZBrush workflows.",
            tags: ["CHARACTER", "SCULPTING"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bxrEQdIlUis9bXUMQ_eT1ZU59_0wtlhinnfwCx4X50B1spgcivWiy_4&s=10"
        },
        {
            title: "Assault<br>Mech Alpha",
            desc: "Hard-surface modeling of a futuristic transport mech, fully textured and baked inside Substance 3D Painter.",
            tags: ["PROPS", "HARD-SURFACE"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5cMn3h-Rz2Xh9Mw57p8SdiPLUUIX5jkDPspm_P3rDfe-BDuKVIrJJLY&s=10"
        }
    ];

    let currentIndex = 0;

    const domElements = {
        image: document.getElementById("featured-image"),
        title: document.getElementById("project-title"),
        desc: document.getElementById("project-desc"),
        tagsContainer: document.getElementById("project-tags"),
        counter: document.getElementById("project-counter"),
        card: document.getElementById("project-card"),
        prevBtn: document.getElementById("slider-prev"),
        nextBtn: document.getElementById("slider-next")
    };

    const updateSliderUI = () => {
        domElements.image.classList.add("fade-out");
        domElements.card.classList.add("fade-out");
        domElements.counter.classList.add("fade-out");

        setTimeout(() => {
            const currentProject = projects[currentIndex];

            domElements.image.src = currentProject.image;
            domElements.title.innerHTML = currentProject.title;
            domElements.desc.textContent = currentProject.desc;
            
            domElements.tagsContainer.innerHTML = currentProject.tags
                .map(tag => `<span class="work-section__tag">${tag}</span>`)
                .join("");

            const displayIndex = String(currentIndex + 1).padStart(2, '0');
            const totalProjects = String(projects.length).padStart(2, '0');
            domElements.counter.textContent = `${displayIndex} / ${totalProjects}`;

            domElements.image.classList.remove("fade-out");
            domElements.card.classList.remove("fade-out");
            domElements.counter.classList.remove("fade-out");
        }, 400); 
    };

    domElements.nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % projects.length;
        updateSliderUI();
    });

    domElements.prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateSliderUI();
    });
});