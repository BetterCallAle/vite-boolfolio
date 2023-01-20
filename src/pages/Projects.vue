<script>
import {store} from '../store';
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';

export default{
    name: "Projects",
    components: {
        ProjectCard 
    },
    data() {
        return {
            store,
            currentPage: 1,
            lastPage: null,
            projects: [],
            totalProjects: null
        }
    },
    created(){
        this.getProjects(this.currentPage);
    },
    methods:{
        getProjects(page){
            //Set the page params
            const option = {
                params: {
                    page
                }
            }

            axios.get(`${this.store.apiUrl}/api/projects`, option).then((resp) =>{
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalProjects = resp.data.results.total;
                this.projects = resp.data.results.data;
            })
        }
    }
}
</script>

<template>
    <section id="projects" class="py-5">
        <div class="container">

            <h1 class="text-center mb-5">Tutti i nostri progetti</h1>

            <p class="text-end text-secondary">Trovati <span class="fw-bold text-black">{{ totalProjects }}</span> progetti</p>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project" :apiUrl="store.apiUrl" />
           </div>

           <!-- Pagination -->
           <div class="pagination d-flex justify-content-center mt-5">
                <!-- Go to first page button -->
                <a class="btn btn-primary me-1" :class="{'disabled' : currentPage === 1 }" @click.prevent="getProjects(1)">
                    <i class="fa-solid fa-chevron-left"></i>
                    <i class="fa-solid fa-chevron-left"></i>
                </a>
                <!-- /Go to first page button -->

                <!-- Go to prev page button -->
                <a class="btn btn-primary" :class="{'disabled' : currentPage === 1 }" @click.prevent="getProjects(currentPage -1)">
                    <i class="fa-solid fa-chevron-left"></i>
                </a>
                <!-- /Go to prev page button -->

                <!-- Buttons with page numbers -->
                <div class="page-numbers">
                    <a class="btn btn-primary mx-1" :class="{'disabled' : currentPage === pageNumber}" v-for="(pageNumber, index) in lastPage" :key="index" @click.prevent="getProjects(pageNumber)">{{ pageNumber }}</a>
                </div>
                <!-- /Buttons with page numbers -->

                <!-- Go to next page button -->
                <a class="btn btn-primary" :class="{'disabled' : currentPage === lastPage}" @click.prevent="getProjects(currentPage +1)">
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
                <!-- /Go to next page button -->

                <!-- Go to last page button -->
                <a class="btn btn-primary ms-1" :class="{'disabled' : currentPage === lastPage }" @click.prevent="getProjects(lastPage)">
                    <i class="fa-solid fa-chevron-right"></i>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
                <!-- /Go to last page button -->
           </div>
           <!-- /Pagination -->

        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>