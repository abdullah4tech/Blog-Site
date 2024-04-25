<script setup>
import PostItem from '@/components/PostItem.vue';
import usePostStore from '@/stores/posts';
import { ref } from 'vue';

const postStore = usePostStore()
const postFilter = ref('All Posts')

const setPostFilter = () => {
  postFilter.value = postFilter.value === 'All Posts' ? 'Saved Posts' : 'All Posts'
}

</script>

<template>
  <div class="header">
    <div>
      <h2>{{ postFilter }}</h2>
    </div>
    <button @click="setPostFilter">Show {{ postFilter === 'All Posts' ? 'Saved Posts' : 'All Posts' }}</button>
  </div>
  
  <section v-if="postFilter === 'All Posts'">
    <div v-for="post in postStore.sorted" :key="post.id">
      <PostItem :post="post" />
    </div>
  </section>

  <section v-if="postFilter === 'Saved Posts'">
    <div v-for="post in postStore.saved" :key="post.id">
      <PostItem :post="post" />
    </div>
  </section>
</template>

<style scoped>
section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header{
  display: flex;
  background-color: white;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
}

.header button{
  height: 3em;
  padding: 7px;
  border: none;
  border-radius: 6px;
  background-color: rgb(53, 106, 221);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.header button:hover{
  background-color: rgb(90, 140, 214);
  border-radius: 6px;
  transform: scale(1.05); 
}

.header button:active{
  transform: scale(1.2);
}

</style>