import React, {Component} from 'react';
import {Tabs, Tab, Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './TabsCustom.css';
import BarChart from './BarChart';
import ArcGraph from './ArcGraph';

export default class TabsCustom extends Component {
	render () {
		return (
			<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
				<Tab eventKey={1} title="Today">
					<ArcGraph color="red" updateArc={this.addNumber} size={[300,300]}/>
				</Tab>
				<Tab eventKey={2} title="Week">	
					<ArcGraph color='blue' updateArc={this.addNumber} size={[300,300]}/>
				</Tab>
				<Tab eventKey={3} title="Month">
					<ArcGraph color='orange' updateArc={this.addNumber} size={[300,300]}/>
				</Tab>
			</Tabs>

			);
	}
}