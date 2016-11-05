import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import state from 'Bread_Crumbs/src/controllers/actions/';

// screens
import {
  HambergerStackMenu,
  LogInScreen,
  AppLoadingScreen,
  CreateBreadCrumb,
  BreadCrumbMap,
} from 'Bread_Crumbs/src/views/screens/';

// test components
import { MapArea, HambergerStackIcon } from 'Bread_Crumbs/src/views/components/';


const styles = {
  routerNavigationBarStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: 'rgba(0, 0, 0, 0)',
  },

  routerSceneStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
};

class AppRouter extends Component {

// first page:
// <Scene key={ 'login' } >
//   <Scene key={ 'userLogin' } component={ LogInScreen } title={ ' ' } initial />

// renderRightButton={ () => HambergerStackIcon }
// renderRightButton={ () => <HambergerStackIcon /> }
  render() {
    console.log('Router:');
    console.log(this.props);
    return (
      <Router
        sceneStyle={ styles.routerSceneStyle }
        navigationBarStyle={ styles.routerNavigationBarStyle }
        >
          <Scene key={ 'login' } initial >
            <Scene
              key={ 'userLogin' }
              component={ BreadCrumbMap }
              title={ ' ' }
              renderRightButton={ () => <HambergerStackIcon /> }
              initial
            />

          </Scene>

          <Scene key={ 'menu' } >
            <Scene key={ 'HambergerStackMenu' } component={ HambergerStackMenu } title={ ' ' } initial />
          </Scene>

          <Scene key={ 'mapActivities' } >
            <Scene
              key={ 'mapArea' }
              component={ MapArea }
              renderRightButton={ () => <HambergerStackIcon /> }
              title={ ' ' }
              initial
            />

            <Scene
              key={ 'createBreadCrumb' }
              component={ CreateBreadCrumb }
              title={ ' ' }
              renderRightButton={ () => <HambergerStackIcon /> }
            />
          </Scene>

      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

AppRouter = connect(mapStateToProps, { state })(AppRouter);
export default AppRouter;
