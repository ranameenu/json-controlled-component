import React from 'react';

const Fields = ({ submit }) => {
  const handleInputChange = (i, e) => {
    const values = [...inputFields];

    if (e.target.name === 'firstName') {
      values[i].firstName = e.target.value;
    } else {
      values[i].lastName = e.target.value;
    }

    submit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };

  return (
    <div className="row">
      <div className="form-group col-sm-5">
        <input
          type="text"
          className="form-control"
          name="firstName"
          placeholder="First Name"
          onChange={handleInputChange(i, e)}
        />
      </div>
      <div className="form-group col-sm-5">
        <input
          type="text"
          className="form-control"
          name="lastName"
          placeholder="Last Name"
          onChange={handleInputChange(i, e)}
        />
      </div>
      <div className="form-group col-sm-2">
        <button className="btn btn-primary btn-sm mr-2">+</button>
        <button className="btn btn-danger btn-sm">-</button>
      </div>
      <input type="submit" value="Save" className="btn btn-success ml-3" />
    </div>
  );
};

export default Fields;
