<script>
export default{
    name: 'NotFound'
}
</script>

<template>
    <div class="container py-5">
        <h1 class="text-center">404 Pagina non trovata</h1>
        <p class="text-center">La pagina che cerchi: {{ $route.path }} non è stata trovata</p>
        <div class="text-center">
            <router-link :to="{ name: 'home' }" class="btn btn-primary">Torna alla pagina Home</router-link>
        </div>
    </div>
</template>