<template>
  <v-menu offset-y offset-x max-width="360px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-message-processing</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <v-row justify="end" no-gutters>
          <v-col cols="12">
            <v-btn color="primary" text small absolute right>View All</v-btn>
            <v-list three-line>
              <template v-for="(message, index) in messages">
                <v-subheader
                  v-if="message.header"
                  :key="message.header"
                  v-text="message.header"
                ></v-subheader>

                <v-list-item
                  v-else
                  link
                  :key="message.title && index + index"
                  :color="message.read ? 'error' : 'success lighten-4'"
                >
                  <v-list-item-avatar>
                    <v-img :src="message.avatar"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      v-html="message.title"
                    ></v-list-item-title>
                    <v-list-item-subtitle
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
  name: "Messages",
  data: () => ({
    messages: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        read: false,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        read: false,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        read: true,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        read: true,
      },
      { header: "Yesterday" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        read: true,
      },
    ],
  }),
  watch: {},
  methods: {},
});
</script>

<style lang="scss" scoped></style>
