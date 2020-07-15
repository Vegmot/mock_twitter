import React, { useState } from "react";
import logo from "./img/agamtrim.png";

export default function PostArea(props) {
  const [post, setPost] = useState({
    contents: "",
    dateTime: new Date().toLocaleString()
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPost((prevPost) => {
      return {
        ...prevPost,
        [name]: value
      };
    });
  }

  function submitPost(event) {
    props.onAdd(post);
    setPost({
      contents: "",
      dateTime: new Date().toLocaleString()
    });

    event.preventDefault();
  }

  return (
    <div className="compose">
      <div className="composeArea">
        <div className="composeAreaImg">
          <img src={logo} alt="P" />
        </div>
        <div className="composeAreaText">
          <form>
            <textarea
              name="contents"
              className="tweetContent"
              onChange={handleChange}
              value={post.contents}
              placeholder="What's happening?"
              style={{ color: "#fff" }}
              rows="3"
            />
          </form>
        </div>
      </div>
      <div className="moreOptions">
        {/* Picture image */}
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-image"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M14.002 2h-12a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12z"
          />
          <path d="M10.648 7.646a.5.5 0 0 1 .577-.093L15.002 9.5V14h-14v-2l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71z" />
          <path
            fill-rule="evenodd"
            d="M4.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          />
        </svg>
        {/* Movie(gif) img */}
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-film"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0h8v6H4V1zm8 8H4v6h8V9zM1 1h2v2H1V1zm2 3H1v2h2V4zM1 7h2v2H1V7zm2 3H1v2h2v-2zm-2 3h2v2H1v-2zM15 1h-2v2h2V1zm-2 3h2v2h-2V4zm2 3h-2v2h2V7zm-2 3h2v2h-2v-2zm2 3h-2v2h2v-2z"
          />
        </svg>
        {/* Bar chart image*/}
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-bar-chart-line"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
          />
          <path
            fill-rule="evenodd"
            d="M0 14.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        {/* smile image */}
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-emoji-smile"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fill-rule="evenodd"
            d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"
          />
          <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
        </svg>
        {/* calendar image */}
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-calendar4-event"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
          />
          <path
            fill-rule="evenodd"
            d="M14 2H2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2H2z"
          />
          <path
            fill-rule="evenodd"
            d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
          />
          <rect width="2" height="2" x="11" y="7" rx=".5" />
        </svg>
      </div>
      <button className="submitPostBtn" onClick={submitPost}>
        Tweet
      </button>
    </div>
  );
}
