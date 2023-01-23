import checkLogo from "../assets/images/checkLogo.png";
import allTasksIcon from "../assets/images/allTasks.png";
import todayIcon from "../assets/images/today.png";
import nextIcon from "../assets/images/next.png";
import importantIcon from "../assets/images/important.png";
import addProjectsIcon from "../assets/images/addProjects.png";

import { openForm } from "./project";

let home;
const body = document.getElementById("body");

// HEADER
function header() {
  const headerTag = document.createElement("header");

  // header text
  const headerTextContainer = document.createElement("div");
  headerTextContainer.id = "headerTextContainer";

  const check = new Image();
  check.src = checkLogo;
  check.id = "checkLogo";

  headerTextContainer.appendChild(check);

  const headerTxt = document.createElement("h1");
  const headerTxtSpan = document.createElement("span");

  headerTxt.id = "headerText";
  headerTxt.innerText = "What";

  // Add span to give it a green color
  headerTxtSpan.innerText = "ToDo";
  headerTxtSpan.id = "headerTextSpan";
  headerTxt.appendChild(headerTxtSpan);

  headerTextContainer.appendChild(headerTxt);
  headerTag.appendChild(headerTextContainer);

  return headerTag;
}
function createNavBtn(name, icon, selected) {
  // ALL TASKS
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("navBtns");
  btnContainer.classList.add(selected);

  // text
  const btnTxt = document.createElement("div");
  btnTxt.innerText = name;
  btnContainer.appendChild(btnTxt);

  // icon
  const btnImg = new Image();
  btnImg.src = icon;
  btnImg.classList.add("navIcons");
  btnContainer.appendChild(btnImg);

  //   return home.appendChild(btnContainer);

  return btnContainer;
}

// NAVIGATION
function navigation() {
  const navTag = document.createElement("nav");

  // home
  home = document.createElement("div");
  home.id = "home";

  // home header
  const homeHeader = document.createElement("h2");
  homeHeader.innerText = "Home";
  homeHeader.id = "homeHeader";
  homeHeader.classList.add("navHeaders");

  home.appendChild(homeHeader);

  // All Tasks button
  home.appendChild(createNavBtn("All Tasks", allTasksIcon, "selected"));
  // Today button
  home.appendChild(createNavBtn("Today", todayIcon));
  // Next 7 Days button
  home.appendChild(createNavBtn("Next 7 Days", nextIcon));
  // Important button
  home.appendChild(createNavBtn("Important", importantIcon));

  navTag.appendChild(home);

  //projects container
  const projects = document.createElement("div");
  projects.id = "projects";

  // projects header
  const projectsHeader = document.createElement("h2");
  projectsHeader.innerText = "Projects";
  projectsHeader.classList.add("navHeaders");
  projects.appendChild(projectsHeader);

  // list with all projects
  const allProjects = document.createElement("ul");
  allProjects.id = "allProjects";
  projects.appendChild(allProjects);

  // add new project form ==> is on default empty
  const enterProject = document.createElement("form");
  enterProject.id = "enterProject";
  projects.appendChild(enterProject);

  // add projects button
  const addProjectsImg = new Image();
  addProjectsImg.src = addProjectsIcon;
  addProjectsImg.classList.add("navIcons");
  addProjectsImg.id = "addProjectIcon";

  const addProjectsBtn = document.createElement("button");
  addProjectsBtn.innerText = "Add Projects";
  addProjectsBtn.id = "addProjectBtn";
  addProjectsBtn.addEventListener("click", openForm);

  addProjectsBtn.appendChild(addProjectsImg);
  projects.appendChild(addProjectsBtn);

  navTag.appendChild(projects);

  return navTag;
}

function main() {
  const mainTag = document.createElement("main");

  // header
  const mainHeaderContainer = document.createElement("div");
  mainHeaderContainer.id = "mainHeaderContainer";

  let mainHeader = document.createElement("p");
  mainHeader.innerText = "All Tasks";
  mainHeader.id = "mainHeaderTxt";
  mainHeaderContainer.appendChild(mainHeader);

  mainTag.appendChild(mainHeaderContainer);

  // tasks
  const tasksContainer = document.createElement("div");
  tasksContainer.id = "tasksContainer";

  const tasksInput = document.createElement("ul");
  tasksInput.id = "todoList";

  const tasks = document.createElement("p");
  tasks.id = "tasks";
  tasks.innerText = "Yay! No Tasks!";

  tasksInput.appendChild(tasks);
  tasksContainer.appendChild(tasksInput);

  mainTag.appendChild(tasksContainer);

  return mainTag;
}

export function UI() {
  body.appendChild(header());
  body.appendChild(navigation());
  body.appendChild(main());
}
