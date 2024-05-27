import React, { useState } from 'react';
import { Container, Grid, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import BookList from './BookList';
import AuthorList from './AuthorList';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [isAuthorDialogOpen, setIsAuthorDialogOpen] = useState(false);

  const handleBookSubmit = (book) => {
    if (selectedBook) {
      setBooks(books.map((b) => (b.isbn === book.isbn ? book : b)));
      setSelectedBook(null);
    } else {
      setBooks([...books, book]);
    }
  };

  const handleAuthorSubmit = (author) => {
    if (selectedAuthor) {
      setAuthors(authors.map((a) => (a.name === author.name ? author : a)));
      setSelectedAuthor(null);
    } else {
      setAuthors([...authors, author]);
    }
    setIsAuthorDialogOpen(false);
  };

  const handleBookEdit = (book) => {
    console.log('Editing book:', book);
    setSelectedBook(book);
  };

  const handleAuthorEdit = (author) => {
    console.log('Editing author:', author);
    setSelectedAuthor(author);
    setIsAuthorDialogOpen(true);
  };

  const handleBookDelete = (isbn) => setBooks(books.filter((b) => b.isbn !== isbn));
  const handleAuthorDelete = (name) => setAuthors(authors.filter((a) => a.name !== name));

  const handleAuthorDialogClose = () => {
    setSelectedAuthor(null);
    setIsAuthorDialogOpen(false);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 16 }}>
            <h2>Book Form</h2>
            <BookForm onSubmit={handleBookSubmit} initialValues={selectedBook} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 16 }}>
            <h2>Author Form</h2>
            <AuthorForm onSubmit={handleAuthorSubmit} initialValues={selectedAuthor} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: 16 }}>
            <h2>Books List</h2>
            <BookList books={books} onEdit={handleBookEdit} onDelete={handleBookDelete} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: 16 }}>
            <h2>Authors List</h2>
            <AuthorList authors={authors} onEdit={handleAuthorEdit} onDelete={handleAuthorDelete} />
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={isAuthorDialogOpen} onClose={handleAuthorDialogClose}>
        <DialogTitle>Edit Author</DialogTitle>
        <DialogContent>
          <AuthorForm onSubmit={handleAuthorSubmit} initialValues={selectedAuthor} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAuthorDialogClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Dashboard;
