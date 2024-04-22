<template>
  <div class="post-card">
    <div class="title-section">
      <p>Written by Abdullah Mustapha on 22/04/2024</p>
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
      <h1>VueJS Vs. ReactJS</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minima
        tenetur architecto error reprehenderit qui consectetur necessitatibus
        beatae aliquid obcaecati, iusto id officiis aliquam animi fugit, magnam
        harum culpa unde. Labore in iste amet repudiandae optio aspernatur
        commodi asperiores magni.
      </p>
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
