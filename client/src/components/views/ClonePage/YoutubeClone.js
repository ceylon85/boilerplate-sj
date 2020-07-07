import React from "react";
import { Icon } from "antd";
import styles from './style.css';

import "./style.css";

function youtubeClone() {

  return (
    <div className="app">
      <header className="header">
        <div className="header .logo">
          <Icon
            type="youtube"
            theme="filled"
            style={{ fontSize: "18px", color: "rgb(120, 227, 227)" }}
          />
          <span class="title">Y-tube</span>
        </div>
        <div class="icons">
          <Icon type="search" style={{ fontSize: "1rem" }} />
          <i class="fas fa-search"></i>
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </header>
      <section class="player">
        <video controls src="video/Crazy Frog.mp4"></video>
      </section>
      <div class="infoAndUpNext">
        <section class="info">
          <div class="metadata">
            <ul class="hashtags">
              <li>#Youtube</li>
              <li>#HTML</li>
              <li>#CSS</li>
            </ul>
            <div class="titleAndButton">
              <span class="title clamp">
                이 사이트는 HTML과 CSS 를 이용한 Youtube Clone coding 입니다.
                HTML + CSS +JS web site clone
              </span>
              <button class="moreBtn">
                <i class="fas fa-caret-down"></i>
              </button>
            </div>
            <span class="views">1000 views 1 weeks ago</span>
          </div>
          <ul class="actions">
            <li>
              <button>
                <i class="active fas fa-thumbs-up"></i>
                <span>1.2K</span>
              </button>
            </li>
            <li>
              <button>
                <i class="fas fa-thumbs-down"></i>
                <span>10</span>
              </button>
            </li>
            <li>
              <button>
                <i class="fas fa-share"></i>
                <span>Share</span>
              </button>
            </li>
            <li>
              <button>
                <i class="fas fa-plus"></i>
                <span>Save</span>
              </button>
            </li>
            <li>
              <button>
                <i class="fab fa-font-awesome-flag"></i>
                <span>Report</span>
              </button>
            </li>
          </ul>
          <div class="channel">
            <div class="metadata">
              <img src="image/Compass.jpg" alt="avatars" />
              <div class="info">
                <span class="name">Coding by SJ Lee</span>
                <span class="subscribers">구독자 1.2K 명</span>
              </div>
            </div>
            <button class="subscribe">
              <span class="btn">subscribe</span>
            </button>
          </div>
        </section>
        <section class="upNext">
          <span class="title">Up next</span>
          <ul>
            <li class="item">
              <div class="img">
                {" "}
                <img src="image/1.jpg" alt="ship" />
              </div>
              <div class="info">
                <span class="title">
                  남극을 찾아오는 배 과연 정체는 무엇인가?
                </span>
                <span class="name">Happy Coding by SJ Lee</span>
                <span class="views">78 views</span>
              </div>
              <button class="moreBtn">
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </li>
            <li class="item">
              <div class="img">
                <img src="image/2.jpg" alt="penguin" />
              </div>
              <div class="info">
                <span class="title">남극 펭귄가족의 생활</span>
                <span class="name">Happy Coding by SJ Lee</span>
                <span class="views">250 views</span>
              </div>
              <button class="moreBtn">
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </li>
            <li class="item">
              <div class="img">
                <img src="image/3.jpg" alt="whale" />
              </div>
              <div class="info">
                <span class="title">고래를 찾아서 여기는 남극입니다.</span>
                <span class="name">Happy Coding by SJ Lee</span>
                <span class="views">150 views</span>
              </div>
              <button class="moreBtn">
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default youtubeClone;
