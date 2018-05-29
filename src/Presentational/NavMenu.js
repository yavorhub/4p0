import React from 'react';
import {NavLink,Switch} from 'react-router-dom';
import logo from '../images/logo.png'
import { Container, Row, Col } from 'react-grid-system';
export const NavMenu = () => (
	<Container fluid>
		<Row align="start">
			<Col>
				<div class="nav-menu-home-item"><NavLink to="/"><img style={{width: '30%'}} src={logo}  alt='company-name'/></NavLink></div>
			</Col>
			<Col xs={2} sm={2} md={2} lg={2} xl={2}>

			</Col>
			<Col>
				<NavLink to="/AboutUs">AboutUs</NavLink>
			</Col>
			<Col>
				<NavLink to="/Services">Services</NavLink>
			</Col>
			<Col>
				<NavLink to="/Training">Training</NavLink>
			</Col>
			<Col>
				<NavLink to="/Blog">Blog</NavLink>
			</Col>
			<Col>
				<NavLink to="/Contacts">Contact</NavLink>
			</Col>
		</Row>
	</Container>
)

