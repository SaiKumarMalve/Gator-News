import React, { useState, useEffect } from "react";
import { Spinner, ButtonGroup, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { isEmpty } from "lodash";
import BasicLayout from "../../layout/BasicLayout";
import "./Users.scss";
import { getFollowsApi } from "../../api/follow";
export default function AllUsers(props) {
  const { setRefreshCheckLogin} = props;
  const [users, setUsers] = useState(null);
  useEffect(()=>{
    getFollowsApi("page=1&type=new&search=")
    .then(response=>{
      console.log(response)
    }).catch(()=>{
      setUsers([]);
    })
  },[])
  console.log(props);
  return (
    <BasicLayout
    className="users"
    title="Usuarios"
    setRefreshCheckLogin={setRefreshCheckLogin}>
    
    <div className="users__title">
  <h2>Users</h2>
  <input
    type="text"
    placeholder="Search Users"
  />
</div>
<ButtonGroup className="users__options">
        <Button className="active" >Following</Button>
        <Button>Suggested</Button>
        </ButtonGroup>
    </BasicLayout>
  );
}
