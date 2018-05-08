
import React, { Component } from 'react';
import { Grid, Row, Col, Tab, Nav, NavItem, FormGroup, FormControl, InputGroup, Glyphicon, Button } from "react-bootstrap";
import Logo from "../../assets/logo.png"
import language from "../../assets/language.png"
// import "./dashdoard-style/tutorial.css"
import "./index.css"
// import {Grid, Row, Col, Table, thead, tr, th, tbody, td} from 'react-bootstrap'
import CreatePredictors from '../CreatePredictors';
import TrainingEvent from '../TrainingEvent';

class SideNav extends Component {
    constructor() {
        super()
        this.state = {
            flage: false
        }
    }

    render() {
        return (
            <div className="sideBar">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} sm={12} md={2} className="sideBarPanel">
                            <Col sm={4} md={4} className="sideBarIcons">
                                <div className="sidebar-container">
                                    <div  >
                                        <div style={{}}>
                                            <img className="tutorial-logo" src={Logo} alt="" />
                                        </div>
                                        <div>
                                            <p
                                                style={{
                                                    color: "#4e008b",
                                                    fontWeight: "bold",
                                                    letterSpacing: 2,
                                                    marginTop: 5,
                                                    marginLeft: 10,
                                                    marginBottom: 40,
                                                    fontSize: 10
                                                }} >
                                                CANVASS
                                </p>
                                        </div>
                                    </div>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" bsStyle="Tab-Container">
                                        <Row className="clearfix">
                                            <Col sm={12}>
                                                <Nav bsStyle="pills tab-style" stacked>
                                                    <NavItem bsClss="NavItem" eventKey="first">
                                                        <div className="tab-Image"  >
                                                            <img className="tutorial-button" src={language} alt="" />
                                                            <p className="icon-text" >
                                                                PREDICTORS
                                            </p>
                                                        </div>
                                                    </NavItem>

                                                    {/* <br /> */}
                                                    <NavItem bsClss="NavItem" eventKey="Sec">
                                                        <div className="tab-Image" >
                                                            <img className="tutorial-button" alt="" src={language} />
                                                            <p className="icon-text" >
                                                                DATA SETS
                                            </p>
                                                        </div>
                                                    </NavItem>
                                                    <NavItem bsClss="NavItem" eventKey="thr">
                                                        <div className="tab-Image" >
                                                            <img className="tutorial-button" src={language} alt="" />
                                                            <p className="icon-text" >
                                                                TRAINING
                                                                EVENTS
                                            </p>

                                                        </div>
                                                    </NavItem>
                                                    <NavItem bsClss="NavItem" eventKey="forth">
                                                        <div className="tab-Image" >
                                                            <img className="tutorial-button" src={language} alt="" />
                                                            <p className="icon-text" >
                                                                OPTIMIZERS
                                            </p>
                                                        </div>
                                                    </NavItem>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <NavItem bsClss="NavItem" eventKey="fifth">
                                                        <div className="tab-Image" >
                                                            <img className="tutorial-button" src={language} alt="" />
                                                            <p className="icon-text" >
                                                                DASHBOARDS
                                            </p>
                                                        </div>
                                                    </NavItem>
                                                </Nav>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </div>
                            </Col>

                            <Col md={8} sm={2} className="searchPanel">
                                <div className="search-form-container" >
                                    <div className="search-form-div" >
                                        <div style={{ marginLeft: 10, marginRight: 10, paddingTop: 43 }} >
                                            <FormGroup>
                                                <InputGroup >
                                                    <FormControl
                                                        className="FormControl-style"
                                                        type="text" />
                                                    <InputGroup.Addon className="search-Icon" >
                                                        <Glyphicon glyph="search" />
                                                    </InputGroup.Addon>
                                                </InputGroup>
                                            </FormGroup>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: 55 }} >
                                        <Row>
                                            <Col md={8} >
                                                <p className="PREDICTORS-text" >
                                                    MOST RECENT
                                                PREDICTORS
                                    </p>
                                            </Col>
                                            <Col>
                                                <div className="icon-div" >
                                                    {(this.state.flage === false) ?
                                                        <Glyphicon
                                                            onClick={() => this.setState({ flage: true })}
                                                            className="Glyphicon"
                                                            glyph="glyphicon glyphicon-chevron-up" />
                                                        :
                                                        <Glyphicon
                                                            onClick={() => this.setState({ flage: false })}
                                                            className="Glyphicon"
                                                            glyph="glyphicon glyphicon-chevron-down" />
                                                    }
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                    <div>
                                        <Row>

                                            <Col md={12} >
                                                <Button bsClass="add-new-button" >ADD NEW<span className="add-button-span" >+</span></Button>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Col>
                        </Col>
                        <Col xs={12} sm={12} md={10} className="datasetSetup">
                            {/* <CreatePredictors /> */}
                            <TrainingEvent/>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}


export default SideNav;

