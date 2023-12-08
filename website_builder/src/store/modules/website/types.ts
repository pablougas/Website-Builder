import { Page } from "grapesjs";

interface Website {
  id?: string;
  pages: Page[];
}

interface WebsiteState {
  website: Website | undefined;
  error: boolean;
}

export { Website, WebsiteState, Page };
