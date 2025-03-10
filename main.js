

// nav bar

const list= document.querySelector('.nav-ul');

const menuBar= document.querySelector('.menu-bar');

const closeBtn= document.querySelector('#close-btn');



// click event And class list add 


 menuBar.addEventListener('click',()=>{
     list.classList.add("active")

 });

//  close btn

 closeBtn.addEventListener('click',()=>{
    list.classList.remove("active")

});


// view card

// const image=document.querySelectorAll('.image');
// const view=document.querySelector('.over-view');
// const remove=document.querySelector('#view-remove')
// const main=document.querySelector('#main-img');
// console.log(image);

// image.forEach((img)=>(
//     img.addEventListener('click',()=>{
//         view.classList.add('view-active')
//         main.src=img.src;
//     })
// ));


// remove.addEventListener('click',()=>{

//     view.classList.remove('view-active')
// });



// var type = new Typed('.input'
//     , {
//         strings:["Front-End Developer", "Creative Designer"],
//         typeSpeed:150,
//         backSpeed:150,
//         backDealy:2000,
//         loop:true

//     }
// )



// text animation

const text = document.querySelector('.sec-text');

const textLoad =()=>{
    setTimeout(()=>{
        text.textContent="FRONT-END DEVELOPER";
    },0);

    setTimeout(()=>{
        text.textContent="FREELANCER";
    },6000);

    setTimeout(()=>{
        text.textContent="BLOGGER";
    },12000);



}

textLoad()


setInterval(textLoad,18000);