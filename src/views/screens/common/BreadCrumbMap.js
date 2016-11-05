import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { menuClosed } from 'Bread_Crumbs/src/controllers/actions/';

import { MapArea, CircleButton } from 'Bread_Crumbs/src/views/components/';

const styles = {
  wrapper: {
    position: 'relative',
  },

  statusBarBack: {
    height: 25,
    backgroundColor: 'rgba(26, 188, 156, 0.7)',
    flex: 1,
  },
};
class BreadCrumbMap extends Component {

  render() {
    return (
      <View style={ [styles.wrapper] }>
        <MapArea />
        <View style={ styles.statusBarBack } />

        <View>
          <CircleButton text={ 'Drop Bread Crumb' } />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // const { menuClosed } = state.breadCrumb;
  // return {
  //   menuClosed,
  // };
};

// BreadCrumbMap = connect(mapStateToProps, null)(BreadCrumbMap);
export { BreadCrumbMap };
