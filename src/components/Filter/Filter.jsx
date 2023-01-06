import { Label, Input } from 'components/Form/Form.styled';

import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/sliceFilter';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const getFilterValue = e => {
    return dispatch(filterContact(e.target.value));
  };

  return (
    <>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={getFilterValue}
      />
    </>
  );
};
