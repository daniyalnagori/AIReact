import React, { Component } from 'react';
import './index.css';
import {Grid, Row, Col, Table, thead, tr, th, tbody, td, ButtonToolbar, DropdownButton, MenuItem,Button } from 'react-bootstrap';

class Predictor_Configuration extends Component {
    render() {
        return (
            <div className="Predictor_Configuration">
                <br />
                <br />
                <Grid>
                    <Row className="show-grid">
                        <Col xs={2} md={2}>
                            <code>HELLO2</code>
                        </Col>
                        <Col xs={12} md={10}>
                            <h4 className="Configuration">Predictors Configuration</h4>
                            <br />
                            <br />
                            <div className="Main">
                                <code className="mainCode">
                                    <Row className="show-grid">
                                        <Col xs={12} md={6} className="col">
                                            <code className="mainCode">
                                                <label className="inputPara">STATUS </label>
                                                <input type="text" className="input_Config" value="Production" />
                                            </code>
                                        </Col>
                                        <Col xs={12} md={6} className="col">
                                            <code className="mainCode"> <label className="inputPara">MODEL TYPE </label><input type="text" className="input_Config" value="Analyze" /></code>
                                        </Col>

                                    </Row>

                                    <Row className="show-grid">
                                        <Col xs={12} md={6} className="col">
                                            <code className="mainCode"> <label className="inputPara">VALUE TO PREDICT </label><input type="text" className="input_Config" value="COGN_BOILER_FIC9107_MEAS" /></code>
                                        </Col>
                                        <Col xs={12} md={6} className="col">
                                            <code className="mainCode"> <label className="inputPara">DATA SET </label><input type="text" className="input_Config" value="ing-turbine" /></code>
                                        </Col>

                                    </Row>

                                    <Row className="show-grid">
                                        <Col xs={12} md={6} className="col">
                                            <code className="mainCode"> <label className="inputPara">DEPLOYMENT DATE </label><input type="text" className="input_Config" value="July 27, 2017" /></code>
                                        </Col>
                                        <Col xs={12} md={6} className="col">
                                            <code className="mainCode"> <label className="inputPara">BATCH RECORDS </label><input type="text" className="input_Config" value="Fermentation" /></code>
                                        </Col>

                                    </Row>

                                    <Row className="show-grid">
                                        <Col xs={12} md={6} className="col">
                                            <code className="mainCode"> <label className="inputPara">EVENT DATE FIELD </label><input type="text" className="input_Config" value="Date" /></code>
                                        </Col>
                                        <Col xs={12} md={6} className="col">
                                            <code className="mainCode"> <label className="inputPara">ITERATION FIELD </label><input type="text" className="input_Config" value="Date" />
                                            </code>
                                        </Col>

                                    </Row>
                                     <Row className="show-grid">
                                        <Col xs={8} md={8} className="col">
                                            <code className="mainCode">
                                             </code>
                                        </Col>
                                        <Col xs={6} md={2} className="col">
                                            <code className="mainCode">
                                             <Button className="train-model" bsStyle="primary">TRAIN MODEL</Button>
                                            </code>
                                        </Col>

                                    </Row>

                                    <Row className="show-grid" >
                                        <h4 className="Configuration">Data Filters</h4>
                                        <br />
                                        <br />
                                        <Col xs={12} md={12}>
                                            <div className="dataFilter">
                                            <code className="mainCode">
                                                <Row className="show-grid">
                                                    <Col xs={10} md={6} className="col">
                                                        <code className="mainCode"> <label className="inputPara">Type: </label><input type="text" className="input_Config2" value="" /></code>
                                                    </Col>
                                                    <Col xs={10} md={6} className="col">
                                                        <code className="mainCode"> <label className="inputPara">Value: </label><input type="text" className="input_Config2" value="" />
                                                            <Button className="saveBtn" bsStyle="primary">SAVE</Button>   <Button className="cancelBtn" bsStyle="primary">CANCEL</Button>
                                                        </code>
                                                    </Col>
                                                </Row>
                                            </code>
                                                    </div>
                                        </Col>

                                    </Row>

                                    <Row className="show-grid">
                                        <Col xs={8} md={6}>
                                            <code>
                                                <p className="typeValue">TYPE</p>
                                            </code>
                                        </Col>
                                        <Col xs={8} md={6}>
                                            <code><p className="typeValue">VALUE</p> </code>
                                        </Col>
                                    </Row>
                                    <Row className="show-grid">
                                        <Col xs={6} md={6}>
                                            <code>
                                                <p className="start">Row Start</p>
                                            </code>
                                        </Col>
                                        <Col xs={6} md={6}>
                                            <code><p className="start">1</p> </code>
                                        </Col>
                                    </Row>


                                    <Row className="show-grid">
                                        <Col xs={6} md={3}>
                                            <code>
                                                <ButtonToolbar>
                                                    <DropdownButton
                                                        bsSize="small"
                                                        title="Small button"
                                                        id="dropdown-size-small"
                                                        className="dropBtn"
                                                        >
                                                        <MenuItem eventKey="1">Action</MenuItem>
                                                        <MenuItem eventKey="2">Another action</MenuItem>
                                                        <MenuItem eventKey="3">Something else here</MenuItem>
                                                        <MenuItem divider />
                                                        <MenuItem eventKey="4">Separated link</MenuItem>
                                                    </DropdownButton>
                                                </ButtonToolbar>

                                                <br/>
                                                <br/>
                                            </code>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <code>
                                                <ButtonToolbar>
                                                    <DropdownButton
                                                        bsSize="small"
                                                        title="Small button"
                                                        id="dropdown-size-small"
                                                        className="dropBtn"
                                                        >
                                                        <MenuItem eventKey="1">Action</MenuItem>
                                                        <MenuItem eventKey="2">Another action</MenuItem>
                                                        <MenuItem eventKey="3">Something else here</MenuItem>
                                                        <MenuItem divider />
                                                        <MenuItem eventKey="4">Separated link</MenuItem>
                                                    </DropdownButton>
                                                </ButtonToolbar>

                                                <br/>
                                                <br/>
                                            </code>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <code>
                                                <ButtonToolbar>
                                                    <DropdownButton
                                                        bsSize="small"
                                                        title="Small button"
                                                        id="dropdown-size-small"
                                                        className="dropBtn"
                                                        >
                                                        <MenuItem eventKey="1">Action</MenuItem>
                                                        <MenuItem eventKey="2">Another action</MenuItem>
                                                        <MenuItem eventKey="3">Something else here</MenuItem>
                                                        <MenuItem divider />
                                                        <MenuItem eventKey="4">Separated link</MenuItem>
                                                    </DropdownButton>
                                                </ButtonToolbar>

                                                <br/>
                                                <br/>
                                            </code>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <code>
                                                <ButtonToolbar>
                                                    <DropdownButton
                                                        bsSize="small"
                                                        title="Small button"
                                                        id="dropdown-size-small"
                                                        className="dropBtn"
                                                        >
                                                        <MenuItem eventKey="1">Action</MenuItem>
                                                        <MenuItem eventKey="2">Another action</MenuItem>
                                                        <MenuItem eventKey="3">Something else here</MenuItem>
                                                        <MenuItem divider />
                                                        <MenuItem eventKey="4">Separated link</MenuItem>
                                                    </DropdownButton>
                                                </ButtonToolbar>

                                                <br/>
                                                <br/>
                                            </code>
                                        </Col>
                                    </Row>

                                    <Row className="show-grid">
                                        <Col xs={6} md={3}>
                                            <code>
                                             <p className="footerP">NOV. 10, 2017, 7X22 P.M.</p>
                                             </code>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <code> <p className="footerP"></p></code>
                                        </Col>
                                         <Col xs={6} md={3}>
                                            <code> <p className="footerP">PROCESSING</p> </code>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <code> <p className="footerP">Getting Training Data</p></code>
                                        </Col>
                                    </Row>

                                      <Row className="show-grid">
                                        <Col xs={6} md={3}>
                                            <code>
                                             <p className="footerP">SEPT. 15, 2017, 8X11 P.M</p>
                                             </code>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <code> <p className="footerP">SEPT.16,2017,12X15 P.M.</p></code>
                                        </Col>
                                         <Col xs={6} md={3}>
                                            <code> <p className="footerP">COMPLETED</p> </code>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <code> <p className="footerP">VIEW</p></code>
                                        </Col>
                                    </Row>

                                      <Row className="show-grid">
                                        <Col xs={6} md={3}>
                                            <code>
                                             <p className="footerP">SEPT. 15, 2017, 8X43 P.M.</p>
                                             </code>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <code> <p className="footerP">SEPT. 16, 2017, 12X12 P.M</p></code>
                                        </Col>
                                         <Col xs={6} md={3}>
                                            <code> <p className="footerP">COMPLETED</p> </code>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <code> <p className="footerP">VIEW</p></code>
                                        </Col>
                                    </Row>

                                   

                                </code>
                            </div>
                        </Col>
                    </Row>
                </Grid>;
            </div>
        )
    }
}

export default Predictor_Configuration;