<template>
  <v-menu offset-y offset-x right max-width="360px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-btn text color="primary" small absolute right> view all </v-btn>
            <v-list two-line>
              <template v-for="(message, index) in notifications">
                <v-subheader
                  v-if="message.header"
                  :key="message.header"
                  v-text="message.header"
                ></v-subheader>

                <v-list-item
                  v-else
                  link
                  :key="message.subtitle && index + index"
                  :color="message.read ? 'error' : 'success lighten-4'"
                >
                  <v-list-item-avatar>
                    <v-img :src="message.avatar"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-subtitle
                      class="text-wrap"
                      v-html="message.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Notifications",
  data: () => ({
    notifications: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        read: true,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        read: true,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; requested to join <b>Mens Group</b></span>`,
        read: false,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        read: false,
      },
      { header: "Yesterday" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        read: true,
      },
    ],
  }),
  watch: {},
  methods: {},
});
</script>

<style lang="scss" scoped></style>
