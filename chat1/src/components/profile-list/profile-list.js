import { useSelector, useDispatch } from "react-redux";
import styles from "./profile.module.css";
import { toggleVisibleProfile } from "../../store/profile";

export function ProfileList() {
    const state = useSelector (state => state);
    const dispatch = useDispatch ()
  return (
<div className= {styles.profilebox}>
<div className={styles.profile}>
{state.isVisible && (<div><p className={styles.text}>NAME: {state.firstName}</p>
            <p className={styles.text}>LASTNAME: {state.lastName}</p>
            <p className={styles.text}>PHONE: {state.phone}</p>
            </div>)}
            <button className ={styles.btn} onClick={() => dispatch(toggleVisibleProfile())}>Показать/скрыть профиль</button>
        </div>
        
        <div className={styles.forma}>
        <h2 className={styles.title}>Изменить данные: </h2>
        <p className={styles.text}>NAME:</p><input placeholder="Name"></input>

            <p className={styles.text}>LASTNAME:</p>
            <input placeholder="Lastname"></input>
            <p className={styles.text}>PHONE: </p>
            <input placeholder="8-999-999-99-99"></input>
        </div>
      </div>
  )
}

