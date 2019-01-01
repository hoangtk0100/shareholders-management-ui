import React, { Component } from 'react';
import {
  Card, CardBody, CardHeader, Col, Row,  Button,
  FormGroup, Input, Label, FormFeedback, CardFooter,
} from 'reactstrap';

import usersData from './UsersData'

let isValid = 'valid';
class User extends Component {
  // isValid = (props) => {
  //   const {password, rePassword} = props;
  //   // if()
  //   if(password !== rePassword) {
  //     return 'invalid';
  //   } else {
  //     return 'valid'
  //   }
  // }
  

  render() {
    const user = usersData.find(user => user.id.toString() === this.props.match.params.id)
    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
              <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                {
                  userDetails.map(([key, value]) => {
                    return (
                      <FormGroup>
                        <Label htmlFor={`${key}`}>{`${key}`.toUpperCase()}</Label>
                        <Input type="text" id={`${key}`} placeholder={value} />
                      </FormGroup>
                    )
                  })
                }

                {/* <FormGroup>
                  <Label htmlFor="company">Company</Label>
                  <Input type="text" id="company" placeholder="Enter your company name" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="vat">VAT</Label>
                  <Input type="text" id="vat" placeholder="DE1234567890" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="street">Street</Label>
                  <Input type="text" id="street" placeholder="Enter street name" />
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="city">City</Label>
                      <Input type="text" id="city" placeholder="Enter your city" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input type="text" id="postal-code" placeholder="Postal Code" />
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="country">Country</Label>
                  <Input type="text" id="country" placeholder="Country name" />
                </FormGroup> */}
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Change Password</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="inputIsValid">New Password</Label>
                  <Input type={`"text" ${isValid} id="newpassword" `} />
                  <FormFeedback valid>Cool! Input is valid</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputIsInvalid">Re-enter Password</Label>
                  <Input type="text" invalid id="repassword"  />
                  <FormFeedback>Houston, we have a problem...</FormFeedback>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User;
