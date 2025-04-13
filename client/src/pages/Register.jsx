import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://to-do-list-a.onrender.com/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    alert(data);

    if (response.ok) {
      window.location.href = '/login';
    }
  };

  return (
    <section style={styles.section}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Register</h2>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={userData.username}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Register</button>
        <small style={styles.text}>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </form>
    </section>
  );
};

const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f3f4f6',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '32px',
    borderRadius: '8px',
    background: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '300px',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4f46e5',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  text: {
    textAlign: 'center',
    fontSize: '12px',
    marginTop: '8px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '10px',
  }
};

export default Register;
