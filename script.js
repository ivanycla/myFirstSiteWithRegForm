document.addEventListener("DOMContentLoaded", function() {
    const createAcc = document.getElementById("createAcc").onclick = function() {
        window.location.href = "formPage.html";
    };

    const aboutUsButton = document.querySelector('a[href="#aboutUs"]');
    const subscribeButton = document.querySelector('a[href="#subscribe"]');
    const aboutUsSection = document.querySelector('.thirdTitle').parentElement;
    const subscribeSection = document.querySelector('.secondTitle').parentElement;

    aboutUsButton.onclick = function() {
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    };

    subscribeButton.onclick = function() {
        subscribeSection.scrollIntoView({ behavior: 'smooth' });
    };
});
