import React from 'react';
import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const AuthorList = ({ authors, onEdit, onDelete }) => (
  <div>
    {authors.map((author) => (
      <div key={author.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>{author.name}</div>
        <div>
          <IconButton onClick={() => onEdit(author)}><Edit /></IconButton>
          <IconButton onClick={() => onDelete(author.name)}><Delete /></IconButton>
        </div>
      </div>
    ))}
  </div>
);

export default AuthorList;
