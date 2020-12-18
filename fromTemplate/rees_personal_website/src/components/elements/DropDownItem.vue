<template>
    <li :class="{ 'is-active': isActive }">

        <div class="dropdown-header dropdown-emboss" @click="isActive ? closeItem() : openItem()">
            <!-- <span class="h6 m-0"> {{title}}</span> -->
            <i-arrow-down />
        </div>

        <div ref="content" class="accordion-content text-xs">
            <p>
                <slot />
            </p>
        </div>
    </li>
</template>



<script>

import IArrowDown from '@/components/elements/ArrowDown.vue'

export default {

    props: {
        active: Boolean,
        title: {
            type: String,
            default: ''
        }
    },
    components: {
        IArrowDown
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        openItem() {
            this.$refs.content.style.maxHeight = this.$refs.content.scrollHeight + 'px'
            this.isActive = true
        },
        closeItem() {
            this.$refs.content.style.maxHeight = null
            this.isActive = false
        }

    },
    mounted() {
        this.isActive && this.openItem()
    }
}
</script>