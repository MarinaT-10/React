import { useState } from "react";
import {firebaseApp} from "../api/firebase";
import styles from './home.module.css'

const onSubmit = (email, password)=>{
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
}

export function SignUpPage () {
    const [form, setForm] = useState({ email:"", password:""});

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };
    return (
      <div className={styles.wrapper}>
        <h1>SignUpPage</h1>
        <div>
            <input 
            placeholder='email' 
            onChange={handleChangeForm} 
            data-name="email"
            value={form.email}
            /><br/>
            <input 
            placeholder='password' 
            onChange={handleChangeForm}  
            data-name="password"
            value={form.password}
            /><br/>
            <button onClick={() => 
                onSubmit(form.email, form.password)}>
                    Sign Up</button>
        </div>
      </div> 
    )
  }