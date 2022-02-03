import styles from './profile.module.css'
import { ProfileList} from '../components/profile-list'

export const ProfilePage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Profile Page</h1>
<ProfileList></ProfileList>
      </div>
  )
}