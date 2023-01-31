import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`);
      getUsers();
    } catch (e) {
      console.log(e);
    }
  };
  const getUsers = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);

    setUser(response.data);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-two-thirds ">
        <h1 className="title is-3 has-text-centered">CRUD</h1>
        <h2 className="subtitle is-4 has-text-centered">
          MERN (MongoDB, Express, ReactJS, NodeJS)
        </h2>
        <Link
          to="add"
          className="button is-info is-small is-rounded has-text-weight-bold is-size-6"
        >
          Add User
        </Link>
        <table className="table is-striped is-fullwidth mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-2 is-rounded has-text-weight-bold"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      if (window.confirm("Delete user?")) {
                        deleteUser(user._id);
                      }
                    }}
                    className="button is-danger is-small is-rounded has-text-weight-bold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
