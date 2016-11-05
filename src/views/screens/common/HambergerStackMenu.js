import React, { Component } from 'react';
import { TouchableWithoutFeedback, TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';

// components
import { ScreenWrapper, Header, Button, MenuItem } from 'Bread_Crumbs/src/views/components/';

themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { emptyMenuSide, menuSide } = themes;

const styles = {
  menuOrentation: {
    flexDirection: 'row',
  },
  menuHeader: {
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'flex-start',
  },
};

const { menuOrentation, menuHeader, buttonTheme, menuItem } = styles;

class HambergerStack extends Component {

  onEmptySidePress() {
    console.log('open side!');
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
          <View  style={ emptyMenuSide } />
        </TouchableWithoutFeedback>


        <View  style={ menuSide } >
          <Header
            title={ 'Menu' }
            wrapperTheme={ menuHeader }
          />

          <MenuItem text={ 'My Bread Crumbs' } />

          <MenuItem text={ 'Log out' } />
        </View>
      </ScreenWrapper>
    );
  }
}

// const mapStateToProps = (state) => {
//   const { opened } = state.menu;
//   return {
//     opened,
//   };
// };

// const HambergerStackMenu = connect(mapStateToProps, { opened })(HambergerStack);
const HambergerStackMenu = HambergerStack; // remove this after testing and uncomment everything else
export { HambergerStackMenu };
