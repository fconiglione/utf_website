window.addEventListener('DOMContentLoaded', (event) => {
    const productsButton = document.getElementById("products-btn");
    const productsContent = document.getElementById("products-content");
    const contentPlaceholder = document.getElementById("content-placeholder");

    productsButton.addEventListener("click", function() {
        if (productsContent.style.display === "flex") {
            productsContent.style.display = "none";
            contentPlaceholder.innerHTML = "";
            productsButton.classList.remove("active");
            aiButton.classList.remove("active");
            educationButton.classList.remove("active");
            supportButton.classList.remove("active");
            moreButton.classList.remove("active");
        } else {
            productsContent.style.display = "flex";
            contentPlaceholder.innerHTML = "";
            contentPlaceholder.appendChild(productsContent);
            productsButton.classList.add("active");
            aiButton.classList.remove("active");
            educationButton.classList.remove("active");
            supportButton.classList.remove("active");
            moreButton.classList.remove("active");
        }
    });

    const aiButton = document.getElementById("ai-btn");
    const aiContent = document.getElementById("ai-content");

    aiButton.addEventListener("click", function() {
        if (aiContent.style.display === "flex") {
            aiContent.style.display = "none";
            contentPlaceholder.innerHTML = "";
            aiButton.classList.remove("active");
            productsButton.classList.remove("active");
            educationButton.classList.remove("active");
            supportButton.classList.remove("active");
            moreButton.classList.remove("active");
        } else {
            aiContent.style.display = "flex";
            contentPlaceholder.innerHTML = "";
            contentPlaceholder.appendChild(aiContent);
            productsButton.classList.remove("active");
            aiButton.classList.add("active");
            educationButton.classList.remove("active");
            supportButton.classList.remove("active");
            moreButton.classList.remove("active");
        }
    });

    const educationButton = document.getElementById("education-btn");
    const educationContent = document.getElementById("education-content");

    educationButton.addEventListener("click", function() {
        if (educationContent.style.display === "flex") {
            educationContent.style.display = "none";
            contentPlaceholder.innerHTML = "";
            educationButton.classList.remove("active");
            productsButton.classList.remove("active");
            aiButton.classList.remove("active");
            supportButton.classList.remove("active");
            moreButton.classList.remove("active");
        } else {
            educationContent.style.display = "flex";
            contentPlaceholder.innerHTML = "";
            contentPlaceholder.appendChild(educationContent);
            productsButton.classList.remove("active");
            aiButton.classList.remove("active");
            educationButton.classList.add("active");
            supportButton.classList.remove("active");
            moreButton.classList.remove("active");
        }
    });

    const supportButton = document.getElementById("support-btn");
    const supportContent = document.getElementById("support-content");

    supportButton.addEventListener("click", function() {
        if (supportContent.style.display === "flex") {
            supportContent.style.display = "none";
            contentPlaceholder.innerHTML = "";
            supportButton.classList.remove("active");
            productsButton.classList.remove("active");
            aiButton.classList.remove("active");
            educationButton.classList.remove("active");
            moreButton.classList.remove("active");
        } else {
            supportContent.style.display = "flex";
            contentPlaceholder.innerHTML = "";
            contentPlaceholder.appendChild(supportContent);
            productsButton.classList.remove("active");
            aiButton.classList.remove("active");
            educationButton.classList.remove("active");
            supportButton.classList.add("active");
            moreButton.classList.remove("active");
        }
    });

    const moreButton = document.getElementById("more-btn");
    const moreContent = document.getElementById("more-content");

    moreButton.addEventListener("click", function() {
        if (moreContent.style.display === "flex") {
            moreContent.style.display = "none";
            contentPlaceholder.innerHTML = "";
            moreButton.classList.remove("active");
            productsButton.classList.remove("active");
            aiButton.classList.remove("active");
            educationButton.classList.remove("active");
            supportButton.classList.remove("active");
        } else {
            moreContent.style.display = "flex";
            contentPlaceholder.innerHTML = "";
            contentPlaceholder.appendChild(moreContent);
            productsButton.classList.remove("active");
            aiButton.classList.remove("active");
            educationButton.classList.remove("active");
            supportButton.classList.remove("active");
            moreButton.classList.add("active");
        }
    });

    const hamburgerButton = document.getElementById('hamburger');
    const smallScreenNav = document.getElementById('small-screen-nav');
    const smallContentPlaceholder = document.getElementById('small-content-placeholder');

    hamburgerButton.addEventListener('click', function () {
        hamburgerButton.classList.toggle('active');
        if (hamburgerButton.classList.contains('active')) {
            smallScreenNav.style.display = "flex";
            smallContentPlaceholder.appendChild(smallScreenNav);
        } else {
            smallContentPlaceholder.removeChild(smallScreenNav);
        }
    });

    const smallProductsContent = document.getElementById('small-products-content');
    const smallProductsButton = document.getElementById('small-products-btn');

    smallProductsButton.addEventListener("click", function () {
        this.classList.toggle("active");

        if (this.classList.contains("active")) {
            smallProductsContent.style.display = "flex";
            smallAiContent.style.display = "none";
            smallEducationContent.style.display = "none";
            smallSupportContent.style.display = "none";
            smallMoreContent.style.display = "none";
            smallAiButton.classList.remove("active");
            smallEducationButton.classList.remove("active");
            smallSupportButton.classList.remove("active");
            smallMoreButton.classList.remove("active");
        } else {
            smallProductsContent.style.display = "none";
            smallAiButton.classList.remove("active");
            smallEducationButton.classList.remove("active");
            smallSupportButton.classList.remove("active");
            smallMoreButton.classList.remove("active");
        }
    });

    const smallAiContent = document.getElementById('small-ai-content');
    const smallAiButton = document.getElementById('small-ai-btn');

    smallAiButton.addEventListener("click", function () {
        this.classList.toggle("active");

        if (this.classList.contains("active")) {
            smallProductsContent.style.display = "none";
            smallAiContent.style.display = "flex";
            smallEducationContent.style.display = "none";
            smallSupportContent.style.display = "none";
            smallMoreContent.style.display = "none";
            smallProductsButton.classList.remove("active");
            smallEducationButton.classList.remove("active");
            smallSupportButton.classList.remove("active");
            smallMoreButton.classList.remove("active");
        } else {
            smallAiContent.style.display = "none";
            smallProductsButton.classList.remove("active");
            smallEducationButton.classList.remove("active");
            smallSupportButton.classList.remove("active");
            smallMoreButton.classList.remove("active");
        }
    });

    const smallEducationContent = document.getElementById('small-education-content');
    const smallEducationButton = document.getElementById('small-education-btn');

    smallEducationButton.addEventListener("click", function () {
        this.classList.toggle("active");

        if (this.classList.contains("active")) {
            smallProductsContent.style.display = "none";
            smallAiContent.style.display = "none";
            smallEducationContent.style.display = "flex";
            smallSupportContent.style.display = "none";
            smallMoreContent.style.display = "none";
            smallProductsButton.classList.remove("active");
            smallAiButton.classList.remove("active");
            smallSupportButton.classList.remove("active");
            smallMoreButton.classList.remove("active");
        } else {
            smallEducationContent.style.display = "none";
            smallProductsButton.classList.remove("active");
            smallAiButton.classList.remove("active");
            smallSupportButton.classList.remove("active");
            smallMoreButton.classList.remove("active");
        }
    });

    const smallSupportContent = document.getElementById('small-support-content');
    const smallSupportButton = document.getElementById('small-support-btn');

    smallSupportButton.addEventListener("click", function () {
        this.classList.toggle("active");

        if (this.classList.contains("active")) {
            smallProductsContent.style.display = "none";
            smallAiContent.style.display = "none";
            smallEducationContent.style.display = "none";
            smallSupportContent.style.display = "flex";
            smallMoreContent.style.display = "none";
            smallProductsButton.classList.remove("active");
            smallAiButton.classList.remove("active");
            smallEducationButton.classList.remove("active");
            smallMoreButton.classList.remove("active");
        } else {
            smallSupportContent.style.display = "none";
            smallProductsButton.classList.remove("active");
            smallAiButton.classList.remove("active");
            smallEducationButton.classList.remove("active");
            smallMoreButton.classList.remove("active");
        }
    });

    const smallMoreContent = document.getElementById('small-more-content');
    const smallMoreButton = document.getElementById('small-more-btn');

    smallMoreButton.addEventListener("click", function () {
        this.classList.toggle("active");

        if (this.classList.contains("active")) {
            smallProductsContent.style.display = "none";
            smallAiContent.style.display = "none";
            smallEducationContent.style.display = "none";
            smallSupportContent.style.display = "none";
            smallMoreContent.style.display = "flex";
            smallProductsButton.classList.remove("active");
            smallAiButton.classList.remove("active");
            smallEducationButton.classList.remove("active");
            smallSupportButton.classList.remove("active");
        } else {
            smallMoreContent.style.display = "none";
            smallProductsButton.classList.remove("active");
            smallAiButton.classList.remove("active");
            smallEducationButton.classList.remove("active");
            smallSupportButton.classList.remove("active");
        }
    });

    const footerExploreButton = document.getElementById("footer-explore-btn");
    const footerExploreContent = document.getElementById("footer-explore-content");

    footerExploreButton.addEventListener("click", function() {
        if (footerExploreButton.classList.contains("active")) {
            footerExploreButton.classList.remove("active");
        } else {
            footerExploreButton.classList.add("active");
        }

        if (footerExploreContent.style.display === "flex") {
            footerExploreContent.style.display = "none";
        } else {
            footerExploreContent.style.display = "flex";
        }
    });

    const footerCompanyButton = document.getElementById("footer-company-btn");
    const footerCompanyContent = document.getElementById("footer-company-content");

    footerCompanyButton.addEventListener("click", function() {
        if (footerCompanyButton.classList.contains("active")) {
            footerCompanyButton.classList.remove("active");
        } else {
            footerCompanyButton.classList.add("active");
        }

        if (footerCompanyContent.style.display === "flex") {
            footerCompanyContent.style.display = "none";
        } else {
            footerCompanyContent.style.display = "flex";
        }
    });

    const footerResourcesButton = document.getElementById("footer-resources-btn");
    const footerResourcesContent = document.getElementById("footer-resources-content");

    footerResourcesButton.addEventListener("click", function() {
        if (footerResourcesButton.classList.contains("active")) {
            footerResourcesButton.classList.remove("active");
        } else {
            footerResourcesButton.classList.add("active");
        }

        if (footerResourcesContent.style.display === "flex") {
            footerResourcesContent.style.display = "none";
        } else {
            footerResourcesContent.style.display = "flex";
        }
    });

    const footerPopularButton = document.getElementById("footer-popular-btn");
    const footerPopularContent = document.getElementById("footer-popular-content");

    footerPopularButton.addEventListener("click", function() {
        if (footerPopularButton.classList.contains("active")) {
            footerPopularButton.classList.remove("active");
        } else {
            footerPopularButton.classList.add("active");
        }

        if (footerPopularContent.style.display === "flex") {
            footerPopularContent.style.display = "none";
        } else {
            footerPopularContent.style.display = "flex";
        }
    });

    const footerFollowButton = document.getElementById("footer-follow-btn");
    const footerFollowContent = document.getElementById("footer-follow-content");

    footerFollowButton.addEventListener("click", function() {
        if (footerFollowButton.classList.contains("active")) {
            footerFollowButton.classList.remove("active");
        } else {
            footerFollowButton.classList.add("active");
        }

        if (footerFollowContent.style.display === "flex") {
            footerFollowContent.style.display = "none";
        } else {
            footerFollowContent.style.display = "flex";
        }
    });
});