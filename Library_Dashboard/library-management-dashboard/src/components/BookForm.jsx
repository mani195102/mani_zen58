import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import { bookValidationSchema } from '../utils/validationSchemas';

const BookForm = ({ onSubmit, initialValues }) => {
  const formik = useFormik({
    initialValues: initialValues || {
      title: '',
      author: '',
      isbn: '',
      publicationDate: ''
    },
    validationSchema: bookValidationSchema,
    onSubmit: onSubmit,
    enableReinitialize: true
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="title"
        name="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <TextField
        fullWidth
        id="author"
        name="author"
        label="Author"
        value={formik.values.author}
        onChange={formik.handleChange}
        error={formik.touched.author && Boolean(formik.errors.author)}
        helperText={formik.touched.author && formik.errors.author}
      />
      <TextField
        fullWidth
        id="isbn"
        name="isbn"
        label="ISBN"
        value={formik.values.isbn}
        onChange={formik.handleChange}
        error={formik.touched.isbn && Boolean(formik.errors.isbn)}
        helperText={formik.touched.isbn && formik.errors.isbn}
      />
      <TextField
        fullWidth
        id="publicationDate"
        name="publicationDate"
        label="Publication Date"
        type="date"
        InputLabelProps={{
          shrink: true
        }}
        value={formik.values.publicationDate}
        onChange={formik.handleChange}
        error={formik.touched.publicationDate && Boolean(formik.errors.publicationDate)}
        helperText={formik.touched.publicationDate && formik.errors.publicationDate}
      />
      <Button color="primary" variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default BookForm;
