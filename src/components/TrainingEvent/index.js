import React, { Component } from 'react';
import { Grid, Row, Col, Table } from "react-bootstrap";
import "./index.css"
import Box_logo from "../../assets/Box_logo.png"
import correlation from "../../assets/correlation.png"


class TrainingEvent extends Component {
  render() {
    return (
      <div className="trainingEvent" >
        <Row>
          <Col md={12} className="first-col">
            <Row>
              <Col md={12}>
                <div className="training-event-contant"  >
                  <div>
                    <p className="Training-Event-Details" >
                      Training Event Details
                     </p>
                    <p className="LYSINE4HOURLIVE" >
                      LYSINE4HOURLIVE
                     </p>
                  </div>
                  <div className="stapper-div" >
                  </div>
                  <div className="Data-Set-Analysis-div" >
                    <h4 className="Data-Set-Analysis-heading" >
                      Data Set Analysis
                   </h4>
                    <br />
                    <div style={{ flexDirection: "row" }}>
                      <div style={{ display: "inline-block" }}>
                        <p  className="image-text" id="box-text" >BOX</p>
                        <br/>                        
                        <span className="image-span" >
                          <img src={correlation} alt="box" className="Analysis-img" />
                        </span>
                      </div>
                      <div style={{ display: "inline-block", marginLeft: "91px", }}>
                        <p  className="image-text" id="CORRELATION-Text" >CORRELATION MATRIX</p>
                        <br/>
                        <span className="image-span" >
                          <img src={Box_logo} alt="box" className="Analysis-img" />
                        </span>
                      </div>
                      <div style={{ display: "inline-block", marginLeft: 70 }}>
                        <p  className="image-text" id="HISTOGRAM" >HISTOGRAM</p>
                        <br/>                        
                        <span className="image-span" >
                          <img src={correlation} alt="box" className="Analysis-img" />
                        </span>
                      </div>
                    </div> 
                      

                  </div>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <div className="Model-Analysis-div" >
                  <h4 className="Model-Analysis-heading" >
                    Model Analysis
                </h4>
                  <div >
                    <table className="table">
                      <tr className="tr" >
                        <td className="table-first-cell">MODEL TYPE</td>
                        <td >TRAIN R2</td>
                        <td >TRAIN RMSE</td>
                        <td >TEST R2</td>
                        <td >TEST RMSE</td>
                        <td >ANALYSIS</td>
                      </tr>
                      <tr className="table-row">
                        <td id="td">MLP NEURAL NETWORK</td>
                        <td>0.95</td>
                        <td>58.51</td>
                        <td>0.95</td>
                        <td>0.95</td>
                        <td className="view-class" >VIEW</td>
                      </tr>
                      <tr className="table-row">
                        <td id="td">LASSO</td>
                        <td>0.85</td>
                        <td>99.20</td>
                        <td>0.85</td>
                        <td>98.81</td>
                        <td className="view-class">VIEW</td>
                      </tr>
                      <tr className="table-row">
                        <td id="td">RIDGE</td>
                        <td>0.85</td>
                        <td>99.20</td>
                        <td>0.85</td>
                        <td>98.81</td>
                        <td className="view-class">VIEW</td>
                      </tr>
                      <tr className="table-row">
                        <td id="td">LINEAR REGRESSION</td>
                        <td>0.85</td>
                        <td>99.20</td>
                        <td>0.85</td>
                        <td>98.81</td>
                        <td className="view-class">VIEW</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TrainingEvent;
