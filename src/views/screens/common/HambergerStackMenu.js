import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { menuClosed } from 'Bread_Crumbs/src/controllers/actions/';

// components
import { ScreenWrapper, Header, Button, MenuItem } from 'Bread_Crumbs/src/views/components/';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { emptyMenuSide, menuSide } = themes;

const styles = {
  menuOrentation: {
    flexDirection: 'row',
    // elevation: 1,
    // zIndex: 99,
  },
  menuHeader: {
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'flex-start',
  },
};

const { menuOrentation, menuHeader } = styles;

const CustomLayoutSpring = {
  duration: 30,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 1,
  },
  update: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 0.0,
  },
};

class HambergerStackMenu extends Component {

  componentWillMount() {
    console.log('test');
    LayoutAnimation.configureNext(CustomLayoutSpring);
  }

  componentWillUnmount() {
    console.log('test');
    LayoutAnimation.configureNext(CustomLayoutSpring);
  }

  onEmptySidePress() {
    const bool = false;
    this.props.menuClosed(bool);
  }

  onMenuItemPress() {
    console.log('Menu item!');
  }

  onMenuSidePress() {
    console.log('this is the menu side!');
  }

  render() {
    return (
      <ScreenWrapper theme={ menuOrentation } >

        <TouchableWithoutFeedback onPress={ this.onEmptySidePress.bind(this) } >
          <View style={ emptyMenuSide } />
        </TouchableWithoutFeedback>


        <View style={ menuSide } >
          <Header
            title={ 'Menu' }
            wrapperTheme={ menuHeader }
          />

          <MenuItem text={ 'My Bread Crumbs' } onPress={ () => console.log('Actions.allBreadCrumbs()') } />

          <MenuItem text={ 'Log out' } onPress={ () => console.log('firebase.auth().signOut()') } />
        </View>
      </ScreenWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { menuClosed } = state.menu;
  return {
    menuClosed,
  };
};

HambergerStackMenu = connect(mapStateToProps, { menuClosed })(HambergerStackMenu);
export { HambergerStackMenu };
