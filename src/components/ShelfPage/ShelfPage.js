import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function ShelfPage() {

const shelf = useSelector(store => store.shelfReducer);
const dispatch = useDispatch();
const [description, setDescription] = useState('');
const [imageURL, setImageURL] = useState('');

const fetchShelf = () => {
  dispatch({ type: 'FETCH_SHELF'});
}

const handleSubmit = (event) => {
    // Don't reload on form submit
    event.preventDefault();

    console.log('Item is:', description, imageURL);

   // alert user to fill in missing input field
   if (!description || !imageURL) {
    alert('Please enter all input fields.')
    }
    
    else {
    // Tell redux that we want to add new info
    dispatch({
        type: 'ADD_ITEM',
        // Pass in the information, that we're tracking in state
        payload: {description: description, image_url: imageURL}
    });

    // Clear the form field
    setDescription('');
    setImageURL('');

    // direct browser to next route
    // history.push('/');
    }
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
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" 
                placeholder="Enter Description" 
                value={description} 
                onChange={event => setDescription(event.target.value)}/>
            <input type="text" 
                placeholder="Enter item image URL" 
                value={imageURL} 
                onChange={event => setImageURL(event.target.value)}/>
            <button type="submit">Add Item</button>
          </form>
        </div>
  </div>
  );
}

export default ShelfPage;
