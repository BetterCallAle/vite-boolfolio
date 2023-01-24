<script>
import { store } from '../store';
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';

export default{
    name: 'ContactUs',
    components: {
        AppLoader
    },
    data(){
        return {
            store,
            formData: {
                name: '',
                email: '',
                message: ''
            },
            success: false,
            errors: {},
            loading: false,
        }
    },
    methods:{
        sendMessage(){
            this.success = false;
            this.loading = true;

            axios.post(`${this.store.apiUrl}/api/leads`, this.formData).then(resp =>{
                this.success = resp.data.success;
                if(this.success){
                    this.formData.name = '';
                    this.formData.email = '';
                    this.formData.message = '';
                    this.errors = {};
                } else {
                    this.errors = resp.data.errors;
                }

                this.loading = false;
            })
        }
    }
}
</script>

<template>
    <section id="contacts" class="py-5 mt-4">
        <div class="container">
            <h1 class="mb-3">Contattaci</h1>
            <AppLoader v-if="loading" />

            <div class="alert alert-success" v-if="success">
                <p>Il messaggio è stato inviato correttamente. Appena possibile ti risponderemo</p>
            </div>

            <form @submit.prevent="sendMessage()" action="">
                <div class="mb-3">
                    <label for="name">Nome</label>
                    <input type="text" id="name" class="form-control" :class="{'is-invalid' : errors.name}" v-model="formData.name">
                    <small v-if="errors.name" class="invalid-feedback">{{ errors.name[0] }}</small>
                </div>

                <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control" :class="{'is-invalid' : errors.email}" v-model="formData.email">
                    <small v-if="errors.email" class="invalid-feedback">{{ errors.email[0] }}</small>
                </div>

                <div class="mb-3">
                    <label for="message">Messaggio</label>
                    <textarea id="message" rows="10" class="form-control" :class="{'is-invalid' : errors.message}" v-model="formData.message"></textarea>
                    <small v-if="errors.message" class="invalid-feedback">{{ errors.message[0] }}</small>
                </div>

                <button type="submit" class="btn btn-primary me-2">Invia</button>
                <button type="reset" class="btn btn-danger">Resetta</button>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>