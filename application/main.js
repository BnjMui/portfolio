import "./static/style.scss";
// Bruker fetch for å hente data fra json filen.
// const getJson = async () => {
//   try {
//     const response = await fetch("./data.json");
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch {
//     console.log(console.error("error"));
//   }
// };
// const data = await getJson();
// console.log(data, "dette er data");

//Funksjon for å hente data fra hono-server.
const getProjects = async () => {
  try {
    const response = await fetch("http://localhost:3999");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
//Funksjon for å vise dataen i html.
const projectList = document.getElementById("project-list");

const renderList = async () => {
  let projectListHTML = "";
  const data = await getProjects();

  for (const p of data) {
    projectListHTML += `
      <li>
      <article>
      <h3>${p.projectName}</h3>
      <p>${p.category}</p><p>Link to project: <a target="_blank" href="${p.url}">${p.url}</a></p>
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
//Oppdaterer denne for å kunne pushe data inn i json filen via hono-server.
const msg = document.getElementById("success-message");
const submit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const newProject = {
    projectName: form.name.value,
    url: form.link.value,
    category: form.category.value,
    description: form.description.value,
    date: new Date().toISOString().split("T")[0], //date funksjon hentet fra chatgpt
  };

  try {
    const response = await fetch("http://localhost:3999/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    });
    if (response.status === 201) {
      console.log("Project added to server data");
      console.log("ProjectData: \n", newProject);
      renderList();
    } else {
      console.error("Error when adding new project to server");
    }
  } catch (error) {
    console.error(error);
  }
  form.reset();
  msg.textContent = "Your project was succesfully added!";
  msg.style.color = "green";
};
document.querySelector("form").addEventListener("submit", submit);
