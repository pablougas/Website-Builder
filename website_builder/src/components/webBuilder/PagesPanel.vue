<template>
  <div class="pages-wrp">
    <v-btn color="primary" @click="addPage">Add page</v-btn>
    <v-list rounded class="pages" dense color="#333">
      <v-list-item
        v-for="page in pages"
        :key="page.id"
        class="mt-2"
        :class="{ page: 1, selected: isSelected(page) }"
        @click="selectPage(page.id)"
      >
        <v-list-item-content>
          {{ page.get("name") || page.id }}
        </v-list-item-content>
        <v-list-item-action
          v-if="!isSelected(page)"
          @click="removePage(page.id)"
        >
          <v-icon>mdi-trash-can</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Page } from "../../store/modules/website/types";
import { Editor } from "grapesjs";

export default Vue.extend({
  props: {
    editor: {
      type: Object as () => Editor | null,
    },
    pages: {
      type: Array as () => Page[],
      required: true,
    },
  },
  methods: {
    isSelected(page: Page) {
      const pm = this.editor?.Pages;
      if (pm) {
        return pm.getSelected()?.id == page.id;
      }
    },
    selectPage(pageId: string | number) {
      const pm = this.editor?.Pages;
      if (pm) {
        return pm.select(pageId.toString());
      }
    },
    removePage(pageId: string | number) {
      const pm = this.editor?.Pages;
      if (pm) {
        return pm.remove(pageId.toString());
      }
    },
    addPage() {
      const pm = this.editor?.Pages;
      if (pm) {
        const len = pm.getAll().length;
        pm.add({
          name: `New Page ${len + 1}`,
          component: "<div>New page</div>",
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.pages-wrp,
.pages {
  font-family: Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
}
.pages-wrp {
  background: #333;
  padding: 5px;
  width: 240px;
}
.page {
  background-color: #444;
  color: white;
  cursor: pointer;

  &.selected {
    background-color: #706f6f;
  }
}
</style>
