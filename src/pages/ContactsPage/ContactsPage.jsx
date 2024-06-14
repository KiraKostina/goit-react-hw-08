import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import { fetchContacts } from '../../redux/contacts/operations';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.loading);
  //   const isError = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {/* {isError && <ErrorMessage />} */}
      <ContactList />

      {/* <TaskEditor />

      <TaskList /> */}
    </div>
  );
}
// className={css.container}
