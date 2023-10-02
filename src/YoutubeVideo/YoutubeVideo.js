import React from "react";
import "./YoutubeVideo.css";

const practiceJS = () => {
  return (
    <section className="temp">
      {/* 헤더 */}
      <header>
        <div className="logo">
          <i className="fad fa-youtube"></i>
          <span className="title">Youtube</span>
        </div>
        <div className="icons">
          <i className="fa-solid fas fa-search"></i>
          <i className="fa-solid fas fa-ellipsis-v"></i>
        </div>
      </header>
      {/* 비디오 */}
      <section className="player">
        <video controls>
          <source src="/tempVideo.mp4" type="video/mp4" />
        </video>
      </section>
      {/* 타이틀 */}
      <section className="info">
        {/* 타이틀 설명 */}
        <div className="metadata">
          <ul className="hashtags">
            <li>#DreamCoding</li>
            <li>#DreamCoders</li>
            <li>#Ellie</li>
          </ul>
          <div className="titleAndBUtton">
            <span className="title">
              클론코딩 유튜브 사이트 따라 만들기(HTML+CSS 연습편, 웹 포트폴리오)
              | 프론트엔드 개발자 입문편: HTML, CSS, Javascript
            </span>
            <button className="moreBtn">
              <i className="fa-solid fas fa-caret-down"></i>
            </button>
          </div>
          <div className="views">
            <span>1M views 1 month ago</span>
          </div>
        </div>
        {/* 아이콘들 */}
        <ul className="actions">
          <li>
            <button>
              <i className="fa-solid fas fa-thumbs-up"></i>
              <span>1K</span>
            </button>
          </li>
          <li>
            <button>
              <i className="fa-solid fas  fa-thumbs-down"></i>
              <span>0</span>
            </button>
          </li>
          <li>
            <button>
              <i className="fa-solid fas  fa-share"></i>
              <span>Share</span>
            </button>
          </li>
          <li>
            <button>
              <i className="fa-solid fas fa-plus"></i>
              <span>Save</span>
            </button>
          </li>
          <li>
            <button>
              <i className="fa-solid fas  fa-font-awesome-flag"></i>
              <span>Report</span>
            </button>
          </li>
        </ul>
        {/* 채널 정보 */}
        <div className="channel">
          <div className="metadata">
            <img src="/logo192.png" alt="Sample" />
            <div className="info">
              <span className="name">드림코딩 by 엘리</span>
              <span className="subscribers">1M subscribers</span>
            </div>
            <button className="subscribe">SUBSCRIBE</button>
          </div>
        </div>
      </section>
      {/* 다른 영상 추천 */}
      <section className="upNext">
        <span>Up next</span>
        <ul>
          <li className="item">
            <img src="/logo192.png"></img>
            <div className="info">
              <span className="title">
                클론코딩 유튜브 사이트 따라 만들기(HTML+CSS 연습편, 웹
                포트폴리오) | 프론트엔드 개발자 입문편: HTML, CSS, Javascript
              </span>
              <span className="name">드림코딩 by 엘리</span>
              <span className="views">82K views</span>
            </div>
            <button className="moreBtn">
              <i className="fad fas fa-ellipsis-v"></i>
            </button>
          </li>
          <li className="item">
            <img src="/logo192.png"></img>
            <div className="info">
              <span className="title">
                클론코딩 유튜브 사이트 따라 만들기(HTML+CSS 연습편, 웹
                포트폴리오) | 프론트엔드 개발자 입문편: HTML, CSS, Javascript
              </span>
              <span className="name">드림코딩 by 엘리</span>
              <span className="views">82K views</span>
            </div>
            <button className="moreBtn">
              <i className="fad fas fa-ellipsis-v"></i>
            </button>
          </li>
          <li className="item">
            <img src="/logo192.png"></img>
            <div className="info">
              <span className="title">
                클론코딩 유튜브 사이트 따라 만들기(HTML+CSS 연습편, 웹
                포트폴리오) | 프론트엔드 개발자 입문편: HTML, CSS, Javascript
              </span>
              <span className="name">드림코딩 by 엘리</span>
              <span className="views">82K views</span>
            </div>
            <button className="moreBtn">
              <i className="fad fas fa-ellipsis-v"></i>
            </button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default practiceJS;
