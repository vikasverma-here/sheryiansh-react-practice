import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [text, setText] = useState("");
  const [select, setSelect] = useState("");
  const [error, setError] = useState("");

  const initialFeedback = JSON.parse(localStorage.getItem("feedback")) || [];
  const [obj, setObj] = useState(initialFeedback);

  const validateForm = () => {
    if (!name || !email || !rating || !select || !text) {
      setError("Please fill in all the fields before submitting.");
      return false;
    }
    setError(""); 
    return true;
  };


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(select)
    const data = {
      name,
      email,
      rating,
      select,
      text,
    };

    if (!validateForm()) return;

   
    const updatedFeedback = [...obj, data];
    setObj(updatedFeedback);

   
    localStorage.setItem("feedback", JSON.stringify(updatedFeedback));
   
    setName("");
    setEmail("");
    setRating("");
    setText("");
    setSelect("");
  };

  const handleClick = (taskid) => {
    
    const updatedFeedback = obj.filter((val, index) => {
      return index !== taskid;
    });

    setObj(updatedFeedback);

    localStorage.setItem("feedback", JSON.stringify(updatedFeedback));
  };
  return (
    <div className="container">
      <h1 className="title">Feedback Collection System</h1>
  
      <div className="form-container">
        <form onSubmit={submitHandler} className="feedback-form">
          <div className="form-group">
            <label htmlFor="select">Category:</label>
            <select
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              className="input-field"
            >
              <option value="">-- Select Category --</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Delivery">Delivery</option>
              <option value="Product Quality">Product Quality</option>
            </select>
          </div>
  
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              placeholder="Enter Name"
              className="input-field"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Enter Email"
              className="input-field"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="rating">Rating (1-5):</label>
            <input
              onChange={(e) => setRating(e.target.value)}
              type="number"
              value={rating}
              min={1}
              max={5}
              className="input-field"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder="Enter your view"
              rows={5}
              className="input-field"
            ></textarea>
          </div>
  
          <button type="submit" className="submit-btn">Submit</button>
        </form>
  
        {error && <p className="error-msg">{error}</p>}
      </div>
  
      <div className="feedback-list">
        <h2>Feedback Received:</h2>
        {obj.map((val, i) => (
          <div key={i} className="feedback-item">
            <h3>Category: {val.select}</h3>
            <p><strong>Name:</strong> {val.name}</p>
            <p><strong>Email:</strong> {val.email}</p>
            <p><strong>Rating:</strong> {val.rating}</p>
            <p><strong>Comment:</strong> {val.text}</p>
            <button onClick={() => handleClick(i)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default App;
