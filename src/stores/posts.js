import { defineStore } from "pinia";

const usePostStore = defineStore('post-store', {
  // we can say this act like data in options api
  state: () => ({
    posts: [
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
  }),

  // This acts like computed in options api
  getters: {
    sorted: (state) => state.posts.sort((a,b) => new Date(b.created_at) - new Date(a.created_at)),
    saved: (state) => state.posts
    .filter((p) => p.is_saved)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  },

  // While this acts like methods in options api
  actions: {
    addPost(post) {
      this.posts.push({
        id: this.posts.length +1,
        title: post.title,
        body: post.body,
        author: post.author,
        created_at: new Date().toLocaleDateString(),
        is_saved: false
      })
    },
    savePost(id){
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved 
    },
    deletePost(id){
      this.posts = this.posts.filter((p) => p.id !== id)
    }
  }
})

export default usePostStore