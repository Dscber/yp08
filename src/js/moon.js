toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        toggleBtn.src = "./assets/images/sun.svg";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.src = "./assets/images/img_05.svg";
        localStorage.setItem("theme", "light");
    }
});