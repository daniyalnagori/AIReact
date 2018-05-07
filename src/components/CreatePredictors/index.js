import React, { Component } from 'react';
import './index.css';
import { Grid, Row, Col, Table, thead, tr, th, tbody, td } from 'react-bootstrap'
import Stepper from 'react-stepper-horizontal'

class CreatePredictors extends Component {
    constructor() {
        super();
        this.state = {
            activeStep: 0
        }

    }

    next() {
        if (this.state.activeStep === 0) {

            this.setState({ activeStep: 1 })
        } else if (this.state.activeStep === 1) {
            this.setState({ activeStep: 2 })
        }
    }
    back() {
        if (this.state.activeStep === 2) {

            this.setState({ activeStep: 1 })
        } else if (this.state.activeStep === 1) {
            this.setState({ activeStep: 0 })
        }
    }

    render() {

        return (
            <div>
                <div className="sc3">
                    <div className="container">
                        <div className="stepper">
                            <Stepper className="stepp" defaultColor="#fff" activeTitleColor="white" completeColor="#7100ac" defaultTitleColor="#a8a8a8" circleFontColor="#a8a8a8" defaultBorderColor="black" completeBorderColor="#cfcfcf" activeColor="#7100ac" barStyle="dashed" steps={[{ title: '' }, { title: '' }, { title: '' }]} activeStep={this.state.activeStep} />
                        </div>
                        <br />
                        <div>
                            <Grid>
                                {this.state.activeStep === 0 ?
                                    <div style={{ background: "white" }}>

                                        <p className="createA">CREATE A PREDICTOR</p>
                                        <br />
                                        <Row className="show-grid">
                                            <Col xs={12} md={12} style={{ background: "white" }}>
                                                <label style={{ width: "100%", color: "#878787" }}>
                                                    Name
                                                <input type="text" className="input" style={{ outline: "none" }} placeholder="Lysine4HourLive" />
                                                </label>
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />

                                        <Row className="show-grid">
                                            <Col xs={12} md={12} style={{ background: "white" }}>
                                                <label style={{ width: "100%", color: "#878787" }}>
                                                    Status
                                                <input type="text" className="input" style={{ outline: "none" }} placeholder="Production" />
                                                </label>
                                            </Col>
                                        </Row>
                                        <br />

                                        <Row className="show-grid">
                                            <Col xs={12} md={12} style={{ background: "white" }}>
                                                <label style={{ width: "100%", color: "#878787" }}>
                                                    Model Type
                                                <input type="text" className="input" style={{ outline: "none" }} placeholder="Future Value" />
                                                </label>
                                            </Col>
                                        </Row>
                                    </div>

                                    : null}
                                {this.state.activeStep === 1 ?
                                    <div>
                                        <p className="createA">CREATE A DATASET TO USE</p>
                                        <p>Heloo</p>

                                    </div>
                                    : null}

                                {this.state.activeStep === 2 ?
                                    <div style={{ background: "white" }}>
                                        <p className="createA">SETUP THE DATASET </p>
                                        <Row className="show-grid">
                                            <Col xs={12} md={12} className="cen" style={{ background: "white" }}>
                                                {/* <code> */}
                                                {/* <p style={{ background: "white", display: "table", width: "75%", margin: "0px auto", color: "#878787", letterSpacing: "1px", fontWeight: "bold" }}>NAME:<br /> <input type="text" className="input" value="Fermentation" /></p> */}
                                                <label style={{ width: "75%", color: "#878787" }}>
                                                    NAME
                                                <input type="text" className="input" style={{ outline: "none" }} placeholder="Fermentation" />
                                                </label>

                                            </Col>
                                        </Row>
                                        <br />
                                        <Row className="show-grid">
                                            <Col xs={12} md={12} className="cen" style={{ background: "white" }}>
                                                <label style={{ width: "75%", color: "#878787" }}>
                                                    HBASE TABLE NAME
                                                <input type="text" className="input" style={{ outline: "none" }} placeholder="Fermentation-lab" />
                                                </label>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row className="show-grid">
                                            <Col xs={12} md={12} className="cen" style={{ background: "white" }}>
                                                <label style={{ width: "75%", color: "#878787" }}>
                                                    DATE FORMAT
                                                <input type="text" className="input" style={{ outline: "none" }} placeholder="%m/%d/%Y %I:%M:%S %p" />
                                                </label>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row className="show-grid">
                                            <Col xs={12} md={12} className="cen" style={{ background: "white" }}>
                                                <label style={{ width: "75%", color: "#878787" }}>
                                                    HBASE TEST TABLE NAME
                                                <input type="text" className="input" style={{ outline: "none" }} placeholder="%m/%d/%Y %I:%M:%S %p" />
                                                </label>
                                            </Col>
                                        </Row>

                                    </div>
                                    : null}

                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                                <Row className="show-grid">
                                    <Col xs={10} md={10}>
                                            {this.state.activeStep === 1 ?
                                                <p className="modelType2" onClick={() => this.back()}>MODEL TYPE</p> : null}
                                            {this.state.activeStep === 2 ?
                                                <p className="modelType2" onClick={() => this.back()}>DATA SET</p> : null}
                                    </Col>
                                    <Col xs={2} md={2} >
                                            <div>
                                                {this.state.activeStep === 0 ?
                                                    <p className="modelType" onClick={() => this.next()}>MODEL TYPE</p>
                                                    : null}
                                                {this.state.activeStep === 1 ?
                                                    <p className="modelType" onClick={() => this.next()}>DATA SET</p>
                                                    : null}
                                                {this.state.activeStep === 2 ?
                                                    <p className="modelType" onClick={() => this.next()}>NEXT</p>
                                                    : null}
                                            </div>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </div>
                </div>
                <div style={{ width: "98%" }}>
                    <Row className="show-grid createPredictorRow">
                        <Col xs={2} md={2} className="bottomPredic">
                                <div className="groupBtn3">
                                    <div className="Main3">
                                        <span className="spann3">PREDICTOR</span>
                                        <span className="ques3 glyphicon glyphicon-chevron-down"></span>
                                    </div>
                                </div>
                        </Col>
                        <Col xs={2} md={2} className="bottomPredic">
                                <div className="groupBtn3">
                                    <div className="Main3">
                                        <span className="spann3">PREDICTOR</span>
                                        <span className="ques3 glyphicon glyphicon-chevron-down"></span>
                                    </div>
                                </div>
                        </Col>
                        <Col xs={2} md={2} className="bottomPredic">
                                <div className="groupBtn3">
                                    <div className="Main3">
                                        <span className="spann3">PREDICTOR</span>
                                        <span className="ques3 glyphicon glyphicon-chevron-down"></span>
                                    </div>
                                </div>
                        </Col>
                        <Col xs={2} md={2} className="bottomPredic">
                                <div className="groupBtn3">
                                    <div className="Main3">
                                        <span className="spann3">PREDICTOR</span>
                                        <span className="ques3 glyphicon glyphicon-chevron-down"></span>
                                    </div>
                                </div>
                        </Col>
                        <Col xs={2} md={2} className="bottomPredic">
                                <div className="groupBtn3">
                                <div className="Main3">
                                    <span className="spann3">PREDICTOR</span>
                                    <span className="ques3 glyphicon glyphicon-chevron-down"></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2} md={2} className="bottomPredic">
                                <div className="groupBtn3">
                                    <div className="Main3">
                                        <span className="spann3">PREDICTOR</span>
                                        <span className="ques3 glyphicon glyphicon-chevron-down"></span>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default CreatePredictors;

