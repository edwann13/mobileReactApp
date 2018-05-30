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
					<ArcGraph onclick={this.props.updateArc1} data={[1,2,1,2,1,2,1,2,1]} size={[300,300]}/>
				</Tab>
				<Tab eventKey={2} title="Week">
					<BarChart data={[1,2,1,2,1,2,1,2,1]} size={[500,500]}/>
				</Tab>
				<Tab eventKey={3} title="Month">
					<BarChart data={[2,4,1,64,22,235,11, 0 ,10]} size={[500,500]}/>
				</Tab>
			</Tabs>

			);
	}
}