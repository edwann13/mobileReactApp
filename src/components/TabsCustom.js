import React, {Component} from 'react';
import {Tabs, Tab, Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './TabsCustom.css' 

export default class TabsCustom extends Component {
	render () {
		return (
			<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
				<Tab eventKey={1} title="Today">
					Data for Today
				</Tab>
				<Tab eventKey={2} title="Week">
					Data for the week 
				</Tab>
				<Tab eventKey={3} title="Month">
					Data for the Month
				</Tab>

			</Tabs>

			);
	}
}