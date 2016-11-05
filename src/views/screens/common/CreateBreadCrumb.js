import React, { Component } from 'react';
import { Switch, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import state from 'Bread_Crumbs/src/controllers/actions/';

// components
import {
  ScreenWrapper,
  Header,
  Button,
  MenuItem,
  TextArea,
  Input,
  SwitchRadioButton
} from 'Bread_Crumbs/src/views/components/';

// menu
import { HambergerStackMenu } from 'Bread_Crumbs/src/views/screens/';

// display menu
import { MenuDisplay } from 'Bread_Crumbs/src/views/logicRender/';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { loginInput } = themes;

const styles = {
  theme: {
    backgroundColor: 'rgb(26, 188, 156)',
  },

  createCrumbHeader: {
    paddingTop: 60,
    paddingBottom: 5,
    marginBottom: 5,
  },

  textTitle: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginTop: 0,
  },

  textArea: {
    height: 200,
    // marginLeft: 10,
    // marginRight: 10,
    borderRadius: 3,
    // borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    // padding: 5,
  },

  buttonTheme: {
    marginTop: 60,
  },
};

class CreateBreadCrumb extends Component {

  menuDisplay() {
    let result;

    if (this.props.menu.menuState) {
      result = <HambergerStackMenu />;
    } else {
      result = null;
    }
    return result;
  }


  render() {
    return (
      <ScreenWrapper theme={ styles.theme }>
        <Header
          wrapperTheme={ styles.createCrumbHeader }
          textTheme={ styles.textTitle }
          title={ 'Leave a Bread Crumb' }
        />

        <Input
          lable={ 'Title:' }
          placeholder={ 'Short and Sweet' }
          style={ [styles.textTitle, loginInput] }
          inputTheme={{ flex: 5 }}
          autoFocus
        />

        <TextArea
          multiline
          placeholder={ 'Leave a Bread Cumb in the world!' }
          autoCorrect
          inputTheme={ [loginInput, styles.textArea] }
          autoCapitalize={ 'sentences' }
        />

        <SwitchRadioButton
          text={ 'Hide Crumb untill discovered' }
          value={ false }
          onValueChange={ () => console.log('changed') }
        />

        <Button theme={ styles.buttonTheme } buttonTitle={ 'Drop this Bread Crumb' } />

        { this.menuDisplay() }
      </ScreenWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  // const {  } = state;
  return state;
};

CreateBreadCrumb = connect(mapStateToProps, { state })(CreateBreadCrumb);
export { CreateBreadCrumb };
