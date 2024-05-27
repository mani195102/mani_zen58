import React from 'react';
import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const BookList = ({ books, onEdit, onDelete }) => (
  <div>
    {books.map((book) => (
      <div key={book.isbn} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>{book.title} by {book.author}</div>
        <div>
          <IconButton onClick={() => onEdit(book)}><Edit /></IconButton>
          <IconButton onClick={() => onDelete(book.isbn)}><Delete /></IconButton>
        </div>
      </div>
    ))}
  </div>
);

export default BookList;
