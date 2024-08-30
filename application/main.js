import "./static/style.scss";
//Bruker fetch for å hente data fra json filen.
const getJson = async () => {
  try {
    const response = await fetch("./exampleData.json");
    const data = await response.json();
    console.log(data);
    return data;
  } catch {
    console.log(console.error("error"));
  }
};
const data = await getJson();

//Funksjon for å vise dataen i html.
const projectList = document.getElementById("project-list");

const renderList = () => {
  let projectListHTML = "";

  for (const p of data) {
    projectListHTML += `
      <li>
      <article>
      <h3>${p.projectName}</h3>
      <p>${p.category}</p><p>Link to project: <a href="${p.url}">${p.url}</a></p>
      <p>Created at: ${p.date}</p>
      <a href="#">Read more</a>
      </article>
      </li>`;
  }
  projectList.innerHTML = projectListHTML;
};
renderList();

//Funksjon for å legge til nye prosjekter.
let tempArray = [];

const msg = document.getElementById("success-message");
const submit = (e) => {
  e.preventDefault();
  const form = e.target;
  const projectName = form.name.value;
  const projectUrl = form.link.value;
  const projectCat = form.category.value;
  const projectDescription = form.description.value;
  tempArray.push({
    projectName: projectName,
    url: projectUrl,
    category: projectCat,
    description: projectDescription,
    date: new Date().toISOString().split("T")[0], //date funksjon hentet fra chatgpt
  });
  console.log(tempArray);
  form.reset();
  msg.textContent = "Your project was succesfully added!";
  msg.style.color = "green";
};
document.querySelector("form").addEventListener("submit", submit);
