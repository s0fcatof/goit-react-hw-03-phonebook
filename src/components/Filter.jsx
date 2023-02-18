import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    return (
      <div>
        <p style={{ margin: 0 }}>Find contacts by name</p>
        <input type="search" name="filter" onChange={this.props.setFilter} />
      </div>
    );
  }
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
