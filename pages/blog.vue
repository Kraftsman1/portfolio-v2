<script setup lang="ts">

import { type Post } from '~/types/Post';

const query = groq`*[_type == "post" && defined(slug.current) ] | order(_createdAt desc)`;
const { data: posts } = await useSanityQuery<Post[]>(query);
console.log(posts)

</script>

<template>
    <div>
        <Header />

        <div v-if="posts" v-for="post in posts" :key="post._id">
            {{ post.title }}
        </div>
        <p v-if="posts?.length === 0">
            
        </p>

    </div>
</template>



