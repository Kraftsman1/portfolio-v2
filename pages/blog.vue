<template>
    <div>
        <Header />

        <div v-for="post in posts" :key="post._id">
            {{ post.title }}
        </div>

    </div>
</template>

<script setup>

const query = groq`*[_type == "post"]`;
const posts = useSanityQuery(query);
console.log(posts)

</script>

