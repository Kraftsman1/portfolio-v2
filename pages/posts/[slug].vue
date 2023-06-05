<script setup lang="ts">
import { type Post } from "~/types/Post";
import BlockContent from "~/components/BlockContent.vue";

const route = useRoute('posts-slug');

const query = groq`*[ _type == "post" && slug.current == $slug]{
    title,
    mainImage,
    body,
    _createdAt,
    slug,
    "author": author->{name},
    categories[]->{_id, title}
}[0]`;
const { data: post } = await useSanityQuery<Post>(query, {
    slug: route.params.slug,
});

console.log(post);
</script>
<script lang="ts">
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    components: { BlockContent },
};
</script>
<template>
    <Header />

    <main class="mt-10">

        <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style="height: 24em;">
            <div class="absolute left-0 bottom-0 w-full h-full z-10"
                style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
            <img v-if="post.mainImage" :src="$urlFor(post.mainImage).width(1920).url()"
                class="absolute left-0 top-0 w-full h-full z-0 object-cover" alt="Cover image" />
            <div class="p-4 absolute bottom-0 left-0 z-20">
                <span v-for="category in post.categories" :key="category._id"
                    class="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                    {{ category.title }}
                </span>
                <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                    {{ post.title }}
                </h2>
                <div class="flex mt-3">
                    <img src="https://randomuser.me/api/portraits/men/97.jpg"
                        class="h-10 w-10 rounded-full mr-2 object-cover" />
                    <div>
                        <p class="font-semibold text-gray-200 text-sm">{{ post.author.name }}</p>
                        <p class="font-semibold text-gray-400 text-xs"> {{ formatDate(post._createdAt) }} </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">


            <p class="pb-6">
                <BlockContent :blocks="post.body" />
            </p>

        </div>
    </main>
</template>