// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import grapesjs from "grapesjs";

import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import styleManager from "./grapesjs/styleManager";
import plugins from "./grapesjs/plugins";
import pluginOpts from "./grapesjs/pluginOpts";
import storageManager from "./grapesjs/storageManager";
import canvas from "./grapesjs/canvas";

const editor = () =>
  grapesjs.init({
    height: "100vh",
    container: "#gjs",
    canvas,
    fromElement: true,
    showOffsets: true,
    assetManager: {
      embedAsBase64: true,
    },
    selectorManager: { componentFirst: true },
    storageManager,
    styleManager,
    plugins,
    pluginOpts,
  });

export default editor;
