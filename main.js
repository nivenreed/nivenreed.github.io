let toggleNavStatus = false;

let toggleNav = function(){
    let getDropDown = document.querySelector("overlay-content");
    let getDropDownUL = document.querySelector("overlay-content ul");
    let getDropDownLinks = document.querySelectoraAll("overlay-content a");

    if (toggleNavStatus === false){
        getDropDownUL.style.visibility = "visable";
        getDropDown.style.height = "95%"

        let arrayLength = getDropDownLinks.length;
        for (let index = 0; index < array.length; index++) {
            getDropDownLinks[index].style.opacity = "1"
        }

        toggleNavStatus = true;
    }


    else if (toggleNavStatus === true){
        getDropDown.style.height = "0"

        let arrayLength = getDropDownLinks.length;
        for (let index = 0; index < array.length; index++) {
            getDropDownLinks[index].style.opacity = "0"
        }
        getDropDownUL.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}