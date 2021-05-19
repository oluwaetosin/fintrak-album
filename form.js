// selectring the inputs (search the dom for the inputs)
const nameInput = document.querySelector("#name");

const skillsInput = document.querySelector("#skills");

const avatarInput = document.querySelector("#avatar");

const aboutInput = document.querySelector("#about");

const button = document.querySelector("#button");

const cardHolder = document.querySelector("#cards-holder");
// a collection of trainees
let trainees = [];

// listen for when a button is clicked
button.addEventListener("click", (e) => {
  const name = nameInput.value;
  const skill = skillsInput.value;
  const avatar = avatarInput.value;
  const about = aboutInput.value;

  const traineeObject = {
    name: name,
    skill: skill,
    avatar: avatar,
    about: about,
  };

  trainees.push(traineeObject);
  createCard(name,skill,avatar,about);
  /// reset the input values
  skillsInput.value = "";
  avatarInput.value = "";
  aboutInput.value = "";
  nameInput.value = "";
  e.preventDefault();
});

function createCard(name, skills, avatar, about) {
  // <div class="card">
  //             <img
  //                 src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80">
  //             <div class="skill-set">
  //                 <span>HTML</span><span>CSS</span><span>Angular</span>
  //             </div>
  //             <h2>Tosin Omotayo</h2>
  //             <p>I am a jolly good fellow. Bring me some food.</p>
  //             <div class="button-wrapper">
  //                 <button>Read More</button>
  //             </div>

  // </div>

  // <div class="card">
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute("class", "card");

  //             <img
  //                 src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80">

  const img = document.createElement("img");
  img.setAttribute("src", avatar);
  //  <div class="skill-set">
  //                 <span>HTML</span><span>CSS</span><span>Angular</span>
  //             </div>
  const skillsDiv = document.createElement("div");
  skillsDiv.setAttribute("class", "skill-set");
  const skillsArray = skills.split(",");
  for (let i = 0; i < skillsArray.length; i++) {
    const span = document.createElement("span");
    span.textContent = skillsArray[i];
    skillsDiv.append(span);
  }

  //             <h2>Tosin Omotayo</h2>

  const h2 = document.createElement("h2");
  h2.textContent = name;

  // <p>I am a jolly good fellow. Bring me some food.</p>

  const p = document.createElement("p");
  p.textContent = about;

  // <div class="button-wrapper">
  //                 <button>Read More</button>
  //             </div>
  const readMoreDiv = document.createElement("div");

  parentDiv.append(img);
  parentDiv.append(skillsDiv);
  parentDiv.append(h2);
  parentDiv.append(p);
  parentDiv.append(readMoreDiv);
  cardHolder.append(parentDiv);
}
alert("good");