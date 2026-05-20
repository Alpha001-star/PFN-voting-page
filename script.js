/** * 1. CONTESTANT VOTE MODAL LOGIC
 */
 function openPortfolio(name, contestantId, votes, img) {
    const modal = document.getElementById('portfolioModal');
    const modalImg = document.getElementById('modalImg');
    
    // Safely update the fields present in your new vote modal
    document.getElementById('modalName').innerText = name;
    
    // Check if the unique ID placeholder exists before trying to modify it
    const idElement = document.getElementById('contestantId');
    if (idElement) {
        idElement.innerText = contestantId;
    }
    
    // Formats and displays the vote counts cleanly
    const votesElement = document.getElementById('modalVotes');
    if (votesElement) {
        votesElement.innerText = Number(votes).toLocaleString();
    }
    
    // FIX FOR THE IMAGE DEPLOYMENT:
    if (modalImg && img) {
        // This explicitly wraps the incoming image string cleanly into a CSS URL format
        modalImg.style.backgroundImage = "url('" + img + "')";
        modalImg.style.backgroundSize = "cover";
        modalImg.style.backgroundPosition = "center";
        modalImg.style.backgroundRepeat = "no-repeat";
    }
    
    modal.style.display = "flex"; 
    document.body.style.overflow = "hidden"; 
}

function closePortfolio() {
    const modal = document.getElementById('portfolioModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scroll
    }
}

// Close if user clicks outside the modal content window box
window.onclick = function(event) {
    const modal = document.getElementById('portfolioModal');
    const termsModal = document.getElementById('termsModal');
    
    if (event.target == modal) {
        closePortfolio();
    }
    if (event.target == termsModal) {
        acceptTerms();
    }
}

/** * 2. HAMBURGER MENU TOGGLE
 */
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

/** * 3. SCROLL EFFECTS & TERMS MODAL
 */
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});

// Function to handle the instant terms popup on load
window.addEventListener('load', function() {
    const termsModal = document.getElementById('termsModal');
    if (termsModal) {
        termsModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
});

// Function to close terms and restore scroll
function acceptTerms() {
    const termsModal = document.getElementById('termsModal');
    if (termsModal) {
        termsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}