import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/${id}`
    );
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h1 className="title is-4">Edit User</h1>
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          {/* <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div> */}
          <div className="field">
            <label className="label">Gender</label>
            <div class="control">
              <label className="radio">
                <input
                  type="radio"
                  name="answer"
                  onChange={(e) => setGender(e.target.value)}
                  value={"Male"}
                  checked={gender === "Male"}
                />
                Male
              </label>
              <label class="radio">
                <input
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  name="answer"
                  checked={gender === "Female"}
                  value={"Female"}
                />
                Female
              </label>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button
                type="submit"
                className="button is-info is-small is-rounded mr-2 has-text-weight-bold is-size-7"
              >
                Update
              </button>
              <Link
                to="/"
                className="button is-secondary is-small mr-2 is-rounded has-text-weight-bold "
              >
                Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
