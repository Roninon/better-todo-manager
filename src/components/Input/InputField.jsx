import React from 'react';
import classes from './InputField.module.css';

const InputField = (props) => {
    return (
        <input {...props} className={classes.input} />
    );
};

export default InputField;