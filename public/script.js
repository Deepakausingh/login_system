async function register() {
    const username = document.getElementById("reg_username").value;
    const password = document.getElementById("reg_password").value;

    try {
        const res = await fetch("http://localhost:3000/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        showPopup(data.message);
    } catch (error) {
        showPopup("Error connecting to the server. Please try again.");
    }
}

async function login() {
    const username = document.getElementById("login_username").value;
    const password = document.getElementById("login_password").value;

    try {
        const res = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        showPopup(data.message);
    } catch (error) {
        showPopup("Error connecting to the server. Please try again.");
    }
}

// Function to display popup with message
function showPopup(message) {
    document.getElementById("popup-message").innerText = message;
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");

    // Show overlay and popup
    overlay.style.display = "block";
    popup.style.display = "flex";

    // Allow animation after setting display
    setTimeout(() => {
        overlay.classList.add("show");
        popup.classList.add("show");
    }, 300);
}

function closePopup() {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");

    // Remove animation classes
    overlay.classList.remove("show");
    popup.classList.remove("show");

    // Wait for animation to finish before hiding
    setTimeout(() => {
        overlay.style.display = "none";
        popup.style.display = "none";
    }, 300);
}




