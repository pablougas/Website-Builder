<template>
  <div class="pages-wrp">
    <v-btn color="primary" @click="dialog = true">Add page</v-btn>
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
          @click.stop="deletePage(page)"
        >
          <v-icon>mdi-trash-can</v-icon>
        </v-list-item-action>
      </v-list-item>
      <li>
        Simple Block
      </li>
    </v-list>
    <v-dialog v-model="dialog" width="400">
      <v-card width="400">
        <v-card-title v-if="remove">
          Are you sure?
        </v-card-title>
        <v-card-title v-else>
          Add New Page
          <v-spacer></v-spacer>
          <v-btn icon color="info" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col v-if="remove">
                You will still need to publish these changes for this page to be fully deleted. 
                Until then, you will still be able to "undo" this action. 
                <br />
                <br />Don't forget to remove any links to your removed page.
              </v-col>
              <v-col class="d-flex" v-else>
                <v-text-field
                  dense
                  v-model="pageName"
                  label="Name"
                  type="text"
                  outlined
                >
                  <template v-slot:append>
                    <v-icon :color="valid ? 'success' : 'error'">
                      mdi-check
                    </v-icon>
                  </template>
                </v-text-field>
                <v-btn
                  color="success"
                  class="ml-3"
                  :disabled="!valid"
                  @click="addPage"
                >
                  Save
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions v-if="remove && selectedPage">
          <v-spacer></v-spacer>
          <v-btn text class="error" @click="removePage(selectedPage.id)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  data: () => ({
    dialog: false,
    remove: true,
    pageName: "",
    selectedPage: null as null | Page,
  }),
  computed: {
    valid(): boolean {
      const nameExists = this.pages.find(
        (page: Page) =>
          page.attributes.name.toLowerCase().trim() ==
          this.pageName.toLowerCase().trim()
      );
      return !nameExists && this.pageName?.length > 3;
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
    deletePage(page: Page) {
      this.remove = true;
      this.selectedPage = page
      this.dialog = true;
    },
    removePage(pageId: string | number) {
      console.log(pageId)
      const pm = this.editor?.Pages;
      if (pm) {
        this.closeDialog()
        return pm.remove(pageId.toString());
      } 
    },
    addPage() {
      const pm = this.editor?.Pages;
      if (pm) {
        pm.add({
          name: this.pageName.toLowerCase(),
          component: `<div>${this.pageName}</div>`,
        });
      } 
      this.closeDialog()
    },
    closeDialog() {
      console.log('CLOSING DIALOG!')
      this.pageName = "";
      this.selectedPage = null;
      this.dialog = false;
    }
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
