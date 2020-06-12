import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";

import {
  Form,
  Input,
  Button,
} from 'antd';

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [LastName, setLastName] = useState("")
  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onLastNameHandler = (e) => {
    setLastName(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 같아야 합니다");
    }
     
    let body = {
      email: Email,
      password: Password,
      name: Name,
      lastname: LastName
    };

    dispatch(registerUser(body))
    .then((response) => {
        if(response.payload.success){
            props.history.push('/login')
        }else {
            alert('회원가입에 실패')
        }
    });
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
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
    <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={onSubmitHandler} >
        <Form.Item required label="Name">
        <Input type="text" value={Name} onChange={onNameHandler} />
        </Form.Item>
        <Form.Item unrequired label="Last Name">
        <Input type="text" value={LastName} onChange={onLastNameHandler} />
        </Form.Item>
        <Form.Item required label="Email"> 
        <Input type="email" value={Email} onChange={onEmailHandler} />
        </Form.Item>
        <Form.Item required label="Password">
        <Input type="password" value={Password} onChange={onPasswordHandler} />
        </Form.Item>
        <Form.Item required label="Confirm">
        <Input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        </Form.Item>
        <br />
        <Button type="submit">회원가입</Button>
      </Form>
    </div>
  );
}

export default RegisterPage;
