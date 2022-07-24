var tablinks=document.getElementsByClassName("tab-links")
var contents=document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
}