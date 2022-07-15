// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import "./Contact.css";
import React from "react";

const Contact = (props) => {
  const { data } = props;
  return (
    <div className="ContactParent">
      <div className="LeftContact">
        <img src={data.photo} alt={data.name.toLowerCase()} />
      </div>
      <div className="RightContact">
        <h1>{data.name}</h1>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
