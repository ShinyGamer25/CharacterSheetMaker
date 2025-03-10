function classSelected(){
    console.log("Selection changed")
    let selectedClass = document.querySelector("#class").value;
    if(selectedClass == "wizard"){
        document.querySelector("#chooseSpell").classList.remove("hide");
    }

    if(selectedClass == "fighter"){
        document.querySelector("#chooseSpell").classList.add("hide");
    }
}