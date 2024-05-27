import * as Yup from 'yup';

export const bookValidationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string().required('ISBN is required'),
  publicationDate: Yup.date().required('Publication date is required')
});

export const authorValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  biography: Yup.string().required('Biography is required'),
  birthdate: Yup.date().required('Birthdate is required')
});
