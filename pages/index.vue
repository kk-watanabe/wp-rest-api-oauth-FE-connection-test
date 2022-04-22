<script setup lang="ts">
import { Buffer } from 'buffer'

const title = "WP REST API OAuth test";
const route = useRoute()
const config = useRuntimeConfig();
const wpData = `${config.WP_USER_NAME}:${config.WP_USER_PASSWORD}`;
const option = {
  headers: {
    Authorization: `Basic ${Buffer.from(wpData).toString('base64')}`,
  },
};
const path = `${config.WP_REST_API_BASE_URL}/wp/v2/blog`;
const { data: blogs }: { data: any } = await useFetch(path, option);
let previewBlog;

if (route.query) {
  const { p, post_type } = route.query;
  const { data: blogPreview }: { data: any } = await useFetch(`${config.WP_REST_API_BASE_URL}/wp/v2/${post_type}/${p}`, option);
  previewBlog = blogPreview;
}

onMounted(() => {
  console.log("Home onMounted", route);
  console.log(blogs.value);
  console.log(previewBlog);
});
</script>

<template>
  <Html lang="ja">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="`This is ${title} page`" />
    </Head>
  </Html>

  <div>
    <div v-for="blog in blogs" :key="blog.id">
      {{ blog.slug }}-{{ blog.title.rendered }}
    </div>

    <div style="margin-top: 20px">下書き</div>
    <div>{{ previewBlog.slug }}-{{ previewBlog.title.rendered }}</div>
  </div>
</template>
