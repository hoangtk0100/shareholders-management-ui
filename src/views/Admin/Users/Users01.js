import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Badge, Card, CardBody, CardHeader, Col, Row, Table,
  DropdownItem, DropdownMenu, DropdownToggle, InputGroupAddon,
  ButtonDropdown, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import usersData from './UsersData'

//  const constructor(props) => {
//   super(props);

//   this.toggle = this.toggle.bind(this);
//   this.state = {
//     dropdownOpen: new Array(19).fill(false),
//   };
// }

// toggle(i) {
//   const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
//   this.setState({
//     dropdownOpen: newArray,
//   });
// }

function UserRow(props) {
  const user = props.user
  const userLink = `/admin/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    // <div>
    //     <BootstrapTable ref='table' data={ products } multiColumnSort={ 2 }>
    //         <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
    //         <TableHeaderColumn dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
    //         <TableHeaderColumn dataField='price' dataSort={ true }>Product Price</TableHeaderColumn>
    //     </BootstrapTable>
    //   </div>
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
      <td>
        <InputGroupAddon addonType="prepend">
          <ButtonDropdown
          //  isOpen={this.state.first}
          //   toggle={() => { this.setState({ first: !this.state.first }); }}
          //  className="mr-1" isOpen={this.state.dropdownOpen[4]} toggle={() => { this.toggle(4); }}
          >
            <DropdownToggle caret color="primary">Action</DropdownToggle>
            <DropdownMenu
            // className={this.state.first ? 'show' : ''}
            >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Separated link</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </InputGroupAddon>
      </td>
    </tr>
  )
}

class Users01 extends Component {

  render() {
    const userList = usersData.filter((user) => user.id < 10)
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover bordered >
                  <thead>
                    <tr>
                      {/* <th class="sort-column" data-is-only-head="false" title="Name" data-field="name" style="text-align: left;">Name<span class="order fa fa-sort" style="margin: 10px 0px 10px 5px; color: rgb(204, 204, 204);"></span></th> */}
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                      <th scope="col">action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user} />
                    )}
                  </tbody>
                </Table>
                <Row style={{marginTop: 15}} end="md"            >
                  <Col md={7}></Col>
                  <Col //style={{display: block}}
                  // xs={6} md={6} lg={6} sm={6}
                  // xsOffset={9} xs={3} xl={3}
                  md={5} 
                  >
                    <Pagination>
                      {/* <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>  */}
                      <PaginationItem active><PaginationLink tag="button">1</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                    </Pagination>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users01;
