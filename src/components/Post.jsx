import { Comment } from "./Comment"
import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import styles from "./Post.module.css"
import { Avatar } from "./Avatar"


const comments = [
  1,2,3
]

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, 'd "de" LLLL "ás" HH:mm"h"', {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/lucasC-deOliveira.png" />

          <div
            className={styles.authorInfo}
          >
            <strong>Lucas Carvalho</strong>
            <span>Engenheiro de software</span>
          </div>
        </div>
        <time
          datatype={publishedAt.toISOString()}
          title={publishedDateFormatted}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          }
          else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
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
        {comments.map(comment => {
          return <Comment/>
        })}
      </div>

    </article>
  )
}