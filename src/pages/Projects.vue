<script>
import {store} from '../store';
import ProjectCard from '../components/ProjectCard.vue';
import AppLoader from '../components/AppLoader.vue';
import axios from 'axios';

export default{
    name: "Projects",
    components: {
        ProjectCard,
        AppLoader
    },
    data() {
        return {
            store,
            currentPage: 1,
            lastPage: null,
            projects: [],
            totalProjects: null,
            types: [],
            typeId: "",
            loading: false
        }
    },
    created(){
        this.getProjects(this.currentPage);
        this.getTypes()
    },
    methods:{
        getProjects(page){
            //Set the loader true
            this.loading = true;

            //Set the page params
            const option = {
                params: {
                    page,
                    ...this.typeId && {type_id: this.typeId}
                }
            }

            // Do the axios call
            axios.get(`${this.store.apiUrl}/api/projects`, option).then((resp) =>{
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalProjects = resp.data.results.total;
                this.projects = resp.data.results.data;
                this.loading = false
            })
        },
        getTypes(){
            axios.get(`${this.store.apiUrl}/api/types`).then(resp =>{
                this.types = resp.data.results
            })
        }
    }
}
</script>

<template>
    <section id="projects" class="py-5 mt-4">
        <div class="container">

            <h1 class="text-center mb-5">Tutti i nostri progetti</h1>

            <AppLoader v-if="loading"/>

            <div v-else class="projects-wrapper">
                <div class="projects-top d-flex justify-content-between mb-4">
                    <!-- Filter -->
                    <form @submit.prevent="getProjects(1)" action="" class="d-flex">
                        <select class="form-select" v-model="typeId">
                            <option value="">Tutti</option>
                            <option v-for="singleType in types" :key="singleType.id" :value="singleType.id">{{ singleType.name }}</option>
                        </select>

                        <button type="submit" class="btn btn-danger ms-2">Filtra</button>
                    </form>
                    <!-- /Filter -->
                    <p class="text-end text-secondary">Trovati <span class="fw-bold text-black">{{ totalProjects }}</span> progetti</p>
                </div>
    
                <div v-if="projects.length > 0" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    <ProjectCard v-for="project in projects" :key="project.id" :project="project" :apiUrl="store.apiUrl" />
                </div>

                <div v-else class="text-center">
                    <h2>Nessun progetto trovato</h2>
                </div>
    
               <!-- Pagination -->
               <div v-if="lastPage > 1" class="pagination d-flex justify-content-center mt-5">
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


        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>