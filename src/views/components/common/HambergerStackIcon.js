import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { menuActivated } from 'Bread_Crumbs/src/controllers/actions/';

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
  // const { theme, barTheme } = props;

  onMenuIconPress() {
    const bool = true;
    this.props.menuActivated(bool);
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

HambergerStackIcon = connect(mapStateToProps, { menuActivated })(HambergerStackIcon);
export { HambergerStackIcon };
