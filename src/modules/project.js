import close from "../assets/images/close.png";

// save all projects in array
let allProjects = [];

// create new project
function Project(projectName) {
  this.projectName = projectName;

  allProjects.push(this.projectName);
  console.log(allProjects);

  // close the add project input field
  cancelProject();
}

// open the form to add a new project
export function openForm() {
  const enterProject = document.getElementById("enterProject");
  showOrHideProjectsBtn("none");

  // INPUT FIELD
  const inputContainer = document.createElement("form");
  inputContainer.id = "inputContainer";

  // create inputField
  const inputField = document.createElement("input");
  inputField.placeholder = "Enter Project Name";
  inputField.id = "inputField";
  inputContainer.appendChild(inputField);

  // add inputField to form
  enterProject.appendChild(inputContainer);

  // BUTTONS
  const buttonContainer = document.createElement("div");
  buttonContainer.id = "formButtons";

  // add project button
  const addBtn = document.createElement("button");
  addBtn.innerText = "Add";
  addBtn.id = "addProject";
  addBtn.classList.add("projectBtns");
  buttonContainer.appendChild(addBtn);

  addBtn.addEventListener("click", getInputValue);

  // cancel project button
  let cancelBtn = document.createElement("button");
  cancelBtn.innerText = "Cancel";
  cancelBtn.id = "cancelProject";
  cancelBtn.classList.add("projectBtns");

  cancelBtn.addEventListener("click", cancelProject);

  buttonContainer.appendChild(cancelBtn);

  // add buttons to form
  enterProject.appendChild(buttonContainer);
}

// hide or show the button to add a new project
function showOrHideProjectsBtn(input) {
  let addProjectsBtn = document.getElementById("addProjectBtn");
  addProjectsBtn.style.display = input;
}

// cancel making a new project. Close the form and show the Add Projects button
export function cancelProject() {
  let enterProject = document.getElementById("enterProject");
  enterProject.innerText = "";
  showOrHideProjectsBtn("");
}

function getInputValue(e) {
  e.preventDefault();
  showOrHideProjectsBtn("");

  // get value of input field and save new project
  let inputField = document.getElementById("inputField");

  // new project cannot be added when it already exists
  let findProjectInArray = allProjects.find(
    (element) => element == inputField.value
  );

  // if item already exists ==> error, else ==> free to push item to array
  if (allProjects.indexOf(findProjectInArray) === 0) {
    inputField.value = "";
    alert("Project names must be different");
    showOrHideProjectsBtn("none");
  } else if (inputField.value === "") {
    alert("Project name can't be empty");
    showOrHideProjectsBtn("none");
  } else {
    new Project(inputField.value);
  }

  // run function again to show new added project in project list
  showProjects();
}

function showProjects() {
  const projects = document.getElementById("allProjects");
  projects.innerText = "";

  // make button for every project
  for (let i = 0; i < allProjects.length; i++) {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("projectsBtn");
    projectContainer.classList.add("navBtns");

    // delete button
    const deleteProject = document.createElement("div");
    deleteProject.id = "deleteProject";

    const closeIcon = new Image();
    closeIcon.classList.add("closeIcon");
    closeIcon.classList.add("hamburgerIcon");

    closeIcon.src = close;
    deleteProject.appendChild(closeIcon);

    closeIcon.addEventListener("click", (e) => {
      projectDelete(e);
    });
    projectContainer.appendChild(deleteProject);

    // text
    const project = document.createElement("div");
    project.id = "leftSide";

    const projectName = document.createElement("p");
    projectName.innerText = allProjects[i];
    project.appendChild(projectName);

    projectContainer.appendChild(project);

    projects.appendChild(projectContainer);
  }
}

// delete project
function projectDelete(e) {
  let projectItem = e.target.parentNode.parentNode.innerText;
  // find clicked element in allProjects array
  let findProjectInArray = allProjects.find(
    (element) => element == projectItem
  );
  // get index of clicked item in array
  const index = allProjects.indexOf(findProjectInArray);
  allProjects.splice(index, 1);
  // refresh projects list without reloading the whole page
  showProjects();
}

document.addEventListener("click", setSelectedBtn);
function setSelectedBtn(e) {
  let clickedBtn = e.target;
  let navBtns = document.querySelectorAll(".navBtns");
  console.log(clickedBtn);

  if (
    clickedBtn.classList.contains("navBtns") &&
    clickedBtn.id !== "addProjectBtn"
  ) {
    // clickedButton(clickedBtn.innerText);

    // delete selected class from all navBtns
    navBtns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    // only add selected class to the clicked button
    clickedBtn.classList.add("selected");
  }
  //   clickOnProject();
}

// function clickOnProject() {
//   let projects = document.querySelectorAll(".navBtns");
//   let home = document.querySelectorAll("home");
//   let tasks = document.getElementById("tasks");

//   projects.forEach((project) => {
//     project.addEventListener("click", () => {
//       console.log(project);
//       // tasks.style.display = "none";
//       // addTaskBtn();
//     });
//   });
// }
