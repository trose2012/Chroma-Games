const ALLOWED_EMAILS = ["allowed@example.com", "another@example.com"];

function handleCredentialResponse(response) {
    const jwt = response.credential;
    const user = parseJwt(jwt);

    if (ALLOWED_EMAILS.includes(user.email)) {
        localStorage.setItem("userEmail", user.email); // Store login status
        window.location.href = "dashboard.html"; // Redirect to protected page
    } else {
        alert("Access Denied!");
    }
}

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}

function logout() {
    localStorage.removeItem("userEmail"); // Clear login status
    window.location.href = "index.html"; // Redirect to login page
}
