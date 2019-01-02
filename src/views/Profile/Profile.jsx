import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";

import avatar from "../../assets/img/faces/marc.jpg";
import { userService } from '../../services';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const profile = () => {
  {
    const storageUser = JSON.parse(localStorage.getItem('userSession'));
    userService.retrieveById(storageUser.id).then(data => {
      if (data.errorCode !== 0) {
        let errMsg = data.errorCode;
        if (data.errorCode === 401) {
          errMsg = 'errMsg401';
        }
      } else {
        localStorage['userSession'] = data.data;
        this.setState({
          user: data.data
        });
      }
    })
      .catch(err => {
        console.error(err);
        // this.setState({ errMessage: err.message });
        alert('loi sml');
      });
  }
}

class Profile extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isUpdated: false,
      user: {}
    }
  }

  changePassword = () => {
    // if (this.state.user.)
  }

  componentWillMount() {
    localStorage.getItem('contacts') && this.setState({
      user: JSON.parse(localStorage.getItem('contacts')),
      isUpdate: false
    })
  }


  componentDidMount() {

    // const date = localStorage.getItem('contactsDate');
    // const contactsDate = date && new Date(parseInt(date));
    // const now = new Date();

    // const dataAge = Math.round((now - contactsDate) / (1000 * 60)); // in minutes
    // const tooOld = dataAge >= 1;

    // if(tooOld){
    //     this.fetchData();            
    // } else {
    //     console.log(`Using data from localStorage that are ${dataAge} minutes old.`);
    // }

  }

  render() {
    const { fullName, phoneNumber, gender, personalId, email, password, address } = this.state.user;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={Profile.cardTitleWhite}>Edit Profile</h4>
                <p className={Profile.cardCategoryWhite}>Complete your profile</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Full Name"
                      id="full-name"
                      input="dfd"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Phone Number"
                      id="phone-number"
                      formControlProps={{
                        fullWidth: true
                      }}

                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="ID"
                      id="personal-id"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Gender"
                      id="gender"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Birthday"
                      id="birthday"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Address"
                      id="address"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary">Update Profile</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <CustomInput
                  labelText="New Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <CustomInput
                  labelText="Re-enter Password"
                  id="rePassword"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <Button color="primary" round onClick={this.changePassword}>
                  Change
              </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
