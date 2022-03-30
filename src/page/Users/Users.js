import React from 'react'
import "./Users.scss"
import BasicLayout from '../../layout/BasicLayout'
export default function AllUsers(props) {
  const { setRefreshCheckLogin} = props;
  console.log(props);
  return (
    <BasicLayout
    className="users"
    title="Usuarios"
    setRefreshCheckLogin={setRefreshCheckLogin}
  >
    <h2>Users</h2>
    </BasicLayout>
  );
}
