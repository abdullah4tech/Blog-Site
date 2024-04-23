<script setup>

defineProps({
  post: {
    type: Object,
    required: true
  }
})


const emit = defineEmits(['get-id'])
const getId = (id) => {
  emit('get-id', id);
}

</script>

<template>
  <div class="post-card">
    <button @click="getId(post.id)">Click</button>
    <div class="title-section">
      <p>Written by {{ post.author }} on {{ post.created_at }}</p>
      <div class="icons">
        <button class="shape">
          <span class="material-symbols-outlined"> delete_forever </span>
        </button>
        <button class="shape">
          <span class="material-symbols-outlined">
            bookmark
            <!-- bookmark_added -->
          </span>
        </button>
      </div>
    </div>
    <div class="post-section">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped>
.post-card {
  background-color: rgb(255, 255, 255);
  position: relative;
  margin: 20px;
  width: 40em;
  box-shadow: 0 0 20px 0 #bdbabc;
  border-radius: 20px;
}

.title-section {
  display: flex;
  padding: 15px;
  color: white;
  font-size: 0.8rem;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: rgb(53, 106, 221);
}

.post-section {
  padding: 20px;
}

.post-section h1 {
  margin-bottom: 15px;
}

.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.shape span {
  padding: 5px;
  font-size: 1.5em;
}

.shape:first-child {
  color: red;
}

.shape:nth-child(2) {
  color: rgb(4, 153, 4);
}

.shape {
  background-color: white;
  border-radius: 20px;
  border: none;
  cursor: pointer;
}

.shape:hover {
  transform: scale(1.2);
}
</style>
