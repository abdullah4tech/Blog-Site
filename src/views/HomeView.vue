<script setup>
import PostItem from '@/components/PostItem.vue';


const posts = [
  {
    id: 1,
    title: 'Reactivity',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minima tenetur architecto error reprehenderit qui consectetur necessitatibus beatae aliquid obcaecati, iusto id officiis aliquam animi fugit, magnam harum culpa unde. Labore in iste amet repudiandae optio aspernatur commodi asperiores magni.',
    author: 'John Deo',
    created_at: '11/06/2024',
    is_saved: false
  },
  {
    id: 2,
    title: 'State Management',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minima tenetur architecto error reprehenderit qui consectetur necessitatibus beatae aliquid obcaecati, iusto id officiis aliquam animi fugit, magnam harum culpa unde. Labore in iste amet repudiandae optio aspernatur commodi asperiores magni.',
    author: 'Abdullah Mustapha',
    created_at: '22/04/2024',
    is_saved: false
  },
  {
    id: 3,
    title: 'Lifecyle Of Hooks',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minima tenetur architecto error reprehenderit qui consectetur necessitatibus beatae aliquid obcaecati, iusto id officiis aliquam animi fugit, magnam harum culpa unde. Labore in iste amet repudiandae optio aspernatur commodi asperiores magni.',
    author: 'Tobi',
    created_at : '21/01/2024',
    is_saved: false
  },
  {
    id: 4,
    title: 'Vue Components',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minima tenetur architecto error reprehenderit qui consectetur necessitatibus beatae aliquid obcaecati, iusto id officiis aliquam animi fugit, magnam harum culpa unde. Labore in iste amet repudiandae optio aspernatur commodi asperiores magni.',
    author: 'abdullah4tech',
    created_at : '1/01/2024',
    is_saved: false
  }
]
</script>

<template>
  <section>
    <div v-for="post in posts" :key="post.id">
      <PostItem :post="post" @get-id="(id) => {
        console.log(id)
      }" />
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
</style>