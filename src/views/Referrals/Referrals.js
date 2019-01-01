import React, { Component } from 'react';
import {Col, Row } from 'reactstrap';
import Users from '../Admin/Users/Users01';


class Referrals extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Users />
            </Col>
          <Col xl={6}>
            <Users />
            </Col>
        </Row>
        <Row>

        <Col xl={12}>
            <Users />
            </Col>
        </Row>
      </div>
    )
  }
}

export default Referrals;
