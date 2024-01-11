/* ====== typing animation ====== */
var typed = new Typed(".typing-text", {
    strings:["software developer", "business analyst", "project manager", "lifetime learner", "hockey fanatic", "Marvel geek", "tennis player"],
    typeSpeed: 150,
    backSpeed: 90,
    loop: true,
    backDelay: 1800
    
})

/* ====== sidebar navigation ====== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() {

            /* ====== remove backsplash class ====== */
            // removeBackSection();

            /* ====== activate page ====== */
            for(let j = 0; j < totalNavList; j++) {
                // if (navList[j].querySelector("a").classList.contains("active")) {
                //     addBackSection(j);
                // }
                navList[j].querySelector("a").classList.remove("active");
            }

            this.classList.add("active")
            showSection(this);

            /* ====== switch to toggler button ====== */
            if (window.innerWidth < 1200) {
                sidebarSectionTogglerBtn();
            }
        })
    }

/* ====== sidebar scrollspy ====== */
// const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#myScrollSpy'
// })

// document.addEventListener("DOMContentLoaded", function(){
//     var myScrollSpy = new bootstrap.ScrollSpy(document.body, {
//         target: "#myScrollSpy"
//     })
// });

// $(document).ready(function(){  
//     $('body').scrollspy({ target: '#myScrollSpy', offset: 50 })  
//  });  

// /* ====== helper function to add backsplash class ====== */
// function addBackSection(num) {
//     allSection[num].classList.add("back-section");
// }

// /* ====== helper function to remove backsplash class ====== */
// function removeBackSection() {
//     for (let k = 0; k < totalSection; k++) {
//             allSection[k].classList.remove("back-section")
//         }
// }

window.addEventListener("resize", ResizeWindow);

function ResizeWindow() {
    var dataSpyList = [].slice.call(document.querySelectorAll('[data-spy="scroll"]'));

    dataSpyList.forEach(function(dataSpyElement) {
        bootstrap.ScrollSpy.getInstance(dataSpyElement).refresh();
    });
}

/* ====== helper function to reveal section ====== */
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
    
}

/* ====== helper function to update sidebar ====== */
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];

        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

/* ====== hire me button ====== */
document.querySelector(".hire-me").addEventListener("click", function() {
    // const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    // removeBackSection();
    // addBackSection(sectionIndex);
})

/* ====== navigation button ====== */
const navTogglerBtn = document.querySelector(".nav-toggler"),
    sidebar = document.querySelector(".sidebar-container");

    navTogglerBtn.addEventListener("click", () => {
        sidebarSectionTogglerBtn();
    })

    /* ====== helper function to open sidebar ====== */
    function sidebarSectionTogglerBtn() {
        sidebar.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");

        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle("open");
        }
    }