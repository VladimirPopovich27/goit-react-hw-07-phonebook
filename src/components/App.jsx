import { Section } from './Section';
import { Form } from './Form';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Container } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import * as contactsSelectors from 'redux/contacts/contactsSelectors';
export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const error = useSelector(contactsSelectors.selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Section>
    </Container>
  );
}
