const button = document.getElementById("themeToggle");

// 1. При загрузке страницы — читаем сохранённую тему
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
}

// 2. Переключение темы по кнопке
button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    // 3. Сохраняем выбранную тему
    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
