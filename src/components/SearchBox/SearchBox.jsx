import { useId } from "react"
import css from './SearchBox.module.css'
import { useDispatch, useSelector } from "react-redux";

import { changeFilter, selectNameFilter } from '../../redux/filtersSlice'

export default function SearchBox() {
    const dispatch = useDispatch();
    const nameFilter = useSelector(selectNameFilter);

    const handleSearchChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };
    const searchId = useId();
    return (
        <div className={css.container}>
            <label htmlFor={searchId}>Find contacts by name</label>
            <input className={css.searchInput} onChange={handleSearchChange} value={nameFilter} type="text" name="" /*id={searchId}*/ />
        </div>
    )
}