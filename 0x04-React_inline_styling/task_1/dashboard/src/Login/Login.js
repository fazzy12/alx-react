import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  body: {
    padding: '2rem',
  },
  div: {
    margin: '1rem 0',
  },
  label: {
    marginRight: '0.5rem',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#e0354b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
});

function Login() {
  return (
    <main className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.div)}>
        <label htmlFor="email" className={css(styles.label)}>Email:</label>
        <input type="email" id="email" />
      </div>
      <div className={css(styles.div)}>
        <label htmlFor="password" className={css(styles.label)}>Password:</label>
        <input type="password" id="password" />
      </div>
      <button className={css(styles.button)}>OK</button>
    </main>
  );
}

export default Login;
