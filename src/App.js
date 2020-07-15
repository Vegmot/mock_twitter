import React, { useState } from "react";
import Menus from "./components/Menus";
import PostArea from "./components/Postarea";
import Etc from "./components/Etc";
import Post from "./components/Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts((prevPosts) => {
      return [newPost, ...prevPosts];
    });
  }

  function deletePost(id) {
    setPosts((prevPosts) => {
      return prevPosts.filter((postItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div id="mainMenu" className="mainMenu col-sm-2">
          <Menus />
        </div>

        <div id="mainPosts" className="mainPosts col-sm-8">
          <div className="posts">
            <div className="postsHeader">
              <h4>Home</h4>
              <span className="composeIcon">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-lightning"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"
                  />
                </svg>
              </span>
            </div>
            <PostArea onAdd={addPost} />
            {posts.map((postItem, index) => {
              return (
                <Post
                  key={index}
                  id={index}
                  dateTime={postItem.dateTime}
                  contents={postItem.contents}
                  onDelete={deletePost}
                />
              );
            })}

            <div className="customize">
              <h4>Customize your view #icon</h4>
              <p>
                Sometimes you need to freshen things up a bit, like swapping
                colors, super-sizing your text, or revisiting your dark mode
                selection, all of which you can do in your settings.
              </p>
              <button className="customizeBtn" type="button">
                Change view
              </button>
            </div>
          </div>
        </div>

        <div id="mainEtc" className="mainEtc col-sm-2">
          <Etc />
        </div>
      </div>
    </div>
  );
}

export default App;
