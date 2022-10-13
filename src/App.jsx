import { Header } from './components/Header'
import './global.css'

import styles from "./App.module.css"
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucasC-deOliveira.png",
      name: "Lucas Carvalho",
      role: "Programador fullstack"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },

      { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: new Date('2022-06-05 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Maiky brito",
      role: "Educator"
    },
    content: [-
      { type: "paragraph", content: "Fala galeraa 👋" },

    { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },

    { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: new Date('2022-06-07 22:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego fernandes",
      role: "Educator"
    },
    content: [-
      { type: "paragraph", content: "Fala galeraa 👋" },

    { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },

    { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: new Date('2022-06-07 22:00:00')
  }


]


function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {posts.map(post => {
            return (
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          }
          )}
        </main>
      </div>
    </>
  )
}

export default App
