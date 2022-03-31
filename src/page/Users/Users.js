import React, { useState, useEffect } from "react";
import { Spinner, ButtonGroup, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { isEmpty } from "lodash";
import BasicLayout from "../../layout/BasicLayout";
import "./Users.scss";
import { getFollowsApi } from "../../api/follow";
import queryString from "query-string";
import ListUsers from "../../components/ListUsers";
function AllUsers(props) {
  const { setRefreshCheckLogin,location} = props;
  const [users, setUsers] = useState(null);
const params = useUsersQuery(location);
  useEffect(()=>{
    getFollowsApi("page=1&type=new&search=")
    .then(response=>{
      if (isEmpty(response)) {
        setUsers([]);
      } else {
        setUsers(response);
      }
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
        {
          !users?(
          <div className="users__loading">
          <Spinner animation="border" variant="info" />
          Buscando usuarios
        </div>
          ):(
            <ListUsers/>
          )
        }
    </BasicLayout>
  );
}
function useUsersQuery(location) {
  const { page = 1, type = "follow", search } = queryString.parse(
    location.search
  );

  return { page, type, search };
}

export default withRouter(AllUsers);