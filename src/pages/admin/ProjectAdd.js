import axios from "axios";
import FooterComponent from "../../components/FooterComponent";
import HeaderComponent_Admin from "../../components/HeaderComponent_Admin";
import { router, useEffect } from "../../lib";

const ProjectAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const newProject = {
        name: document.querySelector("#name").value,
        image: document.querySelector("#image").value,
        client: document.querySelector("#client").value,
        date: document.querySelector("#date").value,
        url: document.querySelector("#url").value,
        description: document.querySelector("#description").value,
      };

      if (newProject.name == "") {
        alert("The project name is empty, please enter the project name!");
      } else if (newProject.image == "") {
        alert("The project image is empty, please enter the project image!");
      } else if (newProject.client == "") {
        alert("The project client is empty, please enter the project client!");
      } else if (newProject.date == "") {
        alert("The project date is empty, please enter the project date!");
      } else if (newProject.url == "") {
        alert("The project url is empty, please enter the project url!");
      } else if (newProject.description == "") {
        alert(
          "The project description is empty, please enter the project description!"
        );
      } else {
        axios
          .post(
            `https://6520f811a4199548356cac79.mockapi.io/api/projects/projects_trang/`,
            newProject
          )
          .then(() => {
            alert("Successful action");
            router.navigate("/admin/projects");
          });
      }
    });
  });
  return /*html*/ `
    ${HeaderComponent_Admin()}

    <section class="py-5" style="margin-left: 300px;">
      <section id="breadcrumbs" class="breadcrumbs mb-3" >
        <div class="container">

          <div class="d-flex justify-content-between align-items-center">
            <h2>Project Add</h2>
            <ol>
              <li><a href="/admin/projects">Admin</a></li>
              <li>Project Add</li>
            </ol>
          </div>

        </div>
      </section>

    <div class="container px-5">
        <form id="form">
            <div class="form-floating mb-3">
                <input class="form-control" id="name" type="text" placeholder="Enter your project name..."
                    data-sb-validations="required" />
                <label for="name">Project Name</label>
            </div>

            <div class="form-floating mb-3">
                <input class="form-control" id="image" type="text" placeholder="Image" data-sb-validations="required" />
                <label for="name">Image</label>
            </div>

            <div class="form-floating mb-3">
                <input class="form-control" id="client" type="text" placeholder="Enter your name..."
                    data-sb-validations="required" />
                <label for="name">Client</label>
            </div>

            <div class="form-floating mb-3">
                <input class="form-control" id="date" type="date" placeholder="date" data-sb-validations="required,email"
                    width="150px" />
                <label for="email">Date</label>
            </div>

            <div class="form-floating mb-3">
                <input class="form-control" id="url" type="text" placeholder="project url" data-sb-validations="required" />
                <label for="phone">Url</label>
            </div>

            <div class="form-floating mb-3">
                <textarea class="form-control" id="description" type="text" placeholder="Enter your description here..."
                    style="height: 10rem" data-sb-validations="required"></textarea>
                <label for="message">Description</label>
            </div>

            <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
</section>

${FooterComponent()}`;
};

export default ProjectAdd;
