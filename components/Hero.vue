<template>
    <div class="w-full h-screen relative bg-black">
        <div class="z-50 top-0 sticky transparent">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
                <img src="/image/logo.png" alt="portfolio logo" class="w-1/6 h-auto bg-gray-400" />

                <nav>
                    <ul class="md:flex items-center justify-between text-base text-gray-400 md:pt0">
                        <li v-for="page in navItems" :key="page.path" class="inline-block py-2 px-4">
                            <nuxt-link :to="page.path">{{ page.name }}</nuxt-link>
                        </li>
                    </ul>
                </nav>
                <a class="group relative inline-block focus:outline-none focus:ring" href="#">
                    <span
                        class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span
                        class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-gray-400 group-active:text-opacity-75">
                        Get In Touch
                    </span>
                </a>
            </div>
        </div>
        <main class='w-full h-screen relative'>
            <img src='/image/iamdeen.jpg' alt="farcry-6-hero" class='md:visible absolute object-cover w-full h-full transition delay-150 duration-300 ease-in-out' loading="lazy" />
            <img src='/image/iamdeen2.png' alt="farcry-6-hero" class='invisible lg:visible absolute object-cover w-full h-full transition delay-150 duration-300 ease-in-out' />
            <div class="w-full h-full absolute z-[10] bg-black opacity-50"></div>
            <section class="absolute w-full h-full z-[20] text-gray-400">
                <section class="flex flex-col justify-center items-center w-full h-full">
                    <section class='text-left'>
                        <h1 class="text-bn text-4xl md:text-8xl uppercase tracking-widest">Asigri Shamsu-Deen Al-Heyr</h1>
                        <h1 class="text-bn text-xl md:text-2xl tracking-widest">Fullstack + Support Engineer | ISO 27001 Lead Auditor</h1>
                    </section>
                    <!-- <section class='my-5'>
                        <button class='bg-[#faa937] text-[#040000] px-4 py-2 text-xl rounded uppercase tracking-widest'>Buy
                            Now | $69.99</button> flex justify-center lg:justify-start
                    </section> -->
                </section>
            </section>
        </main>

    </div>
</template>

<script lang='ts'>
import navItems from '~/navitems'

export default {
    name: 'Hero',
    data() {
        return {
            navItems: navItems,
        }
    }
}

</script>