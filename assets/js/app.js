$('.Search').click(() => {
    $(".search-aria").toggleClass('showbar');
});

let getbtn = document.querySelector("#btn");
getbtn.addEventListener("click" , ()=>{
let search = document.querySelector('#serch');
console.log(search);
search.value = ''
console.log(search.value);
});

$("#show-12").click(()=>{
    $(".logIn").slideToggle();
})