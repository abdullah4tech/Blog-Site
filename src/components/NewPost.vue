
<template>
  <div class="container">
    <form>
      <h2>Create a new post</h2>
      <label>Post Title</label>
      <input type="text">
      <label>Post Body</label>
      <textarea name="post-body" id="" cols="30" rows="10"></textarea>
      <button>Add</button>
    </form>
  </div>
</template>


<style scoped>

  .container{
    padding: 30px;
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
    padding: 2px;
    border: 1px solid #555;
    height: 2em;
    border-radius: 3px;
  }
</style>