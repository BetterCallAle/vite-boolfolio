<script>
export default{
    name: 'ProjectCard',
    props:{
        project: Object
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
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ textTruncated }}</p>
                <a href="" class="btn btn-primary">Visualizza</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>