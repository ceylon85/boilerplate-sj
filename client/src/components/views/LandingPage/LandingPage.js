import React from "react";
import Comments from "./Sections/Comments";
import LikeDislikes from "./Sections/LikeDislikes";
import { Typography } from "antd";

function LandingPage() {
  const Title = Typography;

  return (
    <div className="app">
      <hr />
      <Title style={{ fontSize: "3rem" }}>시작페이지</Title>
      <div style={{ width: '85%', margin: '3rem auto' }}>
            <h2> 테이블 </h2>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>


                   바디


                </tbody>
            </table>
        </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LikeDislikes/>
      </div>
      <Comments />
    </div>
  );
}

export default LandingPage;
