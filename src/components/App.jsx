import { Section } from './Section/Section';
import { Contacts } from './contactsBook/Contacts';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { ContactsWrapper } from './contactsBook/ContactsWrapper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        padding: '20px',
        color: '#010101',
      }}
    >
      <Section title="PhoneBook">
        <Form />
        {isLoading && !error && <b>Request in progress...</b>}
      </Section>

      <ContactsWrapper title="Contacts">
        <Filter></Filter>
        <Contacts></Contacts>
      </ContactsWrapper>
    </div>
  );
};
