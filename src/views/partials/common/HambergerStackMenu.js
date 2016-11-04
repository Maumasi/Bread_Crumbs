import React, { Component } from 'react';
import { Text, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

// components
import { Input, Section, Button, LoadingSpinner, ErrorMessage, Header } from 'Bread_Crumbs/src/views/components/';

// themes
// import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
// const { loginInput, boxShadow, errorStyles, loadingMessage } = themes;

class HambergerStack extends Component {

  render() {
    return (
      <Text>
        menu
      <Text>
    );
  }
}

const mapStateToProps = (state) => {
  const { opened } = state.menu;
  return {
    opened,
  };
};

const HambergerStackMenu = connect(mapStateToProps, { opened })(HambergerStack);
export { HambergerStackMenu };
