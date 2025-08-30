import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";

const Create = () => {
  const [users, setUsers] = useState({});

  const dispatch = useDispatch();

  const getUserData = (e) => {
    const { name, value } = e.target;
    setUsers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
  };

  return (
    <div className="container">
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={users.name || ""}
            onChange={getUserData}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={users.email || ""}
            onChange={getUserData}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={users.age || ""}
            onChange={getUserData}
          />
        </div>

        {/* Gender radios */}
        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="radio"
            id="radioMale"
            name="gender"
            value="Male"
            checked={users.gender === "Male"}
            onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="radioMale">
            Male
          </label>
        </div>

        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="radio"
            id="radioFemale"
            name="gender"
            value="Female"
            checked={users.gender === "Female"}
            onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="radioFemale">
            Female
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
