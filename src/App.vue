<script>
import { store } from './store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default{
    name: "App",
    components: { 
      AppHeader 
    },
    data() {
        return {
            store
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.store.apiUrl}/api/projects`).then(resp => {
                this.store.projects = resp.data.results;
            });
        }
    },
}
</script>

<template>
  <AppHeader/>
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
