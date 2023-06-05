<script setup lang="ts">

import { type Post } from '~/types/Post';

const query = groq`*[_type == "post" && defined(slug.current) ] | order(_createdAt desc){
    title,
    mainImage,
    body,
    _createdAt,
    slug,
    "author": author->{name},
    categories[]->{_id, title}
    }`;
const { data: posts } = await useSanityQuery<Post[]>(query);
console.log(posts)

definePageMeta({
    title: 'Blog'
});

</script>

<template>
    <div>
        <Header />




        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap m-4">
                    <Card v-if="posts" v-for="post in posts" :key="post._id" :post="post" />
                </div>
            </div>
        </section>

    </div>
</template>



