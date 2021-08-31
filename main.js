const botontoggle = document.querySelector(".toggle-btn");
botontoggle .addEventListener("click",function(){
    console.log('clik')
    document.getElementById('sidebar').classList.toggle('active');
    console.log(document.getElementById('sidebar'))
});