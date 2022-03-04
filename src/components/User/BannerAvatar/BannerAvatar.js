import React from "react";
import { API_HOST } from "../../../utils/constant";
import banner from "../../../assets/png/logo.png";
import avatar from "../../../assets/png/user.png";
import "./BannerAvatar.scss";
import { Button } from "react-bootstrap";
export default function Routing(props) {
  const { user,loggedUser } = props;
  console.log(user);

  const bannerUrl = user?.banner
    ? `${API_HOST}/obtenerBanner?id=${user.id}`
    : null;
    const avatarUrl=user?.avatar?`${API_HOST}/getBanner?id=${user.id}`:avatar;
    console.log(loggedUser);

  return (
      <div className="banner-avatar">
        <img data-testid="banner_avatar" src={banner} alt="Gator" />
        <div className="avatar">
          <img  data-testid="user_avatar" src={avatar} alt="UserAvatar"/>
        </div>
        {user && (
        <div className="options">
          {loggedUser._id===user.id&&
            <Button>Edit Profile </Button>}
          {loggedUser._id!==user.id&&
            <Button>Follow</Button>
          }
            </div>
          )}
          </div>
        
  );
}