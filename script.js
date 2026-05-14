localStorage.setItem("os", navigator.platform);
localStorage.setItem("browser", navigator.userAgent);
localStorage.setItem("language", navigator.language);

document.addEventListener("DOMContentLoaded", function () {

    const footerInfo = document.querySelector("#systemInfo");

    footerInfo.innerHTML = `
        <strong>OS:</strong> ${localStorage.getItem("os")} <br>
        <strong>Browser:</strong> ${localStorage.getItem("browser")} <br>
        <strong>Language:</strong> ${localStorage.getItem("language")}
    `;

    fetch("https://jsonplaceholder.typicode.com/posts/13/comments")
        .then(response => response.json())
        .then(comments => {
            const commentsBlock = document.getElementById("comments");

            comments.forEach(comment => {
                const div = document.createElement("div");
                div.classList.add("comment");

                div.innerHTML = `
                    <strong>${comment.email}</strong>
                    ${comment.body}
                `;

                commentsBlock.appendChild(div);
            });
        })
        .catch(error => console.error("Помилка:", error));

    setTimeout(() => {
        document.getElementById("modal").style.display = "block";
    }, 60000);

    const toggleBtn = document.getElementById("toggleTheme");
    const body = document.body;

    const now = new Date();
    const hour = now.getHours();

    console.log("Поточна година:", hour);

    if (hour >= 7 && hour < 21) {
        body.classList.add("day");
        localStorage.setItem("theme", "day");
    } else {
        body.classList.add("night");
        localStorage.setItem("theme", "night");
    }

    toggleBtn.addEventListener("click", () => {
        if (body.classList.contains("day")) {
            body.classList.remove("day");
            body.classList.add("night");
            localStorage.setItem("theme", "night");
        } else {
            body.classList.remove("night");
            body.classList.add("day");
            localStorage.setItem("theme", "day");
        }
    });

});