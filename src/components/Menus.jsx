import React from 'react'

export default function Menus() {

  const logo = require("./img/agam.ico");

  const eachMenuItems = ["Home", "Explore", "Notifications", "Messages", "Bookmarks", "Lists", "Profile", "More"];

    return (
      <div>
        <div className="mainMenu">
        
          <ul className="mainMenuItems">
          <div className="menusProfilePhoto">
            <img src={logo} alt="agam prof" />
          </div>
          <div className="eachItems">
            {eachMenuItems.map(items => <li><a href="index">{items}</a></li>)}
            <button className="menuTweetButton">Tweet</button>
            </div>
          </ul>
          <div className="myLoginInfo"></div>
        </div>
      </div>
    );
}
