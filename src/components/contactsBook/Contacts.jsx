import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContact } from 'redux/selectors';
import { deleteContact } from 'redux/sliceContact';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const filter = useSelector(getFilter);
  const normFilter = filter.toLowerCase();
  const filterContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normFilter)
  );

  return (
    <ul>
      {filterContactList.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
