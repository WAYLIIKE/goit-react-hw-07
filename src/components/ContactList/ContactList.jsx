import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const reduxUsers = useSelector(selectContacts);
  const reduxInputFilter = useSelector(selectNameFilter);
  const visibleUsers = reduxUsers.filter(user =>
    user.name.toLowerCase().includes(reduxInputFilter.toLowerCase()),
  );

  return (
    <div className={css.container}>
      {visibleUsers.map(item => (
        <Contact data={item} key={item.id} />
      ))}
    </div>
  );
};
