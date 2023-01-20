<script>
export default{
    name : 'AppHeader',
    data(){
        return{
            navLinks: [
                {
                    linkName : 'Home',
                    routeName: 'home'
                },
                {
                    linkName : 'Su di noi',
                    routeName: 'about'
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link :to="{ name: 'home' }" class="navbar-brand text-danger">BOOLFOLIO</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse justify-content-end d-flex" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" v-for="(navLink, index) in navLinks" :key="index">
                            <router-link :to="{ name : navLink.routeName }" class="nav-link" :class="{'active' : $route.name === navLink.routeName}">
                                {{ navLink.linkName }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

</style>