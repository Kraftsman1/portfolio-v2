<template>
    <div class="w-full fixed z-[50] p-5">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
            <img src="/image/logo.png" alt="portfolio logo" class="w-[80px] md:w-[200px] bg-white" />

            <nav>
                <ul class="md:flex items-center justify-between text-base uppercase text-white md:pt0">
                    <li v-for="page in navItems" :key="page.path"
                        class="inline-block py-2 px-4 uppercase text-bn text-xl tracking-widest nav-hover">
                        <NuxtLink :to="page.path">{{ page.name }}</NuxtLink>
                    </li>
                </ul>
            </nav>

            <a class="group relative inline-block focus:outline-none focus:ring" href="#">
                <span
                    class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span
                    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75">
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

<style>
.nav-hover {
    --b: 0.15em;
    /* the thickness of the line */
    --c: #ffae00;
    /* the color */

    color: #ffffff;
    padding-block: var(--b);
    background:
        linear-gradient(var(--c) 50%, #000 0) 0% calc(100% - var(--_p, 0%))/100% 200%,
        linear-gradient(var(--c) 0 0) 0% var(--_p, 0%)/var(--_p, 0%) var(--b) no-repeat;
    -webkit-background-clip: text, padding-box;
    background-clip: text, padding-box;
    transition: .3s var(--_s, 0s) linear, background-size .3s calc(.3s - var(--_s, 0s));
}

.nav-hover:hover {
    --_p: 100%;
    --_s: .3s;
}
</style>