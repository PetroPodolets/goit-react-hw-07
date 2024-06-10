import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

import css from './Contact.module.css'
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";



export default function Contact({ name, number, id }) {

    const dispatch = useDispatch();


    const onDelete = (id) => {
        dispatch(deleteContact(id));
    };


    return (
        <li className={css.contactList}>
            <div className={css.listContainer}>

                <h3 className={css.name}><RiContactsFill className={css.svg} />{name}</h3>
                <p className={css.phoneNumber}><FaPhoneAlt className={css.svg} /> {number}</p>

            </div>
            <button className={css.btnDelete} onClick={() => onDelete(id)}>Delete</button>
        </li>
    )

}
