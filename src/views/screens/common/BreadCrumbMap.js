import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { mapMove } from 'Bread_Crumbs/src/controllers/actions/';

import { MapArea, CircleButton } from 'Bread_Crumbs/src/views/components/';

// menu
import { HambergerStackMenu } from 'Bread_Crumbs/src/views/screens/';

const styles = {
  wrapper: {
    // position: 'relative',
  },

  statusBarBack: {
    height: 25,
    backgroundColor: 'rgba(26, 188, 156, 0.7)',
    flex: 1,
  },
};
class BreadCrumbMap extends Component {

  menuDisplay() {
    let result;

    if (this.props.menuState) {
      result = <HambergerStackMenu />;
    } else {
      result = null;
    }
    return result;
  }
  render() {
    return (
      <View style={ [styles.wrapper] }>
        <View>
          <MapArea
            followUser={ this.props.mapChange.focusOnUser }
            region={ this.props.mapChange.marker }
          />
          <View style={ styles.statusBarBack } />

          <View>
            <CircleButton
              onPress={ () => Actions.createBreadCrumb() }
              text={ 'Drop Bread Crumb' }
            />
          </View>
        </View>

        { this.menuDisplay() }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { mapChange } = state;
  const { menuState } = state.menu;
  return {
    mapChange,
    menuState,
  };
};


BreadCrumbMap = connect(mapStateToProps, { mapMove })(BreadCrumbMap);
export { BreadCrumbMap };
