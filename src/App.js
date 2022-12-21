import React from "react";
import "./style.scss";

function App() {
  return (
    <div className="tweet">
      <div className="tweet-author">
        <img
          src="https://pbs.twimg.com/profile_images/1507783683184410628/JWdn7D73_400x400.jpg"
          alt=""
        />
        <div className="name">Mücahit YILDIRIM</div>
        <div className="username">@mchtyldrm0</div>
      </div>
      <div className="tweet-content">
        <p>
          bu tweet fake tweet generator uygulamasi icin atilmistir ,
          aldirmayiniz
        </p>
      </div>
      <div className="tweet-stats">
        <span>
          <b>24</b>Retweet
        </span>
        <span>
          <b>24</b>Alinti Tweetler
        </span>
        <span>
          <b>24</b>Beğeni
        </span>
      </div>
      <div className="tweet-actions">
        <span>icon</span>
        <span>icon</span>
        <span>icon</span>
        <span>icon</span>
      </div>
    </div>
  );
}

export default App;
