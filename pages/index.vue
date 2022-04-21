<script setup lang="ts">
import { Buffer } from 'buffer'

const route = useRoute()
const config = useRuntimeConfig();
const data = `${config.WP_USER_NAME}:${config.WP_USER_PASSWORD}`;
const option = {
  headers: {
    Authorization: `Basic ${Buffer.from(data).toString('base64')}`,
  },
};
const { data: post } = await useFetch(`${config.WP_REST_API_BASE_URL}/wp/v2/blog` , option);
const title = "WP REST API OAuth test";

onMounted(() => {
  console.log("Home onMounted");
  console.log(post.value, option);
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
    test
  </div>
</template>
