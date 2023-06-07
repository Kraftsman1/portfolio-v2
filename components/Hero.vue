<template>
    <div class="w-full h-screen relative bg-black">
        <div class="w-full h-full absolute z-[10] bg-black opacity-50"></div>
        <img src='/image/iamdeen.jpg' alt="farcry-6-hero"
            class='md:visible absolute object-cover w-full h-full transition delay-150 duration-300 ease-in-out'
            loading="lazy" />
        <img src='/image/iamdeen2.png' alt="farcry-6-hero"
            class='invisible lg:visible absolute object-cover w-full h-full transition delay-150 duration-300 ease-in-out' />
        <Header />
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
                        }" class="text-bn text-3xl md:text-7xl uppercase tracking-widest">
                            Asigri Shamsu-Deen Al-Heyr</h1>
                        <h1 v-motion-slide-visible-top :delay="250" class="text-bn text-xl md:text-2xl tracking-widest">
                            Fullstack + Support Engineer | ISO 27001
                            Lead Auditor</h1>
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

export default {
    name: 'Hero',
}

</script>