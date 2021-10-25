let toggleNavStatus = false;

let toggleNav = function(){
    let getDropDown = document.querySelector("#my-nav");
    let getDropDownUL = document.querySelector("#my-nav ul");
    let getDropDownLinks = document.querySelectorAll("#my-nav a");
    let menuVisible = document.querySelector("#menu-open");
    let closeVisible = document.querySelector("#menu-close");
    let menuLinkSummary = document.querySelectorAll(".menu-link-summary");

    if (toggleNavStatus === false){
        getDropDownUL.style.visibility = "visible";
        getDropDown.style.height = "95%";
        getDropDown.style.visibility = "visible";
        menuVisible.style.visibility = "hidden";
        closeVisible.style.display = "block";
        

        let arrayLength = getDropDownLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getDropDownLinks[i].style.visibility = "visible";
        }
        let arrayLength2 = menuLinkSummary.length;
        for (let i = 0; i < arrayLength2; i++) {
            menuLinkSummary[i].style.visibility = "visible";
        }

        toggleNavStatus = true;
    }


    else if (toggleNavStatus === true){
        getDropDown.style.height = "0"

        let arrayLength = getDropDownLinks.length;
        for (let index = 0; index < arrayLength; index++) {
            getDropDownLinks[index].style.visibility = "hidden"
        }
        let arrayLength2 = menuLinkSummary.length;
        for (let i = 0; i < arrayLength2; i++) {
            menuLinkSummary[i].style.visibility = "hidden";
        }
        getDropDownUL.style.visibility = "hidden";
        getDropDown.style.visibility = "hidden";
        menuVisible.style.visibility = "visible";
        closeVisible.style.display = "none";

        toggleNavStatus = false;
    }
}