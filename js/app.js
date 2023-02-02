// burger 
const headerBurger = document.querySelector(".header-burger");
const headerList = document.querySelector(".header-list-list");
const headerBtn = document.querySelector(".header-list-btn");

if(headerBurger){
    headerBurger.addEventListener("click", function (e){
        document.body.classList.toggle("_lock")
        headerBurger.classList.toggle("_active");
        headerList.classList.toggle("_active");
        headerBtn.classList.toggle("_active");
    })
}

// Scrolling to special sections
const headerLinks = document.querySelectorAll(".header-list-item")
if(headerLinks.length > 0){
    headerLinks.forEach(headerLink => {
        headerLink.addEventListener("click", onHeaderLinkClick);
    });

    function onHeaderLinkClick(e){
        const headerLink = e.target;
        if(headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)){
            const goToBlock = document.querySelector(headerLink.dataset.goto)
            const gotoBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

            if(headerBurger.classList.contains("_active")){
                document.body.classList.remove("_lock")
                headerBurger.classList.remove("_active");
                headerList.classList.remove("_active");
                headerBtn.classList.remove("_active");
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function (e){
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scroollIntoView({
//             behavior: "smooth"
//         });
//     });
// });




// modal window
document.addEventListener('DOMContentLoaded', () => {
    const firstBtn = document.getElementById('btn-cabinet');
    const cabElement = document.querySelector('.modal-window-cab');
    const closeXBtn = document.getElementById('modal-close-cab');
    const submitBtn = document.getElementById('send-btn');

    firstBtn.onclick = function (e) {
        e.preventDefault();
        cabElement.classList.add('modal_active');
        document.body.classList.add('_hidden');
    };

    closeXBtn.onclick = function (e) {
        e.preventDefault();
        cabElement.classList.remove('modal_active');
        document.body.classList.remove('_hidden');
    }
    submitBtn.onclick = function (e) {
        e.preventDefault();
        cabElement.classList.remove('modal_active');
        document.body.classList.remove('_hidden');
    }
});

// profi tabs
const btns = document.querySelectorAll(".profi-btn-item");
const content = document.querySelectorAll(".profi-tabs-text");
const mainSection = document.querySelector(".profi-btn-col");


mainSection.addEventListener("click", function(e){
    let id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        })
        content.forEach(function(article){
            article.classList.remove("active")
        })
        const element = document.getElementById(id)
        element.classList.add("active");    
    }
});

content.forEach(function(text){
    const readBtn = text.querySelector(".tabs-btn-item")
    readBtn.addEventListener("click", function (){
        content.forEach(function(item){
            if(item !== text){
                item.classList.remove("show-text")
            }
        })
        text.classList.toggle("show-text")
    })
})

// grid open 
const gridItem = document.querySelectorAll(".grid-item-item")

gridItem.forEach(function(text){
    const gridBtn = text.querySelector(".grid-btn")
    gridBtn.addEventListener("click", function(){
        gridItem.forEach(function(item){
            if(item !== text){
                item.classList.remove("active")
            }
        })
        text.classList.toggle("active")
    });
});

// review section
const reviews = [
    {
        id: 1,
        name: "Nancy Luther",
        city: "New York",
        img: 
        "./img/Img_1.png",
        text: 
        "We have had several good experiences with Blue Collar team. Most recently, they replaced our 20-year-old HVAC system with a new, modern, and more efficient system & it worked fine."
    },
    {
        id: 2,
        name: "Anna Johnson",
        city: "Liverpool",
        img: 
        "./img/Img_2.png",
        text: 
        "It was one of the services which I have had in my whole life. This company really knows what is doing. I defently recommend all my friends this Company. Our family really appreciate their labour.",
    },
    {
        id: 3,
        name: "Adam West",
        city: "Toronto",
        img: 
        "./img/Img_3.png",
        text: 
        "We have had several good experiences with Blue Collar team. Most recently, they replaced our 20-year-old HVAC system with a new, modern, and more efficient system & it worked fine.",  
    },
    {
        id: 4,
        name: "Sarah Jones",
        city: "Los Angelas",
        img: 
        "./img/Img_4.png",
        text: 
        "It was one of the services which I have had in my whole life. This company really knows what is doing. I defently recommend all my friends this Company. Our family really appreciate their labour.",   
    }
];

const img = document.getElementById("person-img");
const author = document.querySelector(".customer-name");
const city = document.querySelector(".customer-city");
const text = document.querySelector(".customer-comment-item");

const rightBtn = document.getElementById("arrow-right");
const leftBtn = document.getElementById("arrow-left");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson()
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    city.textContent = item.city;
    text.textContent = item.text
}

rightBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

leftBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});


// news section 
const mainItem = document.querySelectorAll(".news-main-col-item");

mainItem.forEach(function(item){
    const newsBtn = item.querySelector(".news-btn");
    const newsArrow = item.querySelector(".news-arrow")
    newsBtn.addEventListener("click", function(){
        item.classList.toggle("active")
        newsArrow.classList.toggle("active")
    });
});

// footer section
const footerMain = document.querySelectorAll(".footer-bottom-links-main");

footerMain.forEach(function(item){
    const arrow = item.querySelector(".arrow-links")
    arrow.addEventListener("click", function(){
        footerMain.forEach(function(text){
            if(text !== item){
                text.classList.remove("active");
            }
        })
        item.classList.toggle("active");    
    });
});


// news input item
const newsInput = document.querySelector(".news-input");
const newsBtn = document.querySelector(".news-bottom-btn");
const newsValue = document.querySelector(".news-value");
const loginItem = document.querySelector(".log-in-news");
const newsValueItem = document.querySelector(".news-value-main")
const newsSubmitBtn = document.querySelector(".open-close-btn-2")

newsBtn.addEventListener("click", () => {
    const value = newsInput.value;
    if(value){
      newsValue.textContent = value;  
      newsInput.value = ""
      showNewsElement()
    }else{
        hideNewsElement()
    }
});

let showNewsElement = () => {
    loginItem.textContent = "Thank you for Subscribe!"
    newsValueItem.style.display = "block";
    newsSubmitBtn.style.display = "block";
    loginItem.parentElement.style.height = "200px"

}
let hideNewsElement = () => {
    loginItem.textContent = "Please enter your Email"
    newsValue.textContent = ""
    newsValueItem.style.display = "none";
    newsSubmitBtn.style.display = "none";
    loginItem.parentElement.style.height = "100px"
}
// news modal window
document.addEventListener('DOMContentLoaded', () => {
    const firstBtn = document.querySelector('.news-bottom-btn');
    const cabElement = document.querySelector('.modal-window-news');
    const closeXBtn = document.getElementById('modal-close-icon');
    const confirmBtn = document.getElementById('confirm-btn');

    firstBtn.onclick =  () => {
        cabElement.classList.add('modal_active');
        document.body.classList.add('_hidden');
    };

    closeXBtn.onclick = () => {
        cabElement.classList.remove('modal_active');
        document.body.classList.remove('_hidden');
    }
    confirmBtn.onclick = () => {
        cabElement.classList.remove('modal_active');
        document.body.classList.remove('_hidden');
    }
});










