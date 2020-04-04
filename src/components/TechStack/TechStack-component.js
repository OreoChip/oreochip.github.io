import React from 'react';
import './TechStack-styles.scss'
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
  } from "reactstrap";
const TechStack = () => {
 return(
     <div>
        <h2  className='title'>TechStack we use for your data transformation and visualisation</h2> 
        <div className='tech-stack'> 
            <Row>
                <Col md="2" />
                <Col md="1" ><img  alt="..."  src={require("assets/img/aws.svg")} ></img> </Col>
                <Col md="1" ><img  alt="..."  src={require("assets/img/azure.svg")} ></img> </Col>
                <Col md="1" ><img  alt="..."  src={require("assets/img/circleci.svg")}></img> </Col>
                <Col md="1" ><img  alt="..."  src={require("assets/img/hadoop.svg")}></img> </Col>
                <Col md="1" ><img  alt="..."  src={require("assets/img/tensorflow.svg")}></img> </Col>
                <Col md="1" ><img  alt="..."  src={require("assets/img/react.svg")}></img> </Col>
                <Col md="1" ><img  alt="..."  src={require("assets/img/spark.svg")}></img> </Col>
                <Col md="1" ><img  alt="..."  src={require("assets/img/cloudera.svg")}></img> </Col>
                <Col md="2" />
            </Row>
        </div>
     </div>
 )
}


export default TechStack;