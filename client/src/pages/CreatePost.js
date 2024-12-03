import React from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Updated import for React Router v6


function CreatePost() {
    let navigate = useNavigate();
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required."),
        postText: Yup.string().required("Post text is required."),
        username: Yup.string()
          .min(3, "Username must be at least 3 characters.")
          .max(15, "Username must not exceed 15 characters.")
          .required("Username is required."),
      });      

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            navigate("/");
        });
    };


    return (
        <div className="createPostPage"> 
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">
                    <label>Title: </label>
                    <ErrorMessage name="title" component="span" />
                    <Field 
                        id="inputCreatePost" 
                        name="title" 
                        placeholder="(Ex. Title...)" 
                    />
                    <label>Post: </label>
                    <ErrorMessage name="postText" component="span" />
                    <Field 
                        id="inputCreatePost" 
                        name="postText" 
                        placeholder="(Ex. Post...)" 
                    />
                    <label>Username: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field 
                        id="inputCreatePost" 
                        name="username" 
                        placeholder="(Ex. John123...)" 
                />

                    <button type="submit"> Create Post</button>
                </Form>
            
            </Formik>
        </div>
    );
}

export default CreatePost
