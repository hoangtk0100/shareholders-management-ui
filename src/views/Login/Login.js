import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userService, loginService } from '../../services';

import { routeConstants } from '../../utils/constants/routes.constant';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const errMsg401 = 'Username and password combination is incorrect.';
const invalidArgumentMessage = "Username or password is invalid!";

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      user: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  }

  handleUsernameChange = (event) => {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  }

  handlePasswordChange = (event) => {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  }

  onClick = () => {
    console.log(this.state.values);
    let username = this.state.username;
    let password = this.state.password;
    let currentUser = { username, password };

    if (this.state.username.trim() === '' || this.state.password.trim() === '') {
      alert('loi r neh');
    } else {
      userService.retrieveByUsername(username)
      // loginService.login(currentUser)
        .then(data => {
          if (data.errorCode !== 0) {
            this.setState({ errorMessage: errMsg401 });
          } else {
            localStorage.setItem('userSession', JSON.stringify(data.data));
            if (data.data.password !== password) {
              this.props.history.push('/login');
              // window.location("#login");
              alert(invalidArgumentMessage);
            } else if ((data.data).role.name === 'ADMIN') {
              this.setState({ user: currentUser })
              alert("userid: " + data.data.id);
              alert("role: " + data.data.role.name);
              this.props.history.push('/admin');
            } else {
              this.props.history.push('/')
            }
          }
        })
        .catch(err => {
          console.error(err);
          alert('loi sml');
        });
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" onChange={this.handleUsernameChange} id="inputUsername" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" onChange={this.handlePasswordChange} id="inputPassword" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.onClick}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0" onClick={this.ResetPassword}>Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Reset Password</h2>
                      <p>Click 'Send' and then check your email</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-email"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Enter your email" autoComplete="email" id="inputEmail" />
                      </InputGroup>
                      <Link to="/resetPassword">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Send</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
