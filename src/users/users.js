import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

require('./style.scss');

export default class profile extends Component {
  static propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    children: PropTypes.node
  };
  static defaultProps = {
    firstName: 'John',
    lastName: 'Doe'
  };
  render() {
    return (
      <div>
        {/* use Link to route around the app */}
        <ul>
					{this.props.users.map(user => (
						<li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
					))}
				</ul>
				<div className="detail">
					{this.props.children}
        </div>
      </div>
    );
  }
}
