import React, {useState} from 'react';
import News from "./News.js";
import People from "./People.js"

export default function Etc() {
    return (
      <div>
        <p>Search</p>
        <div className="whatsHappening">
          <h5>What's happening</h5>
          {News.map(news => {
            return (
              <div>
                <small>{news.category}</small>
                <h6>{news.title}</h6>
              </div>
            );
          })}
        </div>
        <div className="whoToFollow">
          <h5>Who to follow</h5>
          {People.map(person => {
            return (
              <div>
              <img src={person.picture} />
              <h6>{person.name}</h6>
              <small>{person.userName}</small>
              </div>
            )
          })}
        </div>
      </div>
    );
}
