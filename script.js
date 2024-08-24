
let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters=word.textcontent.split("");
    word.textcontent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.append(span);
    });
});
let currentWordIndex=0;
let maxWordIndex=words.length-2;
words[currentWordIndex].style.opacity="1";

let changeText=()=>{
    let currentWord=words[currentWordIndex];
    let nextword = currentWordIndex === maxWordIndex ? words[0] :words[currentWordIndex +1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter.out";
        },i * 80);
    });
    nextword.style.opacity="1";
    Array.from(nextword.children).forEach((letter,i)=>{
       letter.className="letter behind";
    setTimeout(()=>{
        letter.className ="letter in";
    },340 + i * 80 );
 });
 currentWordIndex  = currentWordIndex === maxWordIndex ? 0:currentWordIndex + 1;
};
changeText();
setInterval(changeText,3000)

//circles////////////////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0 ; i < dots ; i++){
        points+= '<div class="points" style="--i:$(i);--rot:$(rotate)deg"></div>';
    }
    elem.innerHTML = points;

    const pointsmarked = elem.querySelectorAll('.points');

    for(let i = 0 ; i<percent ; i++){
        pointsmarked[i].classList.add('marked')
    }
    })




    var mixer = mixtup('.portfolio-gallary');


   //active menu////////////////////////////////////
   let menuli = document.querySelectorAll('header ul li a');
   let section = document.querySelectorAll('section');

   function activemenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
   }
   activemenu();
   window.addEventListener("scroll",activemenu);


   //sticky navbar////////////////////////////////
    const header = document.querySelector("header");
    window.addEventListener("scroll",function(){
        header.classList.toggle("sticky",window.scrollY>50)
    })

    //toggle icon navbar//
    let menuicon = document.querySelector("#menu-icon");
    let navlist = document.querySelector(".navlist");

    menuicon.onclick =()=>{
        menuicon.classList.toggle("bx bxs-x-circle");
        navlist.classList.toggle("open");
    }
    window.onscroll =()=>{
        menuicon.classList.remove("bx bxs-x-circle");
        navlist.classList.remove("open");
    }

    
    //contact///////////////////////////////////////////////
   
    document.addEventListener('DOMContentLoaded',()=>{
        const form=document.getElementById('contactform');
        form.addEventListener('submit',function(event){
            Event.preventDefault();
            const name=document.getElementById('name').value;
            const email=document.getElementById('email').value;
            const message=document.getElementById('message').value;
            if(name&&email&&message){
                alert('Thank you for your message, '+name+'!we will get back to you');
                form.reset();
        
            }
            else{
                alert('please fill out all fields.');
            }
        });
    });