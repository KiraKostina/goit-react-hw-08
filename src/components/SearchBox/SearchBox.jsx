import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = e => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.search_container}>
      <p>Find contacts by name</p>
      <input
        className={css.search_field}
        type="text"
        value={filter}
        onChange={handleSearch}
      />
    </div>
  );
}
