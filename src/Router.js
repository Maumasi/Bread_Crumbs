import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

// screens
import { AppLoadingScreen, LogInScreen } from 'Bread_Crumbs/src/views/screens/';

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
  return (
    <Router
      sceneStyle={ styles.routerSceneStyle }
      navigationBarStyle={ styles.routerNavigationBarStyle }
      >
        <Scene key={ 'login' } >
          <Scene key={ 'userLogin' } component={ LogInScreen } title={ ' ' } initial />
        </Scene>

        <Scene key={ 'mapActivities' } >
          <Scene key={ 'mapArea' } component={ AppLoadingScreen } title={ ' ' } initial />
        </Scene>

    </Router>
  );
};

export default AppRouter;
