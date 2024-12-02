
//#region conts 

const index = "index.html";
const about = "about.html";
const trainer = "trainer.html";
const course = "course.html";
const membership = "membership.html";
const contact = "contact.html";
const author = "author.html";
const navUL = document.querySelector(".navbar-nav");
const navigationId = document.querySelector("nav");
const h2Class = "text-white text-capitalize";
const rowH = document.querySelector("#rowH");
const rowBlocksClass = "col-lg-4 col-md-6";
const gallery = document.querySelector("#gallery");
const container = document.querySelector("#containerBlocks");
const popularCourses = document.querySelector("#Popular-Courses");
const footerClass = "footer bg-black-50";
const footerBlocks = document.querySelector("#footer-blocks");
const footerBlockClass = "col-lg-4 col-md-6 mb-5 mb-lg-0";
const textWhiteClass = "text-white";
const pFooterClass = "text-sm mt-2 text-white-50";
const h4Class = "mb-4 text-white letter-spacing text-uppercase";
const containerForFooterBlocks = document.querySelector("#containerFooter");

//#endregion

let pathNameArray = window.location.pathname.split('/')
let pathName = '/'+pathNameArray[pathNameArray.length-1]
if(pathName == '/index.html'){

    //#region index.html

//#region NAVIGATION

//NAVIGATION LINKS

let navigationLinks = {
    Home : `<li class="nav-item active">
				<a class="nav-link" href="index.html">Home<span class="sr-only">(current)<span>
                </a>
		    </li>`,
    Services : `<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="index.html" data-toggle="dropdown"                 aria-haspopup="true"
					aria-expanded="false">Services
                </a>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="about.html">About</a></li>
					<li><a class="dropdown-item" href="trainer.html">Trainer</a></li>
					<li><a class="dropdown-item" href="course.html">Courses</a></li>
				</ul>
			</li>`,
    Membership : `<li class="nav-item"><a class="nav-link" href="membership.html">Membership</a></li>`,
    Contact : `<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>`,
    Author : `<li class="nav-item"><a class="nav-link" href="author.html">Author</a></li>`
};
let navPrint = "";
for (let link in navigationLinks) {
    navPrint += navigationLinks[link];
}

function printNavigationLinks(){
    return navPrint;
}

// NAVIGATION BAR

let navigationObj = {

    divClass : "container-fluid",

    aClass : "navbar-brand",

    href : index,

    h2Class : h2Class,

    h2Content : '</i>Gym<span class="text-color">Fit</span>',

    buttonClass : `navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsid"
			        aria-controls="navbarsid" aria-expanded="false" aria-label="Toggle navigation`,
    
    spanClass : "ti-view-list",

    innerDivClass : "collapse text-center navbar-collapse",

    innerDivId : "navbarsid",

    ulClass : "navbar-nav mx-auto"

};

let navigation =`<div class="${navigationObj.divClass}">
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

navigationId.innerHTML = printNavigation();

function printNavigation(){
    return navigation;
}



//#endregion

//#region ROW-BLOCKS


let rowInnerBlock = new Array("card p-5 border-0 rounded-top border-bottom position-relative hover-style-1","card p-5 border-0 rounded-top hover-style-1","card p-5 border-0 rounded-top hover-style-1");
let rowNumbers = new Array("<span class='number'>01</span>","<span class='number'>02</span>","<span class='number'>03</span>");
let innerBlockHeader = new Array("Modern Equipment","Proffesional Trainer","Healthy Diet Plan");
let innerText = new Array("Start using the latest machines for maximum results and safety. Modern tools for every fitness level!","Train with experienced professionals dedicated to your progress. Years of expertise to guide you to success.","Customized meal plans to complement your workouts. Eat smart, feel great!");

let moreDetailsLink =`<a href="about.html" class="text-color text-uppercase font-size-13 letter-spacing font-weight-bold"><i class="ti-minus mr-2 "></i>More Details</a>`;

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
//#region bez createElement
let osbSection = document.querySelector("#osbSection");

let ourServicesBlock ="col-lg-4 col-md-6 col-sm-6";

let ourServicesInnerBlock ="text-center px-4 py-5 hover-style-1";

let osbIcons = new Array("icofont-gym-alt-2","icofont-cycling-alt","icofont-gym-alt-3","icofont-muscle","icofont-dumbbell","icofont-gym");

let osbInnerHeader = new Array("Weight Lifting","Cycling","Yoga Meditation","Body Building","Fitness Track","Fitness");

let osbInnerh4 ="mt-3 mb-4 text-uppercase";

let osbInnerText = new Array(
    "Build strength and improve muscle tone with effective weightlifting routines. Achieve your fitness goals with guided techniques and proper form.",

    "Boost your endurance and burn calories with high-energy cycling sessions. Enjoy a fun and effective way to improve cardiovascular health.",

    "Enhance flexibility and inner peace through guided yoga and meditation practices. Find balance and relieve stress in a calming environment.",

    "Sculpt your physique and build muscle with tailored bodybuilding programs. Achieve strength and definition with expert guidance and discipline.",
    
    "Monitor your progress and stay motivated with advanced fitness tracking tools. Set goals, track achievements, and celebrate your success.",
    
    "Improve your overall health with dynamic fitness programs designed for all levels. Stay active, energized, and committed to a healthier lifestyle."
);

// let sectionPrint ="";
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
//#endregion

function createElementWithClass(tag, className) {
    let element = document.createElement(tag);
    element.className = className;
    return element;
}

function appendChildToParent(parent, child) {
    parent.appendChild(child);
}

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



let galleryClass ="col-lg-3 col-md-6 col-sm-6";

let galleryImgClass ="popup-gallery";

var ImgFluidClass ="img-fluid";

let galleryImgLink = new Array("images/gallery/gallery-01.jpg","images/gallery/gallery-02.jpg","images/gallery/gallery-03.jpg","images/gallery/gallery-04.jpg","images/gallery/gallery-05.jpg","images/gallery/gallery-06.jpg","images/gallery/gallery-07.jpg","images/gallery/gallery-08.jpg");

let galleryPrint ="";

for(img in galleryImgLink){
    galleryPrint+=`<div class="${galleryClass}">
                    <a href="${galleryImgLink[img]}" class="${galleryImgClass}">
                        <img src="${galleryImgLink[img]}" alt="gym-workout${img}" class="${ImgFluidClass}">
                    </a>
                  </div>`
};
gallery.innerHTML = galleryPrint;





//#endregion

//#region CONTAINER



let containers = [
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

let containerPrint = "";
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



let pcBlockClass = "col-lg-3 col-md-6";

let pcInnerBlockClass = "card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm";

let pcImgLinks = new Array("images/gallery/course-1.jpg","images/gallery/course-2.jpg","images/gallery/course-3.jpg","images/gallery/course-4.jpg","images/gallery/course-5.jpg","images/gallery/course-6.jpg",);

let pcLinkClass = "card-body";

let pcLink = "course.html";

let pcH4Class = "font-secondary mb-0";

let pcH4Text = new Array("Functional Fitness Training","Strength and Conditioning","Core Strengthening","Cardio and Endurance","Yoga and Flexibility","Dumbbell Strength Workout");

let pcPClass = "mb-2";

let pcTextJob = new Array("Mentor","Trainer","Instructor","Coach","Manager","Specialist");

let pcPText = new Array("John Carter","Emily Dawson","Michael Reeves","Sarah Blake","David Hamilton","Laura Mitchell");


let pcPrint ="";

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

let footerTextObj = {

    class : footerBlockClass,

    h2Class : h2Class,

    spanClass : "text-color",

    text1 : "To maintain the quality of our services, we encourage all members to adhere to gym guidelines and attend scheduled appointments on time. Your cooperation ensures a great experience for everyone.",

    text2 : "Please respect gym rules and arrive on time for your sessions. Together, we create a better fitness environment.",

};

let footerTextPrint ="";

footerTextPrint+=`<div class="${footerTextObj.class}">
                    <h2 class="${footerTextObj.h2Class}">
                        Gym<span class="${footerTextObj.spanClass}">Fit</span>
                    </h2>
                    <p>${footerTextObj.text1}</p>
                    <p>${footerTextObj.text2}</p>
                  </div>`;

//#endregion

//#region FOOTER WORKING TIME

let workingTimeObj = {

    blockClass : "col-lg-3 col-md-6 mb-5 mb-lg-0",

    innerClass : "footer-widget recent-blog",

    h4Class : h4Class,

    link : contact,

    textClass : textWhiteClass,
    
    workingDays : ["Monday&minus;Friday","Saturday","Sundays"],

    pClass : pFooterClass,

    workingTime : ["From 7 AM to 11 PM","From 10 AM to 8 PM","Closed"]

};


let footerWorkingTimePrint ="";

footerWorkingTimePrint+=`<div class="${workingTimeObj.blockClass}.w-auto">
                            <div class="${workingTimeObj.innerClass}">
                                <h4 class="${workingTimeObj.h4Class}">Working Time</h4>`
for(let t in workingTimeObj.workingDays)
footerWorkingTimePrint+=        `<div>
                                    <a href="${workingTimeObj.link}" class="${workingTimeObj.textClass}">
                                        ${workingTimeObj.workingDays[t]}:
                                    </a>
                                    <p class="${workingTimeObj.pClass}">${workingTimeObj.workingTime[t]}</p>
                                </div>`

footerWorkingTimePrint+=`   </div>
                        </div>`

//#endregion

//#region FOOTER QUICK LINKS

let quickLinksObj = {

    blockClass : "col-lg-2 col-md-5 mb-5 mb-lg-0",

    innerCLass : "footer-widget",

    h4Class : h4Class,

    ulClass : "list-unstyled footer-menu lh-40 mb-0",

    links : [about,trainer,membership,course,contact,author],

    iconClass : "ti-angle-double-right mr-2",

    linkText : ["About Us","Trainer","Membership","Courses","Contact Us","Author"]

};

let quickLinksPrint = "";

quickLinksPrint+=`<div class="${quickLinksObj.blockClass}">
                    <div class="${quickLinksObj.innerCLass}">
                        <h4 class="${quickLinksObj.h4Class}">Quick Links</h4>
                        <ul class="${quickLinksObj.ulClass}">`;
for(let i in quickLinksObj.links){
quickLinksPrint+=`          <li>
                                <a href="${quickLinksObj.links[i]}"><i class="${quickLinksObj.iconClass}"></i>${quickLinksObj.linkText[i]}</a>
                            </li>`;
}
quickLinksPrint+=`      </ul>
                    </div>
                 </div>`;


//#endregion

//#region CONTACT INFORMATION

let contactInformationObj = {

    blockClass : "col-lg-3 col-md-5",

    innerClass : "footer-widget",

    h4Class : h4Class,

    infoEmail : '<i class="fa-solid fa-envelope"></i> boris.jolovic.249.21&#64;ict.edu.rs',

    infoPhoneNumber : '<i class="fa-solid fa-phone"></i> 060/422-7709<br/>',

    spanClass : textWhiteClass,

    infoAddress : '<i class="fa-solid fa-location-dot"></i> Zdravka Čelara 16, Belgrade'

};

let contactInformationPrint=`<div class="${contactInformationObj.blockClass}">
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

let footerLinksObj = {

    blockClass : "row align-items-center mt-5 px-3 bg-black mx-1",

    divClass : "col-lg-4",

    copyrightText : '<p class="text-white mt-3">Copyright &copy; 2024 Boris Jolović</p>',

    pcInnerBlockClass : "col-lg-6 ml-auto text-right",

    ulClass : "list-inline mb-0 footer-socials",

    liClass : "list-inline-item",

    aLinks :[ "https://www.facebook.com/visokaictskola",
              "https://www.youtube.com/@ict7724",
              "https://twitter.com/?lang=sr",
              "#",
              "#",
              "#",
              "robots.txt"
            ],

    icons : ['<i class="fa-brands fa-facebook"></i>',
             '<i class="fa-brands fa-youtube"></i>',
             '<i class="fa-brands fa-x-twitter"></i>',
             '<i class="fa-regular fa-file-pdf"></i>',
             '<i class="fa-solid fa-square-rss"></i>',
             '<i class="fa-solid fa-sitemap"></i>',
             '<i class="fa-solid fa-robot"></i>'
            ]

};

let footerLinkPrint =`<div class="${footerLinksObj.blockClass}">
                        <div class="${footerLinksObj.divClass}">
                            ${footerLinksObj.copyrightText}
                        </div>
                        <div class="${footerLinksObj.pcInnerBlockClass}">
                            <ul class="${footerLinksObj.ulClass}">`;
for(let f in footerLinksObj.aLinks){
footerLinkPrint+=`              <li class="${footerLinksObj.liClass}">
                                    <a href="${footerLinksObj.aLinks[f]}">
                                        ${footerLinksObj.icons[f]}
                                    </a>
                                </li>`;
}
footerLinkPrint+=`          </ul>
                        </div>
                    </div>`;

//#endregion

let allFooterBlocks=`<div class="container" id="${containerForFooterBlocks}">
                        <div class="row" id="${footerBlocks}">
                            ${footerTextPrint}
                            ${footerWorkingTimePrint}
                            ${quickLinksPrint}
                            ${contactInformationPrint}
                        </div>
                
                        <hr class="hr">
                        
                        ${footerLinkPrint}
                    </div>`
let footer = document.querySelector('footer').innerHTML = allFooterBlocks;

function printFooter(){
    return footer;
}


//#endregion

//#endregion

}

if(pathName == '/about.html'){

    //#region about.html

    navigationId.innerHTML = printNavigation();

    





    //#endregion
}



