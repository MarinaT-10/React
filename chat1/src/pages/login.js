import { useState } from "react";
import { firebaseApp } from "../api/firebase";
import styles from './home.module.css'

const onSubmit = (email, password) => {
  return firebaseApp.auth().signInWithEmailAndPassword(email, password)
}

export function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };
  return (
    <div className={styles.wrapper}>
      <h1>LoginPage</h1>
      <div>
        <input placeholder='email' onChange={handleChangeForm} data-name="email" /><br />
        <input placeholder='password' onChange={handleChangeForm} data-name="password" /><br />
        <button onClick={() =>
          onSubmit(form.email, form.password)}>
          login</button>
      </div>
    </div>
  )
}