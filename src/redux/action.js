import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add', ({ number, name }) => {
  return {
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
});

export const deleteContact = createAction('contact/delete');
export const filterContact = createAction('contact/filter');
