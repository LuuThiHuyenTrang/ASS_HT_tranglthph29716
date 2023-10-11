import { render, router } from "./lib";
import PageNotFound from "./pages/PageNotFound";
import ProjectAdd from "./pages/admin/ProjectAdd";
import ProjectEdit from "./pages/admin/ProjectEdit";
import ProjectList from "./pages/admin/ProjectList";
import HomePage from "./pages/client/HomePage";
import ProjectDetail from "./pages/client/ProjectDetail";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));

router.on("/projects/:id", ({ data }) =>
  render(() => ProjectDetail(data), app)
);

router.on("/admin", () => render(ProjectList, app));

router.on("/admin/projects", () => render(ProjectList, app));

router.on("/admin/projects/add", () => render(ProjectAdd, app));

router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => {
    return ProjectEdit(data);
  }, app)
);

router.notFound(() => render(PageNotFound, app));

router.resolve();
