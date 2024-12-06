import React from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

function Registration() {
    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
          .min(3, "Username must be at least 3 characters.")
          .max(15, "Username must not exceed 15 characters.")
          .required("Username is required."),
        password: Yup.string()
          .min(4, "Username must be at least 3 characters.")
          .max(20, "Username must not exceed 15 characters.")
          .required("Username is required."),
    });  
  
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
            console.log(data);
        });
    };

    return (
    <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">
                    <label>Username: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field 
                        id="inputCreatePost" 
                        name="username" 
                        placeholder="(Ex. John123...)" 
                    />

                    <label>Password: </label>
                    <ErrorMessage name="password" component="span" />
                    <Field 
                        type="password"
                        id="inputCreatePost" 
                        name="password" 
                        placeholder="(Your Password...)" 
                    />

                    <button type="submit"> Register</button>
                </Form>
            
            </Formik>
    </div>
  )
}

export default Registration
