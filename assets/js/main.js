const sections = document.getElementsByTagName('section');
for (const section of sections) {
    section.addEventListener('mouseenter', function (event) {

        const navMenu = document.getElementById('navLinks');
        const menusLinks = navMenu.getElementsByClassName('nav-link');
        addAndRemoveActivateStatus(menusLinks, event.target.id);

    });
}

function addAndRemoveActivateStatus(menuLinks, hrefValue) {
    for (const link of menuLinks) {
        const hrefValOfElement = link.getAttribute('href');
        console.log(hrefValOfElement);
        if (hrefValOfElement && hrefValOfElement.includes(hrefValue)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    }
}
