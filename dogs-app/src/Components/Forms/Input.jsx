import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.wrapper}>{label}</label>
            <input className={styles.input} name={name} type={type} value={value} onChange={onChange} />
            <p className={styles.error}>Erro</p>
        </div>
    )
}

export default Input;