<template>
    <fragment>
        <h1> Home </h1>
        <profile></profile>
    </fragment>
</template>


<script>
import Profile from '@/components/Profile.vue'


export default {
    name: 'Home',
    components: {
        Profile

    },
    data() {
        return {

        }
    }
}
</script>