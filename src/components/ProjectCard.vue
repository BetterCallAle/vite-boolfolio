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
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card h-100">
            <div class="img-wrapper">
                <img  v-if="project.cover_path" :src="apiUrl + '/storage/' + project.cover_path" :alt="`coved di ${project.title}`" class="card-img-top">
                <img v-else src="https://www.svaghiamo.it/wp-content/uploads/2016/09/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" alt="Nessuna immagine disponibile" class="card-img-top">
            </div>
            <div class="card-body">
                <h6 class="text-center text-primary">{{ project.type ? project.type.name : 'Nessuna Tipologia' }}</h6>
                <h5 class="card-title">{{ project.title }}</h5>
                <div class="technologies my-2">
                    <span v-if="project.technologies.length > 0" class="text-secondary me-2" v-for="technology in project.technologies" :key="technology.id">#{{ technology.name }}</span>
                    <span v-else class="text-secondary">No technologies</span>
                </div>
                <p class="card-text">{{ textTruncated }}</p>
                <a href="" class="btn btn-primary">Visualizza</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>