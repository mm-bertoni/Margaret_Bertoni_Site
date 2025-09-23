/*Functionality to Create Work Experience Page */
function MainModule(experienceID = "#experiences") {
  /*Array for the data to load*/
  const me = {};
  /*Gets experiences section */
  const experiencesElement = document.querySelector(experienceID);
  /*Function to make list out of items List */
  function makeExperienceList(experience) {
    let listTemplate = ``;
    for (const entry of experience.items) {
      listTemplate += `<li>${entry}</li>`;
    }
    return (
      listTemplate +
      `</ul>
                    </p>
                </div>
            </div>
            <!--Next Experience-->
        </div>`
    );
  }
  /*Function to get an individual experience */
  function getExperienceCode(experience) {
    return (
      `<div id="experiences" class="col-6">
            <div class="experience card">
                <img 
                src=${experience.positionPicture}
                class="card-img-top"
                alt=${experience.company}
                />
                <div class="card-body ${experience.company}">
                    <h5 class="card-title">${experience.company}: ${experience.position} : ${experience.startMonth} to ${experience.endMonth}</h5>
                    <p class="card-text">
                       
                       <ul>` + makeExperienceList(experience)
    );
  }
  /*Function to apply the getExperienceCode function */
  function redraw(experiences) {
    experiencesElement.innerHTML = "";
    experiencesElement.innerHTML = experiences
      .map(getExperienceCode)
      .join("\n");
  }
  async function loadData() {
    const res = await fetch("../data/work_experience.json");
    const experiences = await res.json();
    me.redraw(experiences);
  }
  me.redraw = redraw;
  me.loadData = loadData;
  return me;
}
const main = MainModule();
main.loadData();

/* * * Functionality for highlight button * * */

/* Clear function */
function clearHighlight(){
  const allCards = document.querySelectorAll(".card-body");
  allCards.forEach((part) => {
    // Takes off the highlight for any previously highlighted card.
    part.classList.remove("highlight");
  });
}

/* Lumafield Code */
const lumafield = document.querySelector("#Lumafield");
lumafield.addEventListener("click", function () {
  const lumaCards = document.querySelectorAll(".Lumafield");
  lumaCards.forEach((part) => {
    part.classList.add("highlight");
  });
});

/* Formlabs Code */
const formlabs = document.querySelector("#Formlabs");
formlabs.addEventListener("click", function () {
  clearHighlight();
  const formCards = document.querySelectorAll(".Formlabs");
  formCards.forEach((part) => {
    part.classList.add("highlight");
  });
});

/* Sage Code */
const sage = document.querySelector("#Sage");
sage.addEventListener("click", function () {
  clearHighlight();
  const sageCards = document.querySelectorAll(".Sage");
  sageCards.forEach((part) => {
    part.classList.add("highlight");
  });
});

/*Clear Button Code */
const clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
  clearHighlight();
});
