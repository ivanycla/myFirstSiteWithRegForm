document.addEventListener("DOMContentLoaded", function() {
    const createAcc = document.getElementById("createAcc").onclick = function() {
        window.location.href = "formPage.html";
    };

    const aboutUsButton = document.querySelector('a[href="#aboutUs"]');
    const subscribeButton = document.querySelector('a[href="#subscribe"]');
    const aboutUsSection = document.querySelector('.thirdTitle').parentElement;
    const subscribeSection = document.querySelector('.secondTitle').parentElement;

    aboutUsButton.onclick = function() {
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    };

    subscribeButton.onclick = function() {
        subscribeSection.scrollIntoView({ behavior: 'smooth' });
    };
});
 const btnEnter=document.getElementById("btnEnter");


 btnEnter.onclick=function(){
    window.location.href = "justInfo.html";
 }


 const linkDonwload=document.getElementById("linkDonwload");
  

 linkDonwload.onclick=function(){
    window.location.href = "justInfo.html";
 }

 const donwloadAndroid=document.getElementById("donwloadAndroid");

 donwloadAndroid.onclick=function(){
    window.location.href = "justInfo.html";
 }

 const domwlodIos=document.getElementById("domwlodIos");

 domwlodIos.onclick=function(){
    window.location.href = "justInfo.html";
 }
