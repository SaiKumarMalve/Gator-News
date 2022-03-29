import React, { useState, useEffect } from "react";
import { API_HOST } from "../../../utils/constant";
import banner from "../../../assets/png/logo.png";
import avatar from "../../../assets/png/user.png";
import "./BannerAvatar.scss";
import ConfigModal from "../../Modal/ConfigModal";
import { Button } from "react-bootstrap";
import EditUserForm from "../EditUserForm";

import { checkFollowApi , followUserApi} from "../../../api/follow";

export default function BannerAvatar(props) {
  const { user,loggedUser } = props;
  console.log(user);
  const [showModal, setShowModal] = useState(false);

  const [following, setFollowing] = useState(null);
  const [reloadFollow, setReloadFollow] = useState(false);

  const bannerUrl = user?.banner
    ? `${API_HOST}/getBanner?id=${user.id}`
    : null;
    const avatarUrl=user?.avatar?`${API_HOST}/getBanner?id=${user.id}`:avatar;
    console.log(loggedUser);

    useEffect(() => {
      if (user) {
        checkFollowApi(user?.id).then(response => {
          if (response?.status) {
            setFollowing(true);
          } else {
            setFollowing(false);
          }
        });
      }     setReloadFollow(false);

    }, [user, reloadFollow]);

    const onFollow = () => {
      followUserApi(user.id).then(() => {
        setReloadFollow(true);
      });
    };

  return (
    <div
    className="banner-avatar"
    style={{ backgroundImage: `url('${bannerUrl}')` }}
  >
    <div
      className="avatar"
      style={{ backgroundImage: `url('${avatarUrl}')` }}
    />
        {user && (
        <div className="options">
          {loggedUser._id === user.id && (
            <Button onClick={() => setShowModal(true)}>Edit Profile</Button>
          )}
          {loggedUser._id !== user.id &&
            following !== null &&
            (following ? (
              <Button>
                <span>Following</span>
              </Button>
            ) : (
              <Button onClick={onFollow} >Follow</Button>
            ))}
            </div>
          )}

      <ConfigModal
        show={showModal}
        setShow={setShowModal}
        title="Edit Profile"
      >
        <EditUserForm user={user} setShowModal={setShowModal} />
          
      </ConfigModal>

    </div>
        
  );
}