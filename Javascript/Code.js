function DarkMode(){
let CheckBox = document.querySelector("#darkBox");
// checkbox code - https://www.youtube.com/watch?v=mwG4_qAa4AU
console.log(CheckBox.checked);

if(CheckBox.checked){
    console.log("The box is checked");
    // background colour change - https://www.freecodecamp.org/news/how-to-change-background-color-with-javascript/
    document.body.style.backgroundColor = "#1a1a1a";
}

else if(CheckBox.checked == false){
    console.log("The box is not checked");
    document.body.style.backgroundColor = "white";
}
}

function classSelected(){
    console.log("Selection changed")
    let selectedClass = document.querySelector("#classSelector").value;
    if(selectedClass == "wizard"){
        document.querySelector("#chooseSpell").classList.remove("hide");
        document.querySelector("#chooseWeaponFighter").classList.add("hide");
        document.querySelector("#chooseWeaponRogue").classList.add("hide");
        document.querySelector("#chooseWeaponBarbarian").classList.add("hide");
        document.querySelector("#chooseSpellDruid").classList.add("hide");
    }

    if(selectedClass == "fighter"){
        document.querySelector("#chooseSpell").classList.add("hide");
        document.querySelector("#chooseWeaponFighter").classList.remove("hide");
        document.querySelector("#chooseWeaponRogue").classList.add("hide");
        document.querySelector("#chooseWeaponBarbarian").classList.add("hide");
        document.querySelector("#chooseSpellDruid").classList.add("hide");
    }

    if(selectedClass == "rogue"){
        document.querySelector("#chooseSpell").classList.add("hide");
        document.querySelector("#chooseWeaponFighter").classList.add("hide");
        document.querySelector("#chooseWeaponRogue").classList.remove("hide");
        document.querySelector("#chooseWeaponBarbarian").classList.add("hide");
        document.querySelector("#chooseSpellDruid").classList.add("hide");
    }

    if(selectedClass == "barbarian"){
        document.querySelector("#chooseSpell").classList.add("hide");
        document.querySelector("#chooseWeaponFighter").classList.add("hide");
        document.querySelector("#chooseWeaponRogue").classList.add("hide");
        document.querySelector("#chooseWeaponBarbarian").classList.remove("hide");
        document.querySelector("#chooseSpellDruid").classList.add("hide");
    }

    if(selectedClass == "druid"){
        document.querySelector("#chooseSpell").classList.add("hide");
        document.querySelector("#chooseWeaponFighter").classList.add("hide");
        document.querySelector("#chooseWeaponRogue").classList.add("hide");
        document.querySelector("#chooseSpellDruid").classList.remove("hide");
        document.querySelector("#chooseWeaponBarbarian").classList.add("hide");
    }

    if(selectedClass == "selectClass"){
        document.querySelector("#chooseSpell").classList.add("hide");
        document.querySelector("#chooseWeaponFighter").classList.add("hide");
        document.querySelector("#chooseWeaponRogue").classList.add("hide");
        document.querySelector("#chooseWeaponBarbarian").classList.add("hide");
        document.querySelector("#chooseSpellDruid").classList.add("hide");
    }
}

function genderSelected(){
    console.log("Gender Selected")
    let genderSelected = document.querySelector("#genderSelector").value;
    if(genderSelected == "other"){
        document.querySelector("#otherGender").classList.remove("hide");
    }

    if(genderSelected == "selectGender"){
        document.querySelector("img").classList.add("hide");
    }

    raceSelected();
}

const tieflingMaleImage = "Images/TieflingMale.jpg"
const tieflingFemaleImage = "Images/TieflingFemale.jpg"
const humanMaleImage = "Images/HumanMale.jpg"
const humanFemaleImage = "Images/HumanFemale.jpg"
const ElfMaleImage = "Images/ElfMale.jpg"
const ElfFemaleImage = "Images/ElfFemale.jpg"
const DwarfMaleImage = "Images/DwarfMale.jpg"
const DwarfFemaleImage = "Images/DwarfFemale.jpg"
const OrcMaleImage = "Images/OrcMale.jpg"
const OrcFemaleImage = "Images/OrcFemale.jpg"
const DragonbornMaleImage = "Images/DragonbornMale.jpg"
const DragonbornFemaleImage = "Images/DragonbornFemale.jpg"


function raceSelected(){
    console.log("Race selected")
    let raceSelected = document.querySelector("#raceSelector").value;
    let genderSelected = document.querySelector("#genderSelector").value;
    if(genderSelected == "male" && raceSelected == "tiefling"){
        document.querySelector("img").src = tieflingMaleImage;
        document.querySelector("img").classList.remove("hide");
    }

    if(genderSelected == "female" && raceSelected == "tiefling"){
        document.querySelector("img").src = tieflingFemaleImage
        document.querySelector("img").classList.remove("hide");
    }

    if(genderSelected == "male" && raceSelected == "human"){
        document.querySelector("img").src = humanMaleImage;
        document.querySelector("img").classList.remove("hide");
    }

    if(genderSelected == "female" && raceSelected == "human"){
        document.querySelector("img").src = humanFemaleImage;
        document.querySelector("img").classList.remove("hide");
    }

    if(genderSelected == "male" && raceSelected == "elf"){
        document.querySelector("img").src = ElfMaleImage;
        document.querySelector("img").classList.remove("hide");
    }

    if(genderSelected == "female" && raceSelected == "elf"){
        document.querySelector("img").src = ElfFemaleImage;
        document.querySelector("img").classList.remove("hide");
    }

    if(genderSelected == "male" && raceSelected == "dwarf"){
        document.querySelector("img").src = DwarfMaleImage;
        document.querySelector("img").classList.remove("hide");
    }

    if(genderSelected == "female" && raceSelected == "dwarf"){
        document.querySelector("img").src = DwarfFemaleImage;
        document.querySelector("img").classList.remove("hide");
    }

    if(genderSelected == "male" && raceSelected == "orc"){
        document.querySelector("img").src = OrcMaleImage;
        document.querySelector("img").classList.remove("hide");
    }

    if(genderSelected == "female" && raceSelected == "orc"){
        document.querySelector("img").src = OrcFemaleImage;
        document.querySelector("img").classList.remove("hide");
    }

    if(genderSelected == "male" && raceSelected == "dragonborn"){
        document.querySelector("img").src = DragonbornMaleImage;
        document.querySelector("img").classList.remove("hide");
    }
    if(genderSelected == "female" && raceSelected == "dragonborn"){
        document.querySelector("img").src = DragonbornFemaleImage;
        document.querySelector("img").classList.remove("hide");
    }

    if(raceSelected == "selectRace"){
        document.querySelector("img").classList.add("hide");
    }
}

function UnhideSubmit(){
    let check = document.querySelector("#finalCheckbox").checked;
    if(check){
        document.querySelector("#submitButton").classList.remove("hide");
    }

    else{
        document.querySelector("#submitButton").classList.add("hide");
    }
}

function showName(radioButton) {
    document.getElementById("radioOutput").textContent = "You have chosen: " + radioButton.value;
    document.getElementById("radioOutput").classList.add("hide");
  }


function handleSubmit(event){
    event.preventDefault();

    let CharacterName = document.querySelector("#name").value;
    console.log(CharacterName);
    let CharacterAge = document.querySelector("#age").value;
    let CharacterGender = document.querySelector("#genderSelector").value;
    let CharacterRace = document.querySelector("#raceSelector").value;
    let CharacterClass = document.querySelector("#classSelector").value;

    document.querySelector("#name-output").innerHTML = CharacterName;
    document.querySelector("#age-output").innerHTML = CharacterAge;
    document.querySelector("#gender-output").innerHTML = CharacterGender;
    document.querySelector("#race-output").innerHTML = CharacterRace;
    document.querySelector("#class-output").innerHTML = CharacterClass;
    document.getElementById("radioOutput").classList.remove("hide");
  
    document.querySelector("#submitSheet").classList.remove("hide");
}