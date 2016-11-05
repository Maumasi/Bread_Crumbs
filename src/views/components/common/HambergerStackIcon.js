import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { menuOpened } from 'Bread_Crumbs/src/controllers/actions/';

const styles = {
  iconWrapper: {
    justifyContent: 'space-around',
    width: 30,
    height: 20,
  },

  iconBars: {
    marginHorizontal: 5,
    height: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

class HambergerStackIcon extends Component {

  onMenuIconPress() {
    const bool = true;
    this.props.menuOpened(bool);
  }

  render() {
    return (
      <TouchableOpacity style={ [styles.iconWrapper] } onPress={ this.onMenuIconPress.bind(this) } >
        <View style={ [styles.iconBars] } />
        <View style={ [styles.iconBars] } />
        <View style={ [styles.iconBars] } />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  const { menuState } = state.menu;
  return {
    menuState,
  };
};

HambergerStackIcon = connect(mapStateToProps, { menuOpened })(HambergerStackIcon);
export { HambergerStackIcon };
