document.addEventListener("DOMContentLoaded", function () {

    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");

    if (introScreen && mainContent) {

        mainContent.style.display = "none";

        introScreen.addEventListener("click", function () {

            introScreen.style.opacity = "0";
            introScreen.style.transition = "0.8s ease";

            setTimeout(function () {

                introScreen.style.display = "none";
                mainContent.style.display = "block";

            }, 800);

        });

    }

});