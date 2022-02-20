import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../store/actions";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderUsers = () => users.map((u) => {
    return <li key={u.id}>{u.name}</li>
  });

  return (
    <div>
      Here's a list of users
      <ul>{renderUsers()}</ul>
    </div>
  );
};

const loadData = (store) => {
  console.log('Im trying to load some data');
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: UsersList,
};