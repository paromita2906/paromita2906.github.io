document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    const list = document.getElementById("feedbackList");

    function loadFeedback() {
        list.innerHTML = "";
        const data = JSON.parse(localStorage.getItem("feedback")) || [];

        data.forEach(entry => {
            const li = document.createElement("li");
            li.textContent = `${entry.name}: ${entry.message}`;
            list.appendChild(li);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        const feedback = JSON.parse(localStorage.getItem("feedback")) || [];
        feedback.push({ name, message });

        localStorage.setItem("feedback", JSON.stringify(feedback));
        form.reset();
        loadFeedback();
    });

    loadFeedback();
});
