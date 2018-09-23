import React, { Component } from 'react';
import Header from '../Header/Header';
import { Container, Row, Col } from 'react-grid-system';
import Publish from './Publish/Publish';
import './style.css';
import firebase from '../../firebase/index';


const Wall = () => {
  return (
    <Container className="wall">
      <Row>
        <Header name='MURO' />
      </Row>
      <Row>
        <Publish />
      </Row>
    </Container>
  )
}

export default Wall;