import React, { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([{ firstName: '', lastName: '' }]);

  const addUser = () => {
    const values = [...users, { firstName: '', lastName: '' }];
    setUsers(values);
  };

  const removeUser = (i) => {
    let values = [...users];

    values = values.filter((value, index) => i !== index);
    setUsers(values);
  };

  const onChange = (i, e) => {
    const values = [...users];

    if (e.target.name === 'firstName') {
      values[i].firstName = e.target.value;
    } else {
      values[i].lastName = e.target.value;
    }

    setUsers(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(users);
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
            </div>
          </div>
        ))}

        <input type="submit" value="Save" className="btn btn-success" />
        <button className="btn btn-primary ml-2" onClick={addUser}>
          +
        </button>
      </form>
    </div>
  );
};

export default App;
