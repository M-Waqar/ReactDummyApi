import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const BASE_URL = "https://dummyapi.io/data/api/user";
const APP_ID = "60a373587c13e709e001a998";
const UserDetail = () => {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const getUser = async () => {
    setLoading(true);
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: { "app-id": APP_ID },
    });
    setUser(response.data);
    setLoading(false);
  };
  useEffect(() => {
    getUser();
  }, [id]);
  return (
    <div className="pt-4 pb-4">
      <h1>User Details</h1>
      <div className="row">
        {loading ? (
          <div>
            <h1>Loading ...</h1>
          </div>
        ) : (
          <div className="card">
            <img
              className="card-img-top"
              src={user.picture}
              alt="Card pic cap"
            />
            <div className="card-body">
              <h5 className="card-title">
                {user.firstName} {user.lastName}
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{user.email}</li>
                <li className="list-group-item">{user.phone}</li>
                <li className="list-group-item">{user.gender}</li>
              </ul>
              <Link to="/users" className="btn btn-primary btn-block">
                Back To List
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
