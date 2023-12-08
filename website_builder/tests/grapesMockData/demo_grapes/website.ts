import page1 from "./page1"
import { ProjectData } from "grapesjs"; 

export default async function () {
  return {
    id: "654-321",
    pages: [
      page1
    ],
  } as ProjectData;
}
