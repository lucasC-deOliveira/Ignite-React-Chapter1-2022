
import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0);

 function handleDeleteComment(){
  onDeleteComment(content)
 }

 function handleLikeComment(){
  setLikeCount(likeCount + 1)
 }

  return (
    <div className={styles.comment}>
     <Avatar hasBorder={false} src="https://github.com/lucasC-deOliveira.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Carvalho</strong>
              <time title="05 de Junho as 20:21">
                Cerca de 1h atrás
              </time>
            </div>
            <button
            onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}