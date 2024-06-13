// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import ContactList from '../../components/ContactList/ContactList';
// // import css from './App.module.css';
// import SearchBox from './SearchBox/SearchBox';
// import ContactForm from '../../components/ContactForm/ContactForm';
// import { fetchContacts } from '../redux/contacts/operations';
// import Loader from './Loader/Loader';
// import ErrorMessage from './ErrorMessage/ErrorMessage';

// export default function ContactPage() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(state => state.contacts.loading);
//   const isError = useSelector(state => state.contacts.error);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {isLoading && <Loader />}
//       {isError && <ErrorMessage />}
//       <ContactList />
//     </div>
//   );
// }
