import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile, fullProfileSelector } from "../store/profile";
import { conversationsSelector } from "../store/conversations";
import { ProfileForm } from "../components";
import styles from "./profile.module.css"

export const ProfilePage = ({ someProp = "test" }) => {
  const [count, setCount] = useState(0);
  const { isVisibleProfile, firstName, lastName, ...profile } =
    useSelector(fullProfileSelector);
  // const getConversations = useCallback(
  //   (state) => conversationsSelector(someProp)(state),
  //   [someProp]
  // );
  const getConversations = useMemo(
    () => conversationsSelector(someProp),
    [someProp]
  );
  
  // для примера
  const conversations = useSelector(getConversations);

  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>

      <h1 onClick={() => setCount(count + 1)}>Profile {count}</h1>
      <div className={styles.profilebox}>
        <div className={styles.profile}>
          {isVisibleProfile && (
            <div>
              <h2 className={styles.text}>firstName: {firstName}</h2>
              <h2 className={styles.text}>lastName: {lastName}</h2>
              <h2 className={styles.text}>phone: {profile.phone}</h2>
            </div>
          )}
          <button className={styles.btn} onClick={() => dispatch(toggleVisibleProfile())}>
            Показать/скрыть профиль</button>
        </div>

        <ProfileForm firstName={firstName} lastName={lastName} {...profile} />
      </div>
    </div>
  );
};