import { Comment } from "./Comment"
import styles from "./Post.module.css"
import {Avatar} from "./Avatar"
export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src="https://github.com/lucasC-deOliveira.png"/>

          <div
            className={styles.authorInfo}
          >
            <strong>Lucas Carvalho</strong>
            <span>Engenheiro de software</span>
          </div>
        </div>
        <time
          datatype="2022-05-11 00:00:00"
          title="11 de maio as 00:00Hr"
        >
          Publicado há 1h
        </time>
      </header>

      <div
        className={styles.content}
      >

        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#nlw</a>{' '}
          <a href="">#novoprojeto </a>{' '}
          <a href=""> #rocketseat</a>
        </p>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="deixe um comentario" />
        <footer>
          <button
            type="submit">Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
      <Comment/>
      <Comment/>
      <Comment/>
      </div>

    </article>
  )
}