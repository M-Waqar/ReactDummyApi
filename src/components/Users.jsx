import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const BASE_URL = "https://dummyapi.io/data/api/user";
const APP_ID = "60a373587c13e709e001a998";
const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    setLoading(true);
    const response = await axios.get(BASE_URL, {
      headers: { "app-id": APP_ID },
    });
    const values = response.data;
    setUsers(values.data);
    setLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="pt-4 pb-4">
      <h1>Users</h1>
      <div className="row">
        {loading === true ? (
          <div>
            <h1>Loading ...</h1>
          </div>
        ) : (
          users &&
          users.length > 0 &&
          users.map((user) => {
            return (
              <div key={uuidv4()} className="col-sm-4 mb-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={user.picture}
                    alt="Employee pic"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {user.firstName} {user.lastName}
                    </h5>
                    <p className="card-text">{user.email}</p>
                    <Link
                      to={`/userdetail/${user.id}`}
                      className="btn btn-primary btn-block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Users;
