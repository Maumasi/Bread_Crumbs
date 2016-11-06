
import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { myBreadCrumbs } from 'Bread_Crumbs/src/controllers/actions/';

import { CrumbListItem } from 'Bread_Crumbs/src/views/components/';

const styles = {
  demo: {
    marginTop: 30,
    color: '#000',
  },
};

class MyBreadCrumbs extends Component {

  componentWillMount() {
    // console.log(this.props);
    this.props.myBreadCrumbs();

    this.buildDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps : next set of props component will render
    //  this.props will still be the old props
    this.buildDataSource(nextProps);
  }

  // helper for data
  buildDataSource({ myCrumbs }) {
    const crumbs = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.dataSource = crumbs.cloneWithRows(myCrumbs);
  }

  renderRow(myCrumbs) {
    return <CrumbListItem breadCrumb={ myCrumbs } />;
  }

  render() {

    console.log(this.props);
    return (
      <ListView
      enableEmptySections
      dataSource={ this.dataSource }
      renderRow={ this.renderRow }
      />
    );
  }
}


const mapStateToProps = (state) => {
  const myCrumbs = _.map(state.myCrumbs, (val, uid) => {
    return { ...val, uid };
  });

  // const { myCrumbs } = state;

  return { myCrumbs };
};


MyBreadCrumbs = connect(mapStateToProps, { myBreadCrumbs })(MyBreadCrumbs);
export { MyBreadCrumbs };
