import React, { useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          color: active === true ? "green" : "blue",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch({
            type: "TOGGLE_USER",
            id: id,
          });
        }}
      >
        {username}
        &nbsp;
      </b>
      <span>{email}</span>

      <button
        onClick={() => {
          dispatch({
            type: "REMOVE_USER",
            id: id,
          });
        }}
      >
        삭제
      </button>
    </div>
  );
});

function UserList({ users }) {
  console.log("UserList 렌더링");
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
}

export default React.memo(UserList);
