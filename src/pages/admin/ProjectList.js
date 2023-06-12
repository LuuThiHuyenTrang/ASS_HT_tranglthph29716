import axios from "axios";
import FooterComponent from "../../components/FooterComponent";
import HeaderComponent_Admin from "../../components/HeaderComponent_Admin";
import { useEffect, useState } from "../../lib";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/project`)
      .then(({ data }) => setProjects(data))
      .catch((error) => console.log(error));
  }, []);

  const isMatch = (str, keyword) => {
    const normalizedStr = str.toLowerCase();
    const normalizedKeyword = keyword.toLowerCase();
    return normalizedStr.includes(normalizedKeyword);
  };

  useEffect(() => {
    const btnxoa = document.querySelectorAll(".btn-remove");
    for (let btn of btnxoa) {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        fetch(`http://localhost:3000/project/${id}`, { method: "Delete" }).then(
          () => {
            const newProjects = projects.filter((item) => item.id != id);
            setProjects(newProjects);
            alert(`Delete project successfully`);
          }
        );
      });
    }

    document.querySelector("#form").addEventListener("submit", async (e) => {
      e.preventDefault();

      const nameSearch = document.querySelector("#search").value;

      const filteredProjects = projects.filter((pro) => {
        return isMatch(pro.name, nameSearch);
      });

      if (filteredProjects.length !== 0) {
        setProjects(filteredProjects);
      } else {
        alert("Project not found");
        axios
          .get(`http://localhost:3000/project`)
          .then(({ data }) => setProjects(data));
      }
    });
  }, [projects]);

  return /*html*/ `
    ${HeaderComponent_Admin()}

    <main id="main">
      <div class="container">
        <div class="d-flex">
          <div>
            <h1>Product List</h1>
            <a href="/admin/projects/add"><button class="btn btn-primary">Add</button></a>
          </div>
          <form class="d-flex" id="form" style="height: 50px; margin-left: 750px; margin-top: 30px">
            <input type="text" name="search" id="search" placeholder="Search" class="form-control" style="width:150px" />
            <button type="submit" class="btn btn-success">Search</button>
          </form>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Image</th>
              <th>Client</th>
              <th>Date</th>
              <th style="width: 30%">Desc</th>
              <th>Url</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${projects
              .map((pro) => {
                return /*html*/ `
                <tr>
                  <td>${pro.id + 1}</td>
                  <td>${pro.name}</td>
                  <td><img src="${pro.image}" alt="anh" width="100px"></td>
                  <td>${pro.client}</td>
                  <td style="width: 10%;  ">${pro.date}</td>
                  <td class="card-text">${pro.description}</td>
                  <td><a href="${pro.url}">Url Project</a></td>
                  <td>
                    <button class="btn-remove btn btn-danger" data-id="${
                      pro.id
                    }" onclick="return confirm('Are you sure?')">Delete</button>
                    <a href="/admin/projects/${
                      pro.id
                    }/edit"><button class="btn btn-warning">Edit</button></a>
                  </td>
                </tr>`;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    </main> 

    <style>
      .card-text {
        -webkit-line-clamp: 4;
      }
    </style>

    ${FooterComponent()}
  `;
};

export default ProjectList;
