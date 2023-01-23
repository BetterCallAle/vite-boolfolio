<script>
import {store} from '../store';
import axios from 'axios';
export default{
    name: 'ProjectPage',
    data(){
        return{
            store,
            project: {}
        }
    },
    created(){
        const currentSlug = this.$route.params.slug;
        axios.get(`${this.store.apiUrl}/api/projects/${currentSlug}`).then(resp => {
            if(resp.data.success){
                this.project = resp.data.results
            } else {
                this.$router.push({name: 'not-found'})
            }
        })
    },
    computed:{
        projectType(){
            return this.project.type ? this.project.type.name : 'Nessuna tipologia'
        },

        projectImg(){
            return this.project.cover_path ? `${this.store.apiUrl}/storage/${this.project.cover_path}` : 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg';
        },

        imgAlt(){
            return this.project.cover_path ? `Cover di ${this.project.title}` : 'Nessuna immagine disponibile';
        }
    }
}
</script>

<template>
  <section id="main-section" class="py-4">
    <div class="container">
      <div class="page-heading text-center">
            <h6 class="text-uppercase text-primary">{{ projectType }}</h6>
            <h1>{{ project.title }}</h1>
            <div class="technologies" v-if="project.technologies">
                <span v-for="technology in project.technologies" :key="project.technologies.id" class="me-2 text-secondary">#{{ technology.name }}</span>
            </div>
            <img :src="projectImg" :alt="imgAlt" class="mt-4"/>
       </div>
       <div class="page-main mt-4">
            <p>{{ project.description }}</p>
       </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
</style>
