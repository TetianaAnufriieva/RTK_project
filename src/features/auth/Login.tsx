import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectError } from "./selectors";
import { login } from "./authSlice";
import { useState, type FormEvent, type JSX } from "react";
import styles from "./Login.module.css";

export default function Login(): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  function handleLogin(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(dispatch(login({ username, password })));
  }
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Login</h2>
      <p className={styles.hint}>Hint: emilys / emilyspass</p>
      <p className={styles.error}>{error}</p>
      <form className={styles.loginBox} onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
