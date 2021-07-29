import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useState } from 'react';



function ShelfPage() {

  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (event) => {
    // Don't reload on form submit
    event.preventDefault();

   // alert user to fill in missing input field

   if (!description || !imageURL) {
    alert('Please enter all input fields.')
    }
    
    else {
    // Tell redux that we want to add new info
    dispatch({
        type: 'ADD_ITEM',
        // Pass in the information, that we're tracking in state
        payload: {description: description, imageURL: imageURL}
    });

    // Clear the form field
    setDescription('');
    setImageURL('');

    // direct browser to next route
    // history.push('/');
    }
};

  return (
    <div className="container">
      <div>
        <h2>Shelf</h2>
        <p>All of the available items can be seen here.</p>
      </div>
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
        <button type="submit">Save Movie</button>
      </form>
    </div>
  </div>
  );
}

export default ShelfPage;
