import Header from './components/Header';
import { SideBar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css'
import './global.css'

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/61289109?v=4", 
      name: "Carlos Cenci", 
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-08-13 20:00:00')
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://play-lh.googleusercontent.com/X24ol80nJS3F_nUg3HlqWWzSxEnDHeAI34quN8rTjILQOoebd0Be3ZFBQrKAtMX2XyE", 
      name: "Alexa", 
      role: "Inteligência Artificial"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-08-16 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          { posts.map((post) => {
            return (
              <Post 
                author={post.author} 
                content={post.content} 
                publishedAt={post.publishedAt} 
              />
            )
          }) }
        </main>
      </div>
    </div>
  )
}

export default App
