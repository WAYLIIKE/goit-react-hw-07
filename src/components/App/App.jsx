import css from './App.module.css';
import { ContactForm } from '../ContactForm/ContactForm';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyContacts } from '../EmptyContacts/EmptyContacts';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import {
  selectContacts,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/selectors';
import { Watch } from 'react-loader-spinner';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectContacts);
  const visibleUsers = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {(users.length === 0 || visibleUsers.length === 0) && <EmptyContacts />}
      {loading && (
        <Watch
          visible={true}
          height="120"
          width="120"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass={css.loader}
        />
      )}
      <div className={loading ? css.overlay : css.none}></div>
    </div>
  );
}

export default App;
