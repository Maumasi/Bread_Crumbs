import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

// screens
import { HambergerStackMenu, LogInScreen } from 'Bread_Crumbs/src/views/screens/';

// test components
import { MapArea } from 'Bread_Crumbs/src/views/components/';

const styles = {
  routerNavigationBarStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: 'rgba(0, 0, 0, 0)',
  },

  routerSceneStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    height: 30,
  }
};

const AppRouter = () => {

// first page:
// <Scene key={ 'login' } >
//   <Scene key={ 'userLogin' } component={ LogInScreen } title={ ' ' } initial />
// </Scene>


  return (
    <Router
      sceneStyle={ styles.routerSceneStyle }
      navigationBarStyle={ styles.routerNavigationBarStyle }
      >
        <Scene key={ 'menu' } >
          <Scene key={ 'hambergerStack' } component={ HambergerStackMenu } title={ ' ' } initial />
        </Scene>

        <Scene key={ 'mapActivities' } >
          <Scene key={ 'mapArea' } component={ MapArea } title={ ' ' } initial />
        </Scene>

    </Router>
  );
};

export default AppRouter;
