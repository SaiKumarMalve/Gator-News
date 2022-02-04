import React, { useState, useEffect } from "react";
import "./ListTweets.scss";
import avatar from "../../assets/png/user.png";
import gatornights from "../../assets/png/Gatornights.png";
import {Image} from "react-bootstrap"
import user from "../../page/User/User";
import Datetime from 'react-datetime';
export default function ListTweets(props) {
    
    const { user } = props;
    console.log(user);
  return (
    <div className="list-tweets">
<div className="tweet">
      <Image className="avatar" src={avatar} roundedCircle />
      <div>
        <div className="name">
          <span>Jayanth Atcha</span>
        </div>
        <div>
              </div>
              <b>
              @ufgatornights</b>
              <p> This week the whole place will be dressed to the nines and we'll be dancing💃🕺💽🎤
                like we're made of starlight✨🌠.
                <br></br>
        We are excited to announce that <font color="blue"><b><u>"Gator Gala"</u></b></font> will be taking place at the Reitz Union on January 28th from 7:00 PM to 11:00 PM.
        <br></br> We encourage you to come dressed in your best attire 👗🥼or to come as you are.
<br></br>
  GatorNights is free🎉 for all current UF students with a valid Gator 1 Card. Attendees must be cleared for campus to participate. 
  <p>Check-in will be at the ballrooms. There are no guests allowed at this week's event.</p>
</p>
        </div>
         
        </div>
        <div className="tweet">
      <Image className="avatar" src={avatar} roundedCircle />
      <div>
        <div className="name">
          <span>Jayanth Atcha</span>
        </div>
        <div>
              </div>
              <b><i>@gatordining</i></b> Friday, February 11 is <font color="blue"><b><u>National Make A Friend Day👭👬</u> </b></font>- and we are celebrating🎉 friendships🥰! <br></br>
               We are there for you😎!! In the spirit of this day, we encourage you to make new friends, but keep the old.<br></br>
      Winners🏆 will be gifted with some very cool Friends 😎(the
sitcom) merchandise🥳 .<br></br> Here's what you need to do to
enter:<br></br>
💙 Like this post<br></br>
➕ Follow our Gator Dining page<br></br>
📸 (This one's different!!) Take a picture with your
friends at one of our dining locations, post it to your
feed, and tag us in it!<br></br>
✌️ For an extra entry, share this post on your story!
</div>
</div>
        </div>
        );
        }