
import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment({content}) {
  return (
    <div className={styles.comment}>
     <Avatar hasBorder={false} src="https://github.com/lucasC-deOliveira.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.AuthorAndTime}>
              <strong>Lucas Carvalho</strong>
              <time title="05 de Junho as 20:21">
                Cerca de 1h atrás
              </time>
            </div>
            <button
              title="Deletar comentário"
            >
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}