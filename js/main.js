
//#region conts 

const index = "index.html";
const about = "about.html";
const trainer = "trainer.html";
const course = "course.html";
const membership = "membership.html";
const contact = "contact.html";
const author = "author.html";
const h2Class = "text-white text-capitalize";
const rowH = document.querySelector("#rowH");
const rowBlocksClass = "col-lg-4 col-md-6";
const gallery = document.querySelector("#gallery");
const container = document.querySelector("#containerBlocks");
const popularCourses = document.querySelector("#Popular-Courses");
const footerBlocks = document.querySelector("#footer-blocks");
const footerBlockClass = "col-lg-4 col-md-6 mb-5 mb-lg-0";
const textWhiteClass = "text-white";
const h4Class = "mb-4 text-white letter-spacing text-uppercase";
const sectionNavId = document.querySelector("#navigationHeader");
const whyChooseUsID = document.querySelector("#whyChooseUS");
const ourTrainerId = document.querySelector("#ourTrainer");
const colMd6Class = "col-md-6";
const h3Class = "card-title text-color";
const h6Class = "card-subtitle pb-4 letter-spacing";
const iClassInline = "list-inline-item";
const divInnerCardClass = "card-body team-wrap pl-4";
const allCoursesID = document.querySelector("#allCourses");
const divCardRounded  = document.querySelector(".card rounded-0 p-0 mb-5");
const packagePricingID = document.querySelector("#packagePricing");
const packagePricingHeader = document.querySelector("#packagePricingHeader");
const packagePricingContainerId = document.querySelector("#packagePricingContainer");
const RowJustifyCC = "row justify-content-center";
const packagePricingContainerIdColor = document.querySelector("#packagePricingHeaderColor");
const newMemberDiscountId = document.querySelector("#newMemberDiscount");
const PPBlocksColor = document.querySelector("#PPBlocks");
const formDDLState = document.querySelector("#ddlState");
const formDDLCity = document.querySelector("#ddlCity");
const formName = document.querySelector("#name");
const formLastName = document.querySelector("#lastName");
const formRadioButton = document.getElementsByName("gender");
const formCB = document.querySelector("#cb");
const formSubmit = document.querySelector("#submit");
//#endregion

let pathNameArray = window.location.pathname.split('/')
let pathName = '/'+pathNameArray[pathNameArray.length-1]
if(pathName == '/'){
    pathName = "/"+index;
};


//#region FUNCTION CREATE ELEMENTS

function createElementWithClass(tag, className) {
    let element = document.createElement(tag);
    element.className = className;
    return element;
}

function appendChildToParent(parent, child) {
    parent.appendChild(child);
}

//#endregion

//#region GLOBAL FUNCTIONS

function printNavigationBar() {
    var navigationLinks = {
        Home: `<li class="nav-item active">
            <a class="nav-link" href="index.html">Home<span class="sr-only">(current)<span>
            </a>
        </li>`,
        Services: `<li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="index.html" data-toggle="dropdown"                 aria-haspopup="true"
                aria-expanded="false">Services
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="about.html">About</a></li>
                <li><a class="dropdown-item" href="trainer.html">Trainer</a></li>
                <li><a class="dropdown-item" href="course.html">Courses</a></li>
            </ul>
        </li>`,
        Membership: `<li class="nav-item"><a class="nav-link" href="membership.html">Membership</a></li>`,
        Contact: `<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>`,
        Author: `<li class="nav-item"><a class="nav-link" href="author.html">Author</a></li>`
    };
    var navPrint = "";
    for (let link in navigationLinks) {
        navPrint += navigationLinks[link];
    }


    // NAVIGATION BAR
    var navigationObj = {
        divClass: "container-fluid",

        aClass: "navbar-brand",

        href: index,

        h2Class: h2Class,

        h2Content: '</i>Gym<span class="text-color">Fit</span>',

        buttonClass: `navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsid"
			        aria-controls="navbarsid" aria-expanded="false" aria-label="Toggle navigation`,

        spanClass: "ti-view-list",

        innerDivClass: "collapse text-center navbar-collapse",

        innerDivId: "navbarsid",

        ulClass: "navbar-nav mx-auto"
    };

    var navigation = `<div class="${navigationObj.divClass}">
                    <a class="${navigationObj.aClass}" href="${index}">
                        <h2 class="${navigationObj.h2Class}">${navigationObj.h2Content}</h2>
                    </a>
                    <button class="${navigationObj.buttonClass}">
                        <span class="${navigationObj.spanClass}"></span>
                    </button>
                    <div class="${navigationObj.innerDivClass}" id="${navigationObj.innerDivId}">
                        <ul class="${navigationObj.ulClass}">
                            ${navPrint}
                        </ul>
                    </div>
                </div>`;

                document.querySelector("nav").innerHTML = navigation;
}

function printSectionNavigationForOtherPages() {
    
    let pageLink = ["about", "trainer", "course", "membership", "contact"];
    let navDescriptionText = new Array
    (
        "What we are",
        "Who are trainers",
        "Our courses",
        "Become partner",
        "Book Appointments"
    );
    
    function returnPageName(input) {

        let name = input.replace("/", "").split(".");
        return name[0];
    };

    
    function findPageName(pathName) {
        
        let currentPage = returnPageName(pathName);

        for (let i in pageLink) {
            if (currentPage === pageLink[i]) {
                return pageLink[i];
            }
        }
    };

    function findPageIndex(pathName) {
        let currentPage = returnPageName(pathName);
    
        for (let i in pageLink) {
            if (currentPage === pageLink[i]) {
                return parseInt(i);
            }
        }
    };





    var indexNumber = findPageIndex(pathName);
    var currentPage = findPageName(pathName);

    let navigationForOtherPages = {
        sectionClass: "page-title bg-2",

        divClass: "container",

        innerDivClass: "row",

        ulDivClass: "col-lg-12 text-center",

        ulClass: "list-inline mb-0",

        liTag: [
            `<li class="list-inline-item"><a href="${index}" class="text-sm letter-spacing text-white text-uppercase font-weight-bold">Home</a></li>`,

            `<li class="list-inline-item"><span class="text-white">|</span></li>`,

            `<li class="list-inline-item"><a href="#" class="text-color text-uppercase text-sm letter-spacing">${currentPage}</a></li>`
        ],

        h1Class: "text-lg text-white mt-2",

        h1: ["What we are","Who are trainers","Our courses","Become partner","Book Appointments"]
    };

    var printNavForOtherPages = `<div class="${navigationForOtherPages.divClass}">
                            <div class="${navigationForOtherPages.innerDivClass}">
                                <div class="${navigationForOtherPages.ulDivClass}">
                                    <ul class="${navigationForOtherPages.ulClass}">`;
    for (let n in navigationForOtherPages.liTag) {
        printNavForOtherPages += `              ${navigationForOtherPages.liTag[n]}`;
    }
    printNavForOtherPages += `            </ul>
                                        <h1 class="${navigationForOtherPages.h1Class}">
                                            ${navigationForOtherPages.h1[indexNumber]}
                                        </h1>
                                </div>
                            </div>
                        </div>`;

    sectionNavId.innerHTML = printNavForOtherPages;
}

function printGallery() {
    var galleryClass = "col-lg-3 col-md-6 col-sm-6";

    var galleryImgClass = "popup-gallery";

    var ImgFluidClass = "img-fluid";

    var galleryImgLink = new Array(
        "images/gallery/gallery-01.jpg",
        "images/gallery/gallery-02.jpg",
        "images/gallery/gallery-03.jpg",
        "images/gallery/gallery-04.jpg",
        "images/gallery/gallery-05.jpg",
        "images/gallery/gallery-06.jpg",
        "images/gallery/gallery-07.jpg",
        "images/gallery/gallery-08.jpg"
    );

    var galleryPrint = "";

    for (img in galleryImgLink) {
        galleryPrint += `<div class="${galleryClass}">
                            <a href="${galleryImgLink[img]}" class="${galleryImgClass}">
                                <img src="${galleryImgLink[img]}" alt="gym-workout${img}" class="${ImgFluidClass}">
                            </a>
                        </div>`;
    };
    gallery.innerHTML = galleryPrint;
    return ImgFluidClass;
}

function printWholeFooter() {
    var footerTextObj = {
        class: footerBlockClass,

        h2Class: h2Class,

        spanClass: "text-color",

        text1: "To maintain the quality of our services, we encourage all members to adhere to gym guidelines and attend scheduled appointments on time. Your cooperation ensures a great experience for everyone.",

        text2: "Please respect gym rules and arrive on time for your sessions. Together, we create a better fitness environment.",
    };

    var footerTextPrint = "";

    footerTextPrint += `<div class="${footerTextObj.class}">
                    <h2 class="${footerTextObj.h2Class}">
                        Gym<span class="${footerTextObj.spanClass}">Fit</span>
                    </h2>
                    <p>${footerTextObj.text1}</p>
                    <p>${footerTextObj.text2}</p>
                  </div>`;


    //#region FOOTER WORKING TIME
    var workingTimeObj = {
        blockClass: "col-lg-3 col-md-6 mb-5 mb-lg-0",

        innerClass: "footer-widget recent-blog",

        h4Class: h4Class,

        link: contact,

        textClass: textWhiteClass,

        workingDays: ["Monday&minus;Friday", "Saturday", "Sundays"],

        pClass: "text-sm mt-2 text-white-50",

        workingTime: ["From 7 AM to 11 PM", "From 10 AM to 8 PM", "Closed"]
    };


    var footerWorkingTimePrint = "";

    footerWorkingTimePrint += `<div class="${workingTimeObj.blockClass}.w-auto">
                            <div class="${workingTimeObj.innerClass}">
                                <h4 class="${workingTimeObj.h4Class}">Working Time</h4>`;
    for (let t in workingTimeObj.workingDays)
        footerWorkingTimePrint += `<div>
                                    <a href="${workingTimeObj.link}" class="${workingTimeObj.textClass}">
                                        ${workingTimeObj.workingDays[t]}:
                                    </a>
                                    <p class="${workingTimeObj.pClass}">${workingTimeObj.workingTime[t]}</p>
                                </div>`;

    footerWorkingTimePrint += `   </div>
                        </div>`;

    //#endregion
    //#region FOOTER QUICK LINKS
    var quickLinksObj = {
        blockClass: "col-lg-2 col-md-5 mb-5 mb-lg-0",

        innerCLass: "footer-widget",

        h4Class: h4Class,

        ulClass: "list-unstyled footer-menu lh-40 mb-0",

        links: [about, trainer, membership, course, contact, author],

        iconClass: "ti-angle-double-right mr-2",

        linkText: ["About Us", "Trainer", "Membership", "Courses", "Contact Us", "Author"]
    };

    var quickLinksPrint = "";

    quickLinksPrint += `<div class="${quickLinksObj.blockClass}">
                    <div class="${quickLinksObj.innerCLass}">
                        <h4 class="${quickLinksObj.h4Class}">Quick Links</h4>
                        <ul class="${quickLinksObj.ulClass}">`;
    for (let i in quickLinksObj.links) {
        quickLinksPrint += `          <li>
                                <a href="${quickLinksObj.links[i]}"><i class="${quickLinksObj.iconClass}"></i>${quickLinksObj.linkText[i]}</a>
                            </li>`;
    }
    quickLinksPrint += `      </ul>
                    </div>
                 </div>`;


    //#endregion
    //#region CONTACT INFORMATION
    var contactInformationObj = {
        blockClass: "col-lg-3 col-md-5",

        innerClass: "footer-widget",

        h4Class: h4Class,

        infoEmail: '<i class="fa-solid fa-envelope"></i> boris.jolovic.249.21&#64;ict.edu.rs',

        infoPhoneNumber: '<i class="fa-solid fa-phone"></i> 060/422-7709<br/>',

        spanClass: textWhiteClass,

        infoAddress: '<i class="fa-solid fa-location-dot"></i> Zdravka Čelara 16, Belgrade'
    };

    var contactInformationPrint = `<div class="${contactInformationObj.blockClass}">
                                <div class="${contactInformationObj.innerClass}">
                                    <h4 class="${contactInformationObj.h4Class}">Contact Information</h4>
                                    <p>
                                        ${contactInformationObj.infoEmail}<br/>
                                        ${contactInformationObj.infoPhoneNumber}<br/>
                                    </p>
                                    <span class="${contactInformationObj.spanClass}">
                                        ${contactInformationObj.infoAddress}
                                    </span>
                                </div>
                            </div>`;


    //#endregion
    //#region COPYRIGHT LINKS
    var footerLinksObj = {
        blockClass: "row align-items-center mt-5 px-3 bg-black mx-1",

        divClass: "col-lg-4",

        copyrightText: '<p class="text-white mt-3">Copyright &copy; 2024 Boris Jolović</p>',

        pcInnerBlockClass: "col-lg-6 ml-auto text-right",

        ulClass: "list-inline mb-0 footer-socials",

        liClass: "list-inline-item",

        aLinks: 
        [
            "https://www.facebook.com/visokaictskola",
            "https://www.youtube.com/@ict7724",
            "https://twitter.com/?lang=sr",
            "#",
            "#",
            "#",
            "robots.txt"
        ],

        icons: ['<i class="fa-brands fa-facebook"></i>',
            '<i class="fa-brands fa-youtube"></i>',
            '<i class="fa-brands fa-x-twitter"></i>',
            '<i class="fa-regular fa-file-pdf"></i>',
            '<i class="fa-solid fa-square-rss"></i>',
            '<i class="fa-solid fa-sitemap"></i>',
            '<i class="fa-solid fa-robot"></i>'
        ]
    };

    var footerLinkPrint = `<div class="${footerLinksObj.blockClass}">
                        <div class="${footerLinksObj.divClass}">
                            ${footerLinksObj.copyrightText}
                        </div>
                        <div class="${footerLinksObj.pcInnerBlockClass}">
                            <ul class="${footerLinksObj.ulClass}">`;
    for (let f in footerLinksObj.aLinks) {
        footerLinkPrint += `              <li class="${footerLinksObj.liClass}">
                                    <a href="${footerLinksObj.aLinks[f]}">
                                        ${footerLinksObj.icons[f]}
                                    </a>
                                </li>`;
    }
    footerLinkPrint += `          </ul>
                        </div>
                    </div>`;

    //#endregion
    //#region copy all footer blocks
    var allFooterBlocks = `<div class="container" id="containerFooter">
                        <div class="row" id="${footerBlocks}">
                            ${footerTextPrint}
                            ${footerWorkingTimePrint}
                            ${quickLinksPrint}
                            ${contactInformationPrint}
                        </div>
                
                        <hr class="hr">
                        
                        ${footerLinkPrint}
                    </div>`;
    var footer = document.querySelector('footer').innerHTML = allFooterBlocks;
    //#endregion
}
  
//#endregion

if(pathName == '/index.html'){


//#region NAVIGATION

//NAVIGATION LINKS

printNavigationBar();

//#endregion

//#region ROW-BLOCKS

var rowInnerBlock = new Array("card p-5 border-0 rounded-top border-bottom position-relative hover-style-1","card p-5 border-0 rounded-top hover-style-1","card p-5 border-0 rounded-top hover-style-1");
var rowNumbers = new Array("<span class='number'>01</span>","<span class='number'>02</span>","<span class='number'>03</span>");
var innerBlockHeader = new Array("Modern Equipment","Proffesional Trainer","Healthy Diet Plan");
var innerText = new Array("Start using the latest machines for maximum results and safety. Modern tools for every fitness level!","Train with experienced professionals dedicated to your progress. Years of expertise to guide you to success.","Customized meal plans to complement your workouts. Eat smart, feel great!");

var moreDetailsLink =`<a href="about.html" class="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"><i class="ti-minus mr-2 "></i>More Details</a>`;

var rowInnerHTML ="";
for(i in innerBlockHeader){
    rowInnerHTML+=
    `<div class="${rowBlocksClass}"">
        <div class="${rowInnerBlock[i]}">
            ${rowNumbers[i]}
            <h3 class="mt-3">${innerBlockHeader[i]}</h3>
            <p class="mt-3 mb-4">${innerText[i]}</p>
            ${moreDetailsLink}
        </div>
    </div>`
}
rowH.innerHTML = rowInnerHTML;

//#endregion

//#region SECTION

var osbSection = document.querySelector("#osbSection");

var ourServicesBlock ="col-lg-4 col-md-6 col-sm-6";

var ourServicesInnerBlock ="text-center px-4 py-5 hover-style-1";

var osbIcons = new Array("icofont-gym-alt-2","icofont-cycling-alt","icofont-gym-alt-3","icofont-muscle","icofont-dumbbell","icofont-gym");

var osbInnerHeader = new Array("Weight Lifting","Cycling","Yoga Meditation","Body Building","Fitness Track","Fitness");

var osbInnerh4 ="mt-3 mb-4 text-uppercase";

var osbInnerText = new Array(
    "Build strength and improve muscle tone with effective weightlifting routines. Achieve your fitness goals with guided techniques and proper form.",

    "Boost your endurance and burn calories with high-energy cycling sessions. Enjoy a fun and effective way to improve cardiovascular health.",

    "Enhance flexibility and inner peace through guided yoga and meditation practices. Find balance and relieve stress in a calming environment.",

    "Sculpt your physique and build muscle with tailored bodybuilding programs. Achieve strength and definition with expert guidance and discipline.",
    
    "Monitor your progress and stay motivated with advanced fitness tracking tools. Set goals, track achievements, and celebrate your success.",
    
    "Improve your overall health with dynamic fitness programs designed for all levels. Stay active, energized, and committed to a healthier lifestyle."
);

// var sectionPrint ="";
// for(s in osbInnerHeader){
//     sectionPrint+=`<div class="${ourServicesBlock}">
//                     <div class="${ourServicesInnerBlock}">
//                         <i class="${osbIcons[s]} text-lg text-color"></i>
//                         <h4 class="${osbInnerh4}">${osbInnerHeader[s]}</h4>
//                         <p>${osbInnerText[s]}</p>
//                     </div>
//                    </div>`
// }
// osbSection.innerHTML = sectionPrint;


osbIcons.forEach((icon, index) => {
    
    let outerDiv = createElementWithClass("div", "col-lg-4 col-md-6 col-sm-6");

    let innerDiv = createElementWithClass("div", "text-center px-4 py-5 hover-style-1");

    let iconElement = createElementWithClass("i", icon + " text-lg text-color");

    let header = createElementWithClass("h4", "mt-3 mb-4 text-uppercase");
    header.textContent = osbInnerHeader[index];

    let paragraph = document.createElement("p");
    paragraph.textContent = osbInnerText[index];

    appendChildToParent(innerDiv,iconElement);
    appendChildToParent(innerDiv,header);
    appendChildToParent(innerDiv,paragraph);
    appendChildToParent(outerDiv,innerDiv);
    appendChildToParent(osbSection,outerDiv);
});

//#endregion

//#region GALLERY

var ImgFluidClass = printGallery();

//#endregion

//#region WHAT PEOPLE SAY

var containers = [
    {
        blockClass : "text-center mb-4",

        icon : "ti-quote-left text-lg text-color",

        h3Class : "mt-4 text-white letter-spacing",

        headerH3 : "A great Start To a Healthy Life",

        textClass : "my-4 text-white-50",

        text : "Joining this gym was the best decision I've made for my health. The supportive trainers and top-notch equipment keep me motivated every day.",

        headerH4Class : "mb-0 text-capitalize text-white font-weight-normal",

        headerH4 : "– Emily Carter",

        spanClass : "text-white-50",

        Job : "Marketing Specialist"
    },
    {
        blockClass : "text-center mb-4",

        icon : "ti-quote-left text-lg text-color",

        h3Class : "mt-4 text-white letter-spacing",

        headerH3 : "The workout worth attending!",

        textClass : "my-4 text-white-50",

        text : "Every session here is a game-changer! The energy, variety of exercises, and expert guidance make every visit truly worthwhile.",

        headerH4Class : "mb-0 text-capitalize text-white font-weight-normal",

        headerH4 : "– Michael Johnson",

        spanClass : "text-white-50",

        Job : "Software Developer" 
    },
    {
        blockClass : "text-center mb-4",

        icon : "ti-quote-left text-lg text-color",

        h3Class : "mt-4 text-white letter-spacing",

        headerH3 : "Very Professional Club and coaches",

        textClass : "my-4 text-white-50",

        text : "The coaches are incredibly knowledgeable and always ready to help. The club's professionalism and positive vibe keep me coming back!",

        headerH4Class : "mb-0 text-capitalize text-white font-weight-normal",

        headerH4 : "– Sarah Wilson",

        spanClass : "text-white-50",

        Job : "Yoga Instructor" 
    },
    {
        blockClass : "text-center mb-4",

        icon : "ti-quote-left text-lg text-color",

        h3Class : "mt-4 text-white letter-spacing",

        headerH3 : "Shape your body and health!",

        textClass : "my-4 text-white-50",

        text:"This gym helped me transform not just my body but my entire lifestyle. The results speak for themselves!",

        headerH4Class : "mb-0 text-capitalize text-white font-weight-normal",

        headerH4:"– David Miller",
        
        spanClass : "text-white-50",

        Job:"Architect" 
    }
];

var containerPrint = "";
containers.forEach(containerObj => {
    containerPrint += `<div class="${containerObj.blockClass}">
                          <i class="${containerObj.icon}"></i>
                          <h3 class="${containerObj.h3Class}">${containerObj.headerH3}</h3>
                          <p class="${containerObj.textClass}"><i>"${containerObj.text}"</i></p>
                          <div>
                              <h4 class="${containerObj.headerH4Class}">${containerObj.headerH4}</h4>
                              <span class="${containerObj.spanClass}">${containerObj.Job}</span>
                          </div>
                       </div>`;
});
container.innerHTML = containerPrint;

//#endregion

//#region POPULAR COURSES

var pcBlockClass = "col-lg-3 col-md-6";

var pcInnerBlockClass = "card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm";

var pcImgLinks = new Array("images/gallery/course-1.jpg","images/gallery/course-2.jpg","images/gallery/course-3.jpg","images/gallery/course-4.jpg","images/gallery/course-5.jpg","images/gallery/course-6.jpg",);

var pcLinkClass = "card-body";

var pcLink = "course.html";

var pcH4Class = "font-secondary mb-0";

var pcH4Text = new Array("Functional Fitness Training","Strength and Conditioning","Core Strengthening","Cardio and Endurance","Yoga and Flexibility","Dumbbell Strength Workout");

var pcPClass = "mb-2";

var pcTextJob = new Array("Mentor","Trainer","Instructor","Coach","Manager","Specialist");

var pcPText = new Array("John Carter","Emily Dawson","Michael Reeves","Sarah Blake","David Hamilton","Laura Mitchell");


var pcPrint ="";

for(let i = 0; i < 4; i++){
    pcPrint+=`<div class="${pcBlockClass}">
                    <div class="${pcInnerBlockClass}">
                        <img src="${pcImgLinks[i]}" alt="fitness-course-${i}"
                        class="${ImgFluidClass}">
                
                        <div class="${pcLinkClass}">
                            <a href="${pcLink}">
                                <h4 class="${pcH4Class}">${pcH4Text[i]}</h4>
                            </a>

                            <p class="${pcPClass}">${pcTextJob[i]}:<br/> ${pcPText[i]}</p>
                        </div>
                    </div>
              </div>`
}

popularCourses.innerHTML = pcPrint;

//#endregion

//#region FOOTER

//#region FOOTER-TEXT

printWholeFooter();

//#endregion



//#endregion


}

if(pathName == '/about.html'){

//#region SECTION NAVIGATION FOR OTHER PAGES
printNavigationBar();

printSectionNavigationForOtherPages();

//#endregion

//#region WHY CHOOSE US

let whyChooseUSObj = {

    divCLass : "col-lg-4 col-md-6",

    cardClass : 
    [
        "card p-4 text-center mb-4 border-0 bg-black-50 rounded-0 ",
        "card p-4 text-center border-0 mb-4 rounded-0",
        "card p-4 text-center border-0 mb-4 rounded-0 bg-black-50",
        "card p-4 text-center border-0 rounded-0 ",
        "card p-4 text-center border-0 rounded-0 bg-black-50",
        "card p-4 text-center border-0 rounded-0"
    ],

    iconClass : 
    [
        "icofont-dumbbells text-lg text-color",
        "icofont-muscle text-lg text-color",
        "icofont-fruits text-lg text-color",
        "icofont-thumbs-up text-lg text-color",
        "icofont-ui-fire-wall text-lg text-color",
        "icofont-bill-alt text-lg text-color"
    ],

    h3Class : 
    [
        "mt-3 text-white",
        "mt-3",
        "mt-3 text-white",
        "mt-3",
        "mt-3 text-white",
        "mt-3"
    ],

    h3Text : 
    [
        "Modern Equipment",
        "Proffesional Trainer",
        "Healthy Diet Plan",
        "24/7 Helping People",
        "Unique to Your Needs",
        "Online payment"
    ],

    pClass : 
    [
        "mt-3 mb-4 text-white",
        "mt-3 mb-4",
        "mt-3 mb-4 text-white",
        "mt-3 mb-4",
        "mt-3 mb-4 text-white",
        "mt-3 mb-4"
    ],

    pText : 
    [
        "Experience the latest state-of-the-art machines for effective and safe workouts.",
        "Get expert guidance from certified trainers dedicated to helping you achieve your fitness goals.",
        "Enjoy personalized meal plans designed to complement your training and boost your health.",
        "We're here for you around the clock to support your fitness journey anytime.",
        "Tailored programs designed to match your individual fitness aspirations and lifestyle.",
        "Convenient and secure payment options to make your fitness experience hassle-free."
    ]

};


whyChooseUSObj.cardClass.forEach((cardClass, index) => {
    
    let cardDiv = createElementWithClass("div", whyChooseUSObj.divCLass);

    let innerCardDiv = createElementWithClass("div", cardClass);

    let iconElement = createElementWithClass("i", whyChooseUSObj.iconClass[index]);
    appendChildToParent(innerCardDiv, iconElement);

    let h3Element = createElementWithClass("h3", whyChooseUSObj.h3Class[index]);
    h3Element.textContent = whyChooseUSObj.h3Text[index];
    appendChildToParent(innerCardDiv, h3Element);

    let pElement = createElementWithClass("p", whyChooseUSObj.pClass[index]);
    pElement.textContent = whyChooseUSObj.pText[index];
    appendChildToParent(innerCardDiv, pElement);

    appendChildToParent(cardDiv, innerCardDiv);

    appendChildToParent(whyChooseUsID, cardDiv);
});


//#endregion

//#region GALLERY

printGallery();

//#endregion

//#region FOOTER

printWholeFooter();

//#endregion

};

if(pathName == '/trainer.html'){

//#region NAVIGATION

printNavigationBar();
printSectionNavigationForOtherPages();

//#endregion
 
//#region OUR TRAINER

let ourTrainerObj = {

    outerDivClass : colMd6Class,

    divClass : "card border-0 mb-1  bg-transparent rounded-0 mb-4",

    InnerDivClass : "row no-gutters align-items-center",

    imgDiv : colMd6Class,

    imgSrc : 
    [
        "images/team/team-1.jpg",
        "images/team/team-2.jpg",
        "images/team/team-3.jpg",
        "images/team/team-4.jpg"
    ],

    imgAlt : "team-trainer",

    imgClass : "img-fluid w-100",
    
    // col-md-6

    divInnerCardClass : divInnerCardClass,

    h3Class : h3Class,

    h3Text : ["John Carter","David Hamilton","Thomas Vel", "Michael Reeves"],

    h6Class : h6Class,

    h6Text : ["Weight Lifting","Body Building","Fitness","Cycling"],

    pClass : "mb-5",

    pText : 
    [
        `<b><i>"I’m dedicated to helping others build strength and lead healthier lives."</i></b><br/> John's sessions focus on improving muscle and bone health.`,

        `<b><i>"Helping people achieve their dream physique is my passion."</i></b><br/> David’s training boosts confidence and overall fitness.`,

        `<b><i>"I love inspiring others to stay active and healthy."</i></b><br/> Thomas focuses on endurance and full-body conditioning.`,

        `<b><i>"Fitness should be fun and stress-relieving."</i></b><br/> Michael’s cycling classes improve heart health and stamina.`
    ],

    ulClass : "list-inline ",

    iClass : iClassInline,

    aHref : 
    [
        "https://www.facebook.com/visokaictskola",
        "https://twitter.com/?lang=sr",
        "https://rs.linkedin.com"
    ],

    icons :
     [
        "fa-brands fa-facebook",
        "fa-brands fa-x-twitter",
        "fa-brands fa-linkedin"
    ]

};

let ourTrainerPrint ="";

for(let i in ourTrainerObj.imgSrc){
ourTrainerPrint +=`<div class="${ourTrainerObj.outerDivClass}">
                    <div class="${ourTrainerObj.divClass}">
                        <div class="${ourTrainerObj.InnerDivClass}">
                            <div class="${ourTrainerObj.imgDiv}">
                                <img src="${ourTrainerObj.imgSrc[i]}"
                                    alt="${ourTrainerObj.imgAlt}${i}" 
                                    class="${ourTrainerObj.imgClass}">   
                                </div>
                                <div class="${ourTrainerObj.imgDiv}">
                                <div class="${ourTrainerObj.divInnerCardClass}">
                                    <h3 class="${ourTrainerObj.h3Class}">${ourTrainerObj.h3Text[i]}</h3>
                                    <h6 class="${ourTrainerObj.h6Class}">${ourTrainerObj.h6Text[i]}</h6>
                                    <p class="${ourTrainerObj.pClass}">${ourTrainerObj.pText[i]}</p>
                                    <ul class="${ourTrainerObj.ulClass}">
                                        ${ourTrainerObj.aHref.map((href, index) => 
                                            `<li class="${ourTrainerObj.iClass}">
                                                <a href="${href}">
                                                    <i class="${ourTrainerObj.icons[index]}"></i>
                                                </a>
                                            </li>`
                                        ).join("")}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
};

ourTrainerId.innerHTML = ourTrainerPrint;

//#endregion

//#region FOOTER

printWholeFooter();

//#endregion

}

if(pathName == '/course.html'){

//#region NAVIGATON

printNavigationBar();
printSectionNavigationForOtherPages();




//#endregion

//#region ALL POPULAR COURSES

let allPopularCoursesObj = {

    id : allCoursesID,

    outerDiv : rowBlocksClass,

    divCard : divCardRounded,

    imgSrc : 
    [
        "images/gallery/course-1.jpg",
        "images/gallery/course-2.jpg",
        "images/gallery/course-3.jpg",
        "images/gallery/course-4.jpg",
        "images/gallery/course-5.jpg",
        "images/gallery/course-6.jpg"
    ],

    alt : "trainingCourse",

    imgClass : "img-fluid",

    divInnerCard : "card-body",

    aHref : contact,

    h4Class : "mt-3 mb-0",

    h4Text : 
    [
        "Functional Fitness Training",

        "Strength and Conditioning",

        "Core Strengthening",
        
        "Cardio and Endurance",
        
        "Yoga",

        "Body Building"
    ],

    pClass : " mb-2",

    job : ["Mentor","Trainer","Instructor","Coach","Nutritionist","Physiotherapist"],

    name :["John Carter","Emily Dawson","Michael Reeves","Sarah Blake","David Hamilton","Thomas Vel"],

    ulClass : "list-inline",

    ulLiClass : "list-inline-item",

    iClass : "ti-time mr-2 text-color",

    iTextDays :
    [
        "Monday-Tuesday",
        "Wednesday-Thursday:",
        "Friday-Saturday",
        "Monday-Tuesday",
        "Wednesday-Thursday",
        "Friday-Saturday"
    ],

    liClassHours : "list-inline-item text-black",

    hours : ["7am-12pm ","6am-11am ","8am-1pm ","3pm-8pm","2pm-7pm ","4pm-9pm "]
    
};

let allCoursesPrint ="";

for(let c in allPopularCoursesObj.h4Text){

allCoursesPrint+=`<div class="${allPopularCoursesObj.outerDiv}">
                    <div class="${allPopularCoursesObj.divCard}">
                        <img src="${allPopularCoursesObj.imgSrc[c]}" alt="${allPopularCoursesObj.alt}"
                             class="${allPopularCoursesObj.imgClass}">
                             
                             <div class="${allPopularCoursesObj.divInnerCard}">
                                <a href="${allPopularCoursesObj.aHref}">
                                    <h4 class="${allPopularCoursesObj.h4Class}">
                                        ${allPopularCoursesObj.h4Text[c]}
                                    </h4>
                                </a>
                                <p class="${allPopularCoursesObj.pClass}">
                                    ${allPopularCoursesObj.job[c]}: ${allPopularCoursesObj.name[c]}
                                </p>
                            <ul class="${allPopularCoursesObj.ulClass}">
                                <li class="${allPopularCoursesObj.ulLiClass}">
                                    <i class="${allPopularCoursesObj.iClass}"></i>
                                    ${allPopularCoursesObj.iTextDays[c]} :
                                </li>
                                <li class="${allPopularCoursesObj.liClassHours}">
                                    <strong>${allPopularCoursesObj.hours[c]}</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>`
};

allCoursesID.innerHTML = allCoursesPrint;




//#endregion

//#region FOOTER

printWholeFooter();

//#endregion

}

if(pathName == '/membership.html'){

//#region NAVIGATION

printNavigationBar();
printSectionNavigationForOtherPages();

//#endregion

//#region PACKAGE PRICING 

let packagePricingHeaderObj = {

    divClassContentCenter : RowJustifyCC,

    divClassTextCenter : "col-lg-8 text-center",

    divClassSectionTitle : "section-title",

    divClassDivider : "divider mb-3",

    h2Text : "Package Pricing"
  
};



let PPHPHeaderrint = `<div class="container" id="packagePricingContainer">`;
PPHPHeaderrint+=`<div class="${packagePricingHeaderObj.divClassContentCenter}">
                <div class="${packagePricingHeaderObj.divClassTextCenter}">
                    <div class="${packagePricingHeaderObj.divClassSectionTitle}">
                        <div class="${packagePricingHeaderObj.divClassDivider}"></div>
                        <h2>${packagePricingHeaderObj.h2Text}</h2>
                    </div>
                </div>
            </div>`




let PPBlocksObj = {

    divClass : "col-lg-4 col-md-6 mb-4 mb-lg-0",

    divInnerClass : "card rounded-0 px-4 py-5 ",

    h4Class : "card-title text-capitalize font-weight-normal font-secondary",

    h4Text : 
    [
        "Standard Pack",
        `<span class="text-sm bg-dark text-light py-1 px-2 mr-2">Popular</span>"Pro Pack"`,
        "Gold Pack"
    ],

    h3Class : "text-lg font-secondary position-relative mt-2",

    supClass : "text-sm position-absolute",

    priceText : ["12","29","39"],

    subText : "per month",
    
    divClassCardBody : "card-body mt-2",

    ulClass : "list-unstyled lh-35 mb-4",

    liTags : 
    [
        [
            `<li class="text-black font-weight-bold"><i class="ti-check mr-3 text-color "></i>Training overview</li>
            <li class="text-black font-weight-bold"><i class="ti-check mr-3 text-color "></i>Foundation Training</li>
            <li><i class="ti-close mr-3"></i>Begineers Classes</li>
            <li><i class="ti-close mr-3"></i>Olympic weighlifting</li>
            <li><i class="ti-close mr-3"></i>Personal Training</li>`
        ],
        [
            `<li class="text-black font-weight-bold"><i class="ti-check mr-3 text-color "></i>Training overview</li>
            <li class="text-black font-weight-bold"><i class="ti-check mr-3 text-color "></i>Foundation Training</li>
            <li class="text-black font-weight-bold"><i class="ti-check mr-3 text-color "></i>Begineers Classes</li>
            <li><i class="ti-close mr-3"></i>Olympic weighlifting</li>
            <li><i class="ti-close mr-3"></i>Personal Training</li>`
        ],
        [
            `<li class="text-black font-weight-bold"><i class="ti-check mr-3 text-color "></i>Training overview</li>
            <li class="text-black font-weight-bold"><i class="ti-check mr-3 text-color "></i>Foundation Training</li>
            <li class="text-black font-weight-bold"><i class="ti-check mr-3 text-color "></i>Begineers Classes</li>
            <li class="text-black font-weight-bold"><i class="ti-check mr-3 text-color "></i>Olympic weighlifting</li>
            <li class="text-black font-weight-bold"><i class="ti-check mr-3 text-color "></i>Personal Training</li>`
        ]
    ],

    aHref : contact,

    aClass : ["btn btn-solid-border text-black","btn btn-main","btn btn-solid-border text-black"],

    aText : "Buy Now"
  
};  
            

let PPBlocks =`<div class="row justify-content-center" id="packagePricing">`;

for(let b in PPBlocksObj.h4Text){

PPBlocks+=`<div class="${PPBlocksObj.divClass}">
              <div class="${PPBlocksObj.divInnerClass}">
                  <h4 class="${PPBlocksObj.h4Class}">${PPBlocksObj.h4Text[b]}</h4>
                  <h3 class="${PPBlocksObj.h3Class}">
                    <sup class="${PPBlocksObj.supClass}">$</sup>${PPBlocksObj.priceText[b]}
                        <sub>${PPBlocksObj.subText}</sub>
                  </h3>
                  
                  <div class="${PPBlocksObj.divClassCardBody}">
                        <ul class="${PPBlocksObj.ulClass}">
                            ${PPBlocksObj.liTags[b]}
                        </ul>
                        <a href="${PPBlocksObj.aHref}" class="${PPBlocksObj.aClass[b]}">
                            ${PPBlocksObj.aText}
                        </a>
                  </div>
             </div>
         </div>`
};


packagePricingHeader. innerHTML += PPHPHeaderrint + PPBlocks;



//#endregion

//#region PACKAGE PRICING SALE

PPHColor = `<div class="container" id="packagePricingHeaderColor">`;
PPHColor+=`<div class="${packagePricingHeaderObj.divClassContentCenter}">
                <div class="${packagePricingHeaderObj.divClassTextCenter}">
                    <div class="${packagePricingHeaderObj.divClassSectionTitle}">
                        <div class="${packagePricingHeaderObj.divClassDivider}"></div>
                        <h2>Discount Action For New Members</h2>
                    </div>
                </div>
            </div>`


PPHColor +=`<div class="row justify-content-center" id="PPBlocks">`;   


let PPBlocksColorObj = {

    divClass: "col-lg-4 col-md-6 mb-4 mb-lg-0",

    divInnerClass: "card rounded-0 px-4 py-5 bg-4",
    
    divClassPositon : "position-relative",

    h4Class: 
    [
        "card-title text-white text-capitalize font-weight-normal font-secondary",
        "card-title text-capitalize font-weight-normal font-secondary text-white",
        "card-title text-capitalize font-weight-normal font-secondary text-white"
    ],

    h4Text: [
        "Standard Pack",
        `<span class="text-sm bg-primary text-white py-1 px-2 mr-2">Popular</span>`,
        "Gold Pack"
    ],
    h3Class: 
    [
        "text-lg text-white font-secondary position-relative  mt-2",
        "text-lg font-secondary position-relative mt-2 text-white",
        "text-lg text-white font-secondary position-relative mt-2"
    ],

    supClass: "text-sm position-absolute",

    priceText: ["12", "29", "39"],

    subText: "per month",

    divClassCardBody: "card-body mt-2",

    ulClass: "list-unstyled lh-35 mb-4",

    liTags: [
        [
            `<li class="text-white"><i class="ti-check mr-3 text-color "></i>Training overview</li>
            <li class="text-white"><i class="ti-check mr-3 text-color "></i>Foundation Training</li>
            <li class="text-white-50"><i class="ti-close mr-3"></i>Begineers Classes</li>
            <li class="text-white-50"><i class="ti-close mr-3"></i>Olympic weighlifting</li>
            <li class="text-white-50"><i class="ti-close mr-3"></i>Personal Training</li>`
        ],
        [
            `<li class="text-white"><i class="ti-check mr-3 text-color "></i>Training overview</li>
            <li class="text-white"><i class="ti-check mr-3 text-color "></i>Foundation Training</li>
            <li class="text-white"><i class="ti-check mr-3 text-color "></i>Begineers Classes</li>
            <li class="text-white-50"><i class="ti-close mr-3"></i>Olympic weighlifting</li>
            <li class="text-white-50"><i class="ti-close mr-3"></i>Personal Training</li>`
        ],
        [
            `<li class="text-white"><i class="ti-check mr-3 text-color "></i>Training overview</li>
            <li class="text-white"><i class="ti-check mr-3 text-color "></i>Foundation Training</li>
            <li class="text-white"><i class="ti-check mr-3 text-color "></i>Begineers Classes</li>
            <li class="text-white"><i class="ti-check mr-3 text-color "></i>Olympic weighlifting</li>
            <li class="text-white"><i class="ti-check mr-3 text-color "></i>Personal Training</li>`
        ]
    ],
    aHref: "contact.html",

    aClass: ["btn btn-solid-border text-white", "btn btn-main", "btn btn-solid-border text-white"],

    aText: "Buy Now"

};
            
for(let b in PPBlocksColorObj.h4Text){

PPHColor+=`<div class="${PPBlocksColorObj.divClass}">
                <div class="${PPBlocksColorObj.divInnerClass}">
                    <div class="${PPBlocksColorObj.divClassPositon}">
                    <h4 class="${PPBlocksColorObj.h4Class[b]}">${PPBlocksColorObj.h4Text[b]}</h4>
                    <h3 class="${PPBlocksColorObj.h3Class[b]}">
                    <sup class="${PPBlocksColorObj.supClass}">$</sup>${PPBlocksColorObj.priceText[b]}
                        <sub>${PPBlocksColorObj.subText}</sub>
                    </h3>
                    
                    <div class="${PPBlocksColorObj.divClassCardBody}">
                        <ul class="${PPBlocksColorObj.ulClass}">
                            ${PPBlocksColorObj.liTags[b]}
                        </ul>
                        <a href="${PPBlocksColorObj.aHref}" class="${PPBlocksColorObj.aClass[b]}">
                            ${PPBlocksColorObj.aText}
                        </a>
                    </div>
                </div>
            </div>
        </div>`
};
PPHColor+=
    `</div>
</div>`;

newMemberDiscountId.innerHTML = PPHColor;

//#endregion

//#region FOOTER

printWholeFooter();

//#endregion

}

if(pathName == '/contact.html'){

//#region NAVIGATION

printNavigationBar();
printSectionNavigationForOtherPages();

//#endregion

//#region FORM

// DDL Data
let country = new Array("Select Country","California","Florida","Texas");
let city = new Array
(
    ["Los Angeles", "San Francisco", "San Diego"],
    ["Miami","Orlando","Tampa"],
    ["Houston","Dallas","Austin"]
);


let ddlState = "";
for(let i in country){
    ddlState+=`<option value="${i}">${country[i]}</option>`
}
formDDLState.innerHTML = ddlState;

//



window.onload = function(){

    formDDLCity.setAttribute("disabled","disabled");
    formSubmit.setAttribute("disabled","disabled");
    

};

let nameRegEx = /^[A-Z][a-z]{3,14}$/;

formName.addEventListener("blur",function(){

    let nameValue = formName.value;
    if(!nameValue.match(nameRegEx)){
        
        formName.nextElementSibling.innerHTML = "Name must have between 3 and 15 letters";

       
    }

});















//#endregion


//#region FOOTER
    printWholeFooter();
//#endregion

}

