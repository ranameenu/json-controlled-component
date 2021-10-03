import React from "react";

const userItemComp = ({ user }) => {
  return (
    <div>
      {user.firstName}
      {user.lastName}
    </div>
  );
};

export default userItemComp;
