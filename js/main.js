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
      `<div id="experiences" class="row">
            <div class="experience card">
                <img 
                src=${experience.positionPicture}
                class="card-img-top"
                alt=${experience.position}
                />
                <div class="card-body">
                    <h5 class="card-title">${experience.company} : ${experience.position} : ${experience.startMonth} to ${experience.endMonth}</h5>
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
