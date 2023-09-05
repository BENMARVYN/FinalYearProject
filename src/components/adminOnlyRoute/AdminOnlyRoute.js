import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "admin@gmail.com") {
    return children;
  }

  return (
    
    <section style={{ height: "80vh" }}>
      <div className="container">
        <h2>Access Denied.</h2>
        <p>Only an Admin can view this page.</p>
        <br />
        <Link to="/">
          <button className="--btn">&larr; Back To Home</button>
        </Link>
      </div>
    </section>
  );
};

export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "admin@gmail.com") {
    return children;
  }
  return null;
};

export default AdminOnlyRoute;





