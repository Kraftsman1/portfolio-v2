<template>
    <div class="w-full h-screen relative bg-black">
        <Header />
        <div class="w-full h-full absolute z-[10] bg-black opacity-50"></div>
        <img src='/image/iamdeen.jpg' alt="farcry-6-hero"
            class='md:visible absolute object-cover w-full h-full transition delay-150 duration-300 ease-in-out'
            loading="lazy" />
        <img src='/image/iamdeen2.png' alt="farcry-6-hero"
            class='invisible lg:visible absolute object-cover w-full h-full transition delay-150 duration-300 ease-in-out' />

        <main class='w-full h-screen relative'>
            <section class="absolute w-full h-full z-[20] text-white">
                <section class="flex flex-col justify-center items-center w-full h-full">
                    <section class='text-left px-10'>
                        <h1 v-motion="{
                            initial: {
                                y: 50,
                                opacity: 0
                            },
                            enter: {
                                y: 0,
                                opacity: 1
                            }
                        }" class="text-bn text-3xl md:text-7xl uppercase tracking-widest py-3">
                            Asigri Shamsu-Deen Al-Heyr</h1>
                        <h2 v-motion-slide-visible-top :delay="250" class="text-bn text-xl md:text-2xl tracking-widest py-3">
                            Fullstack + Support Engineer | ISO 27001
                            Lead Auditor</h2>
                        <section class='flex gap-5 py-3'>
                            <a href="http://www.github.com/Kraftsman1" target="_blank"><Icon name="uil:github" color="white" size="50" /></a>
                            <a href="https://www.linkedin.com/in/kraftsman1/" target="_blank"><Icon name="uil:linkedin" color="white" size="50" /></a>
                            <a href="https://twitter.com/the_Spartan_Dev" target="_blank"><Icon name="uil:twitter" color="white" size="50" /></a>
                        </section>

                    </section>

                </section>
            </section>
        </main>

    </div>
</template>

<script lang='ts'>

export default {
    name: 'Hero',
}

</script>
