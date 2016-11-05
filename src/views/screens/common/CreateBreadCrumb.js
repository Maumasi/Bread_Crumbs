import React, { Component } from 'react';
// import { } from 'react-native';
import { connect } from 'react-redux';
// import { menuClosed } from 'Bread_Crumbs/src/controllers/actions/';

// components
import { ScreenWrapper, Header, Button, MenuItem } from 'Bread_Crumbs/src/views/components/';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
// const { emptyMenuSide, menuSide } = themes;

const styles = {

};

class CreateBreadCrumb extends Component {

  render() {
    return (
      <ScreenWrapper>
        <Header title={ 'Leave a Bread Crumb' } />
      </ScreenWrapper>
    );
  }
}

// const mapStateToProps = (state) => {
//   const {  } = state;
//   return {
//   };
// };

// CreateBreadCrumb = connect(mapStateToProps, {  })(HambergerStackMenu);
export { CreateBreadCrumb };
