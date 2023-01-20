<script>
import { store } from './store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppLoader from './components/AppLoader.vue';

export default{
    name: "App",
    components: {
    AppHeader,
    AppMain,
    AppLoader
},
    data() {
        return {
            store,
            loading: false
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
          this.loading = true;
            axios.get(`${this.store.apiUrl}/api/projects`).then(resp => {
                this.store.projects = resp.data.results;
                this.loading = false;
            });
        }
    },
}
</script>

<template>
  <AppHeader/>

  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
