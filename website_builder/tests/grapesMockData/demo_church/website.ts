import page1 from "./pages/page1";
import page2 from "./pages/page2";
import { ProjectData } from "grapesjs";

export default async function () {
  return {
    id: "654-321",
    pages: [page1, page2],
  } as ProjectData;
}
