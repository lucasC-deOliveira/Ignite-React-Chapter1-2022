
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1590506978404-d3e577192a18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=30"
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/67061874?v=4" />
        <strong>Lucas Carvalho</strong>
        <span>Software Engineer</span>
      </div>
      <footer>
        <a
          href="#"
        >
          <PencilLine size="20" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}