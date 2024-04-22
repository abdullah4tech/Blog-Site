<script setup>
import NewPost from '@/components/NewPost.vue';
</script>


<template>
  <Wrapper>
    <NewPost />
  </Wrapper>
</template>

<style scoped>
Wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>