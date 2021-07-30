import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router";

function MyShelf() {
    const {id } = useParams();
    const dispatch=useDispatch();
    const history = useHistory();
    const myShelf = useSelector(store => store.movies);

    useEffect (() => {
        dispatch({type:'GET_MY_SHELF', payload: id});
}, []);

    return (
        <section id='myShelf'>
            {myShelf.map((item, index) => {
                return (
                    <section key={index}>
                        <img src={item.image_url} />
                        <p>{item.description}</p>
                    </section>
                )
            })}
        </section>
    )
}

export default MyShelf;