import React, { useState, useEffect } from "react";
import { Media, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_HOST } from "../../utils/constant";
import { getUserApi } from "../../api/user";
import AvatarNoFound from "../../assets/png/avatar-no-found.png";
export default function User(props) {
  const { user } = props;
  const [userInfo, setIserInfo] = useState(null);

  useEffect(() => {
    getUserApi(user.id).then((response) => {
      setIserInfo(response);
    });
  }, [user]);

  return (
    <Media as={Link} to={`/${user.id}`} className="users__user">
      <Image
        width={64}
        height={64}
        roundedCircle
        className="mr-3"
        src={
          userInfo?.avatar
            ? `${API_HOST}/getAvatar?id=${user.id}`
            : AvatarNoFound
        }
        alt={`${user.name} ${user.lastname}`}
      />
      <Media.Body>
        <h5>
          {user.name} {user.lastname}
        </h5>
        <p>{userInfo?.biography}</p>
      </Media.Body>
    </Media>
  );
}