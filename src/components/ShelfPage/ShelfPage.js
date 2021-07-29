import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {

const shelf = useSelector(store => store.shelfReducer);
const dispatch = useDispatch();

const fetchShelf = () => {
  dispatch({ type: 'FETCH_SHELF'});
}

useEffect(() => {
  fetchShelf();
}, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <table>
        <thead>
          <tr>
            <th>
              Description
            </th>
            <th>
              Image
            </th>
          </tr>
        </thead>
        <tbody>
          {shelf.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.description}</td>
                <td><img src={item.image_url} height="200px" /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShelfPage;
