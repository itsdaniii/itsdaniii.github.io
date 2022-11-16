/* ====== typing animation ====== */
var typed = new Typed(".typing-text", {
    strings:["Software Developer", "CPA", "sports lover", "lifetime learner", "connector", "Marvel fanatic"],
    typeSpeed:100,
    backSpeed: 70,
    loop:true,
    backDelay: 2000
    
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