<template>
  <div class="pages-wrp">
    <v-btn color="primary" @click="addPage">Add new page</v-btn>
    <div class="pages">
      <div
        v-for="page in pages"
        :key="page.id"
        :class="{ page: 1, selected: isSelected(page) }"
        @click="selectPage(page.id)"
      >
        {{ page.get("name") || page.id }}
        <span
          v-if="!isSelected(page)"
          @click="removePage(page.id)"
          class="page-close"
          >&Cross;</span
        >
      </div>
    </div>
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
}
.add-page {
  background: #444444;
  color: white;
  padding: 5px;
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;
  margin-bottom: 10px;
}
.page {
  background-color: #444;
  color: white;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 2px;
  cursor: pointer;

  &.selected {
    background-color: #706f6f;
  }
}

.page-close {
  opacity: 0.5;
  float: right;
  background-color: #2c2c2c;
  height: 20px;
  display: inline-block;
  width: 17px;
  text-align: center;
  border-radius: 3px;

  &:hover {
    opacity: 1;
  }
}
</style>
