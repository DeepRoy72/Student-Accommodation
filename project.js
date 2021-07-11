const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

$(".log-in").click(function(){
  $(".form-box").show();
  $(".login-form").show();
  sideNav.classList.remove('show');
  modal.classList.remove('showModal');
});

$(".log-in").click(function(){
  $(".formbox").show();
  $(".loginform").show();
  sideNav.classList.remove('show');
  modal.classList.remove('showModal');
});

$(".sign-up").click(function(){
  $(".stform-box").show();
  $(".stregister-form").show();
  sideNav.classList.remove('show');
  modal.classList.remove('showModal');
});
