document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bg-music");
    const soundToggleBtn = document.getElementById("sound-toggle");
    const soundIcon = soundToggleBtn.querySelector("i");
    
    let isPlaying = false;
    let hasUserInteracted = false;

    const toggleSound = () => {
        if (isPlaying) {
            bgMusic.pause();
            soundIcon.classList.remove("fa-volume-high");
            soundIcon.classList.add("fa-volume-xmark");
            soundToggleBtn.style.color = "var(--color-text-secondary)";
        } else {
            bgMusic.play().catch(error => {
                console.log("Audio play failed:", error);
            });
            soundIcon.classList.remove("fa-volume-xmark");
            soundIcon.classList.add("fa-volume-high");
            soundToggleBtn.style.color = "var(--color-text-primary)";
        }
        isPlaying = !isPlaying;
    };

    soundToggleBtn.addEventListener("click", () => {
        toggleSound();
        soundToggleBtn.blur();
    });

    const initialPlayAttempt = async () => {
        try {
            await bgMusic.play();
            isPlaying = true;
            soundIcon.classList.remove("fa-volume-xmark");
            soundIcon.classList.add("fa-volume-high");
            soundToggleBtn.style.color = "var(--color-text-primary)";
        } catch (error) {
            console.log("Autoplay prevented by browser. Waiting for user interaction.");
        }
    };

    initialPlayAttempt();

    const startOnInteraction = () => {
        if (!hasUserInteracted && !isPlaying) {
            toggleSound();
        }
        hasUserInteracted = true;
        document.removeEventListener("click", startOnInteraction);
        document.removeEventListener("keydown", startOnInteraction);
    };

    document.addEventListener("click", startOnInteraction);
    document.addEventListener("keydown", startOnInteraction, { once: true });
});