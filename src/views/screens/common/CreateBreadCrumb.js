import React, { Component } from 'react';
// import { } from 'react-native';
import { connect } from 'react-redux';
import state from 'Bread_Crumbs/src/controllers/actions/';

// components
import { ScreenWrapper, Header, Button, MenuItem } from 'Bread_Crumbs/src/views/components/';

// menu
import { HambergerStackMenu } from 'Bread_Crumbs/src/views/screens/';

// display menu
import { MenuDisplay } from 'Bread_Crumbs/src/views/logicRender/';


// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
// const { emptyMenuSide, menuSide } = themes;

const styles = {
  createCrumbHeader: {
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'flex-start',
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
      <ScreenWrapper>
        <Header style={ styles.createCrumbHeader } title={ 'Leave a Bread Crumb' } />
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
