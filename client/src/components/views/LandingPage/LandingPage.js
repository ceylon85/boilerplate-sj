import React, { useEffect } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Button, Typography } from 'antd';

function LandingPage(props) {
  const Title = Typography
    
  useEffect(() => {
    Axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  const onClickHandler = () => {
    Axios.get('/api/users/logout').then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃에 실패!");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Title>landing</Title>
      <Button onClick={onClickHandler}>로그아웃</Button>
    </div>
  );
}

export default withRouter(LandingPage) ;
