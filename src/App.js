import axios from "axios";
import React, { useState, useEffect } from "react";
import userItemComp from "./components/userItemComp";

const App = () => {
  const [users, setUsers] = useState([{ firstName: "", lastName: "" }]);
  const [userItem, setUserItem] = useState([]);
  // const ageGroup = ["0-5", "5-10", "10-15", "16+"];

  const addUser = () => {
    const values = [...users, { firstName: "", lastName: "" }];
    setUsers(values);
  };

  const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const removeUser = (i) => {
    let values = [...users];
    values = values.filter((value, index) => i !== index);
    setUsers(values);
  };

  const onChange = (i, e) => {
    const values = [...users];

    if (e.target.name === "firstName") {
      values[i].firstName = e.target.value;
    } else if (e.target.name === "lastName") {
      values[i].lastName = e.target.value;
    } else {
      values[i].age = e.target.value;
    }

    setUsers(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setUserItem(users);
  };

  return (
    <div className="container my-5">
      <form className="w-50" onSubmit={onSubmit}>
        {users.map((user, i) => (
          <div className="card mb-3" key={i}>
            <div className="card-body">
              <button
                className="btn btn-danger btn-sm float-right mb-3"
                onClick={() => removeUser(i)}
              >
                x
              </button>

              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  value={user.firstName}
                  onChange={(e) => onChange(i, e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name"
                  value={user.lastName}
                  onChange={(e) => onChange(i, e)}
                />
              </div>

              {/* RADIO BUTTONS */}
              <div className="form-group">
                <label htmlFor="0-5">0-5</label>
                <input
                  type="radio"
                  name="age"
                  className="form-control"
                  value="0-5"
                  checked={user.age === "0-5"}
                  onChange={(e) => console.log(e.target.value)}
                />
                <label htmlFor="5-10">5-10</label>
                <input
                  type="radio"
                  name="age"
                  className="form-control"
                  value="5-10"
                  checked={user.age === "5-10"}
                  onChange={(e) => console.log(e.target.value)}
                />
                <label htmlFor="10-15">10-15</label>
                <input
                  type="radio"
                  name="age"
                  className="form-control"
                  value="10-15"
                  checked={user.age === "10-15"}
                  onChange={(e) => console.log(e.target.value)}
                />
                <label htmlFor="16+">16+</label>
                <input
                  type="radio"
                  name="age"
                  className="form-control"
                  value="16+"
                  checked={user.age === "16+"}
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}

        <input type="submit" value="Save" className="btn btn-success" />
        <button className="btn btn-primary ml-2" onClick={addUser}>
          +
        </button>
      </form>
      <div>
        {userItem.map((user, i) => (
          <userItemComp user={user} key={i} />
        ))}
      </div>
    </div>
  );
};

export default App;
