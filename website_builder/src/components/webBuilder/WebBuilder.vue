<template>
  <div class="app-wrap">
    <pages-panel :editor="editor" :pages="pages" />
    <div class="editor-wrap">
      <div id="gjs" style="height: 0px; overflow: hidden">
        <div class="info-panel"></div>
        <div class="gjs-mdl-dialog"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PagesPanel from "./PagesPanel.vue";
import grapesjs, { Editor } from "grapesjs";
import editor from "@/services/grapes";
import { Website, Page } from "../../store/modules/website/types";

export default Vue.extend({
  name: "WebBuilder",
  components: {
    PagesPanel,
  },
  data: () => ({
    initialized: false,
    editor: null as null | Editor,
    pages: [] as Page[],
  }),
  computed: {
    website(): Website {
      return this.$store.getters["website/get"];
    },
  },
  methods: {
    async initialize() {
      if (!this.initialized) {
        await this.fetchWebsite();
        if (this.website) {
          this.initialized = true;
          this.editor = await this.initWebBuilder();
        } else {
          this.initialize();
        }
      }
    },
    async fetchWebsite() {
      return this.$store.dispatch("website/get");
    },
    setPages(pages: Page[]) {
      this.pages = [...pages];
    },
    async initWebBuilder(): Promise<Editor> {
      return new Promise((resolve) => {
        const vmEditor = editor();
        // this is causing an error with local storage version
        // const data = vmEditor.getProjectData();
        // console.log("DATA: ", data)
        // if (!data || data.pages.length == 0) {
        vmEditor.loadProjectData(this.website);
        // }

        const pn = vmEditor.Panels;
        const pm = vmEditor.Pages;
        const cmdm = vmEditor.Commands;

        // set Page manager
        this.setPages(pm.getAll() as Page[]);
        vmEditor.on("page", () => {
          this.pages = [...(pm.getAll() as Page[])];
        });

        // Update canvas-clear command
        cmdm.add("canvas-clear", function () {
          if (confirm("Are you sure to clean the canvas?")) {
            vmEditor.runCommand("core:canvas-clear");
            setTimeout(function () {
              localStorage.clear();
            }, 0);
          }
        });

        // Store and load events
        vmEditor.on("storage:load", function (e) {
          console.log("Loaded ", e);
        });
        vmEditor.on("storage:store", function (e) {
          console.log("Stored ", e);
        });

        // Do stuff on load
        vmEditor.on("load", function () {
          const $ = grapesjs.$;

          // Load and show settings and style manager
          const openTmBtn = pn.getButton("views", "open-tm");
          openTmBtn && openTmBtn.set("active", 1);
          const openSm = pn.getButton("views", "open-sm");
          openSm && openSm.set("active", 1);

          // Remove trait view
          pn.removeButton("views", "open-tm");

          // Add and beautify tooltips
          [
            ["sw-visibility", "Show Borders"],
            ["preview", "Preview"],
            ["fullscreen", "Fullscreen"],
            ["export-template", "Export"],
            ["undo", "Undo"],
            ["redo", "Redo"],
            ["gjs-open-import-webpage", "Import"],
            ["canvas-clear", "Clear canvas"],
          ].forEach(function (item) {
            pn.getButton("options", item[0]).set("attributes", {
              title: item[1],
              "data-tooltip-pos": "bottom",
            });
          });
          [
            ["open-sm", "Style Manager"],
            ["open-layers", "Layers"],
            ["open-blocks", "Blocks"],
          ].forEach(function (item) {
            pn.getButton("views", item[0]).set("attributes", {
              title: item[1],
              "data-tooltip-pos": "bottom",
            });
          });
          var titles = document.querySelectorAll("*[title]");

          for (var i = 0; i < titles.length; i++) {
            var el = titles[i];
            var title = el.getAttribute("title");
            title = title ? title.trim() : "";
            if (!title) break;
            el.setAttribute("data-tooltip", title);
            el.setAttribute("title", "");
          }

          // Add Settings Sector
          const traitsSector = $(
            '<div class="gjs-sm-sector no-select">' +
              '<div class="gjs-sm-sector-title"><span class="icon-settings fa fa-cog"></span> <span class="gjs-sm-sector-label">Settings</span></div>' +
              '<div class="gjs-sm-properties" style="display: none;"></div></div>'
          );
          const traitsProps = traitsSector.find(".gjs-sm-properties");
          traitsProps.append($(".gjs-trt-traits"));
          $(".gjs-sm-sectors").before(traitsSector);
          traitsSector.find(".gjs-sm-sector-title").on("click", function () {
            const traitStyle = traitsProps.get(0).style;
            const hidden = traitStyle.display == "none";
            if (hidden) {
              traitStyle.display = "block";
            } else {
              traitStyle.display = "none";
            }
          });
        });
        resolve(vmEditor);
      });
    },
  },
  async mounted() {
    this.initialize();
  },
});
</script>

<style lang="scss" scoped>
.app-wrap {
  height: 100%;
  width: 100%;
  display: flex;
}
.editor-wrap {
  width: 100%;
  height: 100%;
}
</style>
