<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>
        Subtitle Stats
      </v-toolbar-title>

    </v-app-bar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>

import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home
  },

  data() {
    return {
      
    }
  },
};
</script>
