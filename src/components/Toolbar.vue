<template>
  <div>
    <v-navigation-drawer
      v-model="drawerRight"
      fixed
      right
      disable-resize-watcher
    >
      <v-toolbar
        flat
        color="transparent"
      >
        <v-list class="pa-0">
          <v-list-tile
            avatar
          >
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-spacer/>
        <v-btn
          @click.stop="drawerRight = !drawerRight"
          icon
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.route"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="transparent"
      dark
      fixed
      flat
      app
    >
      <v-toolbar-title>Home For Now</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon
        @click.stop="drawerRight = !drawerRight"
      />
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawerRight: false,
      items: [
        {
          title: 'About',
          icon: 'short_text',
          route: '/about',
        },
        {
          title: 'Contact',
          icon: 'contact_support',
          route: '/contact',
        },
        {
          title: 'Terms of Use',
          icon: 'list',
          route: '/about',
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
