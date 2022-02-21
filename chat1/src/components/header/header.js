
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { firebaseApp } from "../../api/firebase";

const signOut = () => {
  firebaseApp.auth().signOut()
}

const pages = [{ title: "Home", to: "/" }]

const pagesWithSession = [

  { title: "Чат", to: "/chat", displayWithSession: true },
  { title: "Профиль", to: "/profile", displayWithSession: true },
  { title: "Gists", to: "/gists", displayWithSession: true },
];

const pagesWithoutSession = [

  { title: "Login", to: "/login", displayWithSession: false },
  { title: "Sign-Up", to: "/sign-up", displayWithSession: false },
];

export function Header({ session }) {
  const state = useSelector(state => state);
  return (
    <div className={styles.wrapper}>

      <div className={styles.header}>
        {pages.map(({ to, title }) => (
          <div
            key={title}
          >
            <Link className={styles.headerlink} to={to}>
              {title}
            </Link>
          </div>
        ))}

        {!!session && pagesWithSession.map(({ to, title }) => (
          <div
            key={title}
          >
            <Link className={styles.headerlink} to={to}>
              {title}
            </Link>
          </div>
        ))}

        {!session && pagesWithoutSession.map(({ to, title }) => (
          <div
            key={title}
          >
            <Link className={styles.headerlink} to={to}>
              {title}
            </Link>
          </div>
        ))}
        {/* // <Link className={styles.headerlink} to="/">Главная</Link>
        // <Link className={styles.headerlink} to="/chat">Чат</Link>
        // <Link className={styles.headerlink} to="/profile">Профиль</Link>
        // <Link className={styles.headerlink} to="/gists">Gists</Link>
        // <Link className={styles.headerlink} to="/login">Login</Link>
        // <Link className={styles.headerlink} to="/sign-up">Sign-Up</Link> */}

      </div>
      <div> {(!!session) && (<button className={styles.btn} onClick={signOut}>Exit</button>)}</div>
    </div>
  );
}