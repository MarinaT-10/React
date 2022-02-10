
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useSelector, } from "react-redux";

export function Header() {
  const state = useSelector (state => state);
    return (
    <div className={styles.wrapper}>
      
      <div className={styles.header}>
      
        <Link className={styles.headerlink} to="/">Главная</Link>
        <Link className={styles.headerlink} to="/chat">Чат</Link>
        <Link className={styles.headerlink} to="/profile">Профиль</Link>
      </div>
    </div>
  );
}