let img = document.querySelector("[name='side1']");
let title = document.querySelector(".text h2");
let pharagraph = document.querySelector(".text p");
let btns = document.querySelectorAll(".two-buttons");

btns.forEach(function (e) {
    e.addEventListener("click", function(){
        if (img.src.match("images/desktop-image-hero-1.jpg")){
            img.src= "images/desktop-image-hero-2.jpg";
        }else {
            img.src= "images/desktop-image-hero-1.jpg";
        };

        if (img.src.match("images/desktop-image-hero-2.jpg")){
            title.innerHTML="We are available all<br>across the globe";
            pharagraph.innerHTML= `
            With stores all over the world, it's easy for you to find furniture<br>
            for your home or place of business. Locally, we're in most<br>
            major cities throughout the country. Find the branch nearest<br>
            you using our store locator. Any questions? Don't hesitate to<br>
            contact us today.
            `;
        }else {
            title.innerHTML="Discover innovative<br>ways to decorate";
            pharagraph.innerHTML= `
            We provide unmatched quality. comfort, and style for property<br>
            owners across the country. Our experts combine form and<br>
            function in bringing your vision to life. Create a room in your<br>
            own style with our collection and make your property a<br>
            reflection of you and what you love
            `;
        };
    });
});

let winWidth = window.innerWidth; // window's width when be < 768 will change the photo
// this condition  
if(winWidth <= 768) {
    img.remove();
    let newImg = document.createElement("img");
    newImg.src= "images/mobile-image-hero-1.jpg";
    document.querySelector(".photo").appendChild(newImg);
    btns.forEach(function (e) {
        e.addEventListener("click", function(){
            if (newImg.src.match("images/mobile-image-hero-1.jpg")){
                newImg.src= "images/mobile-image-hero-2.jpg"
            }else {
                newImg.src= "images/mobile-image-hero-1.jpg";
            };
        });
    });
}

// get hamburger's elements
let navBar = document.querySelector(".links");
let burger = document.querySelector(".hamburger");
let lineOne = document.querySelector(".bar1");
let lineTwo = document.querySelector(".bar2");
let lineThree = document.querySelector(".bar3");

// function for closs burger menu and burger icon
function close (){
    if(lineTwo.className.match("bar2")){
        lineTwo.className= "opacity";
    } else {
        lineTwo.className= "bar2";
    }
    if(lineOne.className.match("bar1") && lineThree.className.match("bar3")){
        lineOne.className="rotate1"
        lineThree.className= "rotate2";
    } else {
        lineOne.className="bar1"
        lineThree.className= "bar3";
    }
}
// add event to call function and make it play 
burger.addEventListener("click", function() {
    burger.style.justifyContent= "center";  
    navBar.classList.toggle("open");
    close();
});

// add event when click on links
let navBarLinks = document.querySelectorAll(".links a");
navBarLinks.forEach(function(el){
    el.addEventListener("click", ()=>{
        navBar.classList.toggle("open");
        close();
    });
});