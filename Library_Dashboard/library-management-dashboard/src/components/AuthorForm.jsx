import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import { authorValidationSchema } from '../utils/validationSchemas';

const AuthorForm = ({ onSubmit, initialValues }) => {
  const formik = useFormik({
    initialValues: initialValues || {
      name: '',
      biography: '',
      birthdate: ''
    },
    validationSchema: authorValidationSchema,
    onSubmit: onSubmit,
    enableReinitialize: true
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        fullWidth
        id="biography"
        name="biography"
        label="Biography"
        value={formik.values.biography}
        onChange={formik.handleChange}
        error={formik.touched.biography && Boolean(formik.errors.biography)}
        helperText={formik.touched.biography && formik.errors.biography}
      />
      <TextField
        fullWidth
        id="birthdate"
        name="birthdate"
        label="Birthdate"
        type="date"
        InputLabelProps={{
          shrink: true
        }}
        value={formik.values.birthdate}
        onChange={formik.handleChange}
        error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
        helperText={formik.touched.birthdate && formik.errors.birthdate}
      />
      <Button color="primary" variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AuthorForm;
