<template>
    <div class="w-full h-full z-50 top-0 sticky transparent">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
            <img src="/image/logo.png" alt="portfolio logo" class="w-20 h-auto" />
            <div>
                <nav>
                    <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt0">
                        <li v-for="page in navItems" :key="page.path" class="inline-block py-2 px-4">
                            <nuxt-link :to="page.path">{{ page.name }}</nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <a class="group relative inline-block focus:outline-none focus:ring" href="#">
                <span
                    class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span
                    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                    Get In Touch
                </span>
            </a>
        </div>
    </div>
</template>

<script lang='ts'>
import navItems from '~/navitems'

export default {
    name: 'Header',
    data() {
        return {
            navItems: navItems,
        }
    }
}

</script>