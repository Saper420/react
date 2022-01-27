import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
    const [title, setValueTitle] = useState('');
    const [icon, setValueIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
        setValueTitle('');
        setValueIcon('');
    };
    const dispatch = useDispatch();
	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span>Title:</span><TextInput value={title} onChange={e => setValueTitle(e.target.value)} /> 
            <span>Icon:</span><TextInput value={icon} onChange={e => setValueIcon(e.target.value)} />
            <Button>add column</Button>
        </form>
	);
};

export default ColumnForm;