<script>
export default{
    name: 'ProjectCard',
    props:{
        project: Object,
        apiUrl: String
    },
    data(){
        return{
            maxDescriptionLength : 100
        }
    },
    computed:{
        textTruncated(){
            if(this.project.description && this.project.description.length > this.maxDescriptionLength){
                return this.project.description.substring(0, this.maxDescriptionLength) + "..."
            } else {
                return this.project.description
            }
        },
        projectImg(){
            return this.project.cover_path ? `${this.apiUrl}/storage/${this.project.cover_path}` : 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg';
        },
        imgAlt(){
            return this.project.cover_path ? `Cover di ${this.project.title}` : 'Nessuna immagine disponibile';
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card h-100">
            <div class="img-wrapper">
                <img  :src="projectImg" :alt="imgAlt" class="card-img-top">
            </div>
            <div class="card-body">
                <h6 class="text-center text-primary">{{ project.type ? project.type.name : 'Nessuna Tipologia' }}</h6>
                <h5 class="card-title">{{ project.title }}</h5>
                <div class="technologies my-2">
                    <span v-if="project.technologies.length > 0" class="text-secondary me-2" v-for="technology in project.technologies" :key="technology.id">#{{ technology.name }}</span>
                    <span v-else class="text-secondary">No technologies</span>
                </div>
                <p v-if="project.description" class="card-text">{{ textTruncated }}</p>
                <router-link :to="{name: 'project-page', params: {slug: project.slug}}" class="btn btn-primary">Visualizza</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>