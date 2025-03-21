function classSelected(){
    console.log("Selection changed")
    let selectedClass = document.querySelector("#classSelector").value;
    if(selectedClass == "wizard"){
        document.querySelector("#chooseSpell").classList.remove("hide");
        document.querySelector("#chooseWeapon").classList.add("hide");
    }

    if(selectedClass == "fighter"){
        document.querySelector("#chooseSpell").classList.add("hide");
        document.querySelector("#chooseWeapon").classList.remove("hide");
    }

    if(selectedClass == "rogue"){
        document.querySelector("#chooseSpell").classList.add("hide");
        document.querySelector("#chooseWeapon").classList.add("hide");
    }
}

function genderSelected(){
    console.log("Gender Selected")
    let genderSelected = document.querySelector("#genderSelector").value;
    if(genderSelected == "other"){
        document.querySelector("#otherGender").classList.remove("hide");
    }

    else{
        document.querySelector("#otherGender").classList.add("hide");
    }
}

function raceSelected(){
    console.log("Race selected")
}