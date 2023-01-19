<script>
import {store} from '../store';
import ProjectCard from './ProjectCard.vue';

export default{
    name: "AppMain",
    data() {
        return {
            store,
        };
    },
    components: { ProjectCard }
}
</script>

<template>
    <section id="projects" class="py-5">
        <div class="container">

            <h1 class="text-center mb-5">Tutti i nostri progetti</h1>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <ProjectCard v-for="project in store.projects" :key="project.id" :project="project" :apiUrl="store.apiUrl" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>