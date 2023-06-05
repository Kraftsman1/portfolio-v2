<script>

export default {
    name: 'Card',
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}

</script>
<template>

    <div v-if="post" class="mx-auto max-w-md rounded-lg shadow shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
        <img :src="$urlFor(post.mainImage).width(500).height(300).url()" class="aspect-video w-full object-cover transition-all duration-400 hover:scale-110"
            alt="main image" />
        <div class="p-4">
            <p class="mb-1 text-sm text-primary-500">{{ post.author.name }} • <time>{{ formatDate(post._createdAt) }}</time></p>
            <h3 class="text-xl font-medium text-gray-900">{{ post.title }}</h3>
            <p class="mt-1 text-gray-500">Sailboat UI helps streamline software projects, sprints, tasks, and bug tracking.</p>
            <div class="mt-4 flex gap-2 justify-between">
                <span v-for="category in post.categories" :key="category._id"
                    class="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                    {{ category.title }}
                </span>
                <NuxtLink :to="`/posts/${post.slug.current}`" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center inline-flex items-center">Read More</NuxtLink>
            </div>
        </div>
    </div>


</template>