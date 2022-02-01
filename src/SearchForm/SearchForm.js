import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { updateSearch } from '../redux/store';

const SearchForm = () => {
    const [searchString, setsearchString] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearch({ searchString }));
        setsearchString('')
      }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..." type="text" value={searchString} onChange={e => setsearchString(e.target.value)}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;