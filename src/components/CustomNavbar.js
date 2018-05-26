import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css' 

export default class CustomNavbar extends Component {
	render () {
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Brand pullRight>
					<Glyphicon className="Hello" glyph='search'/>
				</Navbar.Brand>
				<Navbar.Header>


					<Navbar.Toggle/>

				</Navbar.Header>
				<Navbar.Collapse>
					<Nav >
						<NavItem eventKey={1} componentClass={Link} href='/' to='/'>
							About
						</NavItem>
					</Nav>
					<Nav pullLeft>
						<NavItem eventKey={2} componentClass={Link} href='/' to='/'>
							Services
						</NavItem>
					</Nav>
					<Nav pullLeft>
						<NavItem eventKey={3} componentClass={Link} href='/' to='/'>
							Contact Us
						</NavItem>
					</Nav>


				</Navbar.Collapse>

			</Navbar>

			);
	}
}