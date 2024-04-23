<script setup>
import { reactive } from 'vue';

const state = reactive({
  title: '',
  body: ''
})

// const VaidCheck = computed(() => {
//   return state.title === '' || state.body === '';
// })
const submit = () => {
  console.log(state.title, state.body);
}

</script>


<template>
  <div class="container">
    <form @submit.prevent="submit">
      <h2>Create a new post</h2>
      <div class="input-field">
        <label>Post Title</label>
        <input type="text" v-model="state.title">
      </div>
      <div class="input-field">
        <label>Post Body</label>
        <textarea v-model="state.body" cols="30" rows="10"></textarea>
      </div>
      <button>Add</button>
    </form>
  </div>
</template>


<style scoped>

  .container{
    padding: 50px;
    background-color: rgb(255, 255, 255);
    position: relative;
    margin: 20px;
    width: 40em;
    box-shadow: 0 0 20px 0 #bdbabc;
    border-radius: 20px;
  }
  form{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  input{
    padding: 10px;
    border: 1px solid #555;
    height: 2.4em;
    border-radius: 6px;
  }

  label{
    font-weight:bold;
    color: rgb(88, 88, 88);
  }

  textarea{
    border: 1px solid #555;
    padding: 10px;
    resize: none;
    border-radius: 6px;
  }

  .input-field{
    display: flex;
    flex-direction: column;
  }


  button{
    text-align: center;
    height: 40px;
    border-radius: 6px;
    background-color: rgb(53, 106, 221);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover{
    background-color: rgb(77, 116, 201);
  }
  button:active{
    background-color: rgb(75, 102, 160);
  }

</style>