import React from "react";
import { useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Field, FormikHelpers } from "formik";

import { PostValues } from "../types";
import { saveCartData } from "../../../../store/posts";
import { initialValues } from "../utils";

const PostForm: React.FC<{ posts: PostValues[] }> = ({ posts }) => {
  const dispatch = useDispatch();

  const handlePostSubmit = (
    values: PostValues,
    { resetForm }: FormikHelpers<PostValues>
  ): void => {
    const { post_id, post_date, ...restFormValues } = values;
    const newPosts = [
      ...posts,
      {
        post_id: String(Math.floor(Math.random() * 1000)),
        post_date: String(Date.now()),
        ...restFormValues,
      },
    ];
    dispatch<any>(saveCartData(newPosts)).finally(() => {
      resetForm({ values: initialValues });
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handlePostSubmit}
      enableReinitialize
    >
      {({ handleChange, handleSubmit, handleBlur, values }) => {
        return (
          <Stack direction="column" spacing={3} width="33%">
            <Field
              id="post_author"
              name="post_author"
              label="author"
              value={values.post_author}
              onChange={handleChange}
              component={TextField}
              onBlur={handleBlur}
            />
            <Field
              id="post_title"
              name="post_title"
              label="post title"
              value={values.post_title}
              onChange={handleChange}
              component={TextField}
              onBlur={handleBlur}
            />
            <Field
              id="post_body"
              name="post_body"
              label="post body"
              multiline
              rows={4}
              value={values.post_body}
              onChange={handleChange}
              component={TextField}
              onBlur={handleBlur}
            />
            <Button variant="outlined" onClick={() => handleSubmit()}>
              Add Post
            </Button>
          </Stack>
        );
      }}
    </Formik>
  );
};

export default PostForm;
