import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { mapMove, breadCrumbsNearUser } from 'Bread_Crumbs/src/controllers/actions/';
// import { breadCrumbsNearUser } from 'Bread_Crumbs/src/controllers/actions/';

import { MapArea, CircleButton } from 'Bread_Crumbs/src/views/components/';

// menu
import { HambergerStackMenu } from 'Bread_Crumbs/src/views/screens/';

const styles = {
  wrapper: {
    // position: 'relative',
  },

  statusBarBack: {
    height: 25,
    backgroundColor: 'rgba(26, 188, 156, 0.7)',
    flex: 1,
  },
};
class BreadCrumbMap extends Component {

  state = { Markers: [] };
  componentWillMount() {
    // console.log(this.props);
    this.props.breadCrumbsNearUser();

    this.collectMapMarkers(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps : next set of props component will render
    //  this.props will still be the old props
    this.collectMapMarkers(nextProps);
  }

  // helper for data
  collectMapMarkers({ nearByCrumbs }) {
    // console.log(nearByCrumbs);

    const markers = _.map(nearByCrumbs, (crumb) => {
      // console.log({ ...val });
      return {
        latitude: crumb.lat,
        longitude: crumb.lng,
        title: crumb.title,
        subtitle: crumb.message,
      };
    });
    // const markers = [
    //   {
    //     latitude: 28.574970,
    //     longitude: -81.305334,
    //     title: 'Foo Place',
    //     subtitle: '1234 Foo Drive',
    //   },
    // ];
    this.setState({ Markers: markers });
  }


  menuDisplay() {
    let result;

    if (this.props.menuState) {
      result = <HambergerStackMenu />;
    } else {
      result = null;
    }
    return result;
  }
  render() {
    return (
      <View style={ [styles.wrapper] }>
        <View>
          <MapArea
            followUser={ this.props.mapChange.focusOnUser }
            region={ this.props.mapChange.marker }
            markerCollection={ this.state.Markers }
          />
          <View style={ styles.statusBarBack } />

          <View>
            <CircleButton
              onPress={ () => Actions.createBreadCrumb() }
              text={ 'Drop Bread Crumb' }
            />
          </View>
        </View>

        { this.menuDisplay() }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { mapChange } = state;
  const { menuState } = state.menu;

  const nearByCrumbs = _.map(state.dbCrumbs, (val, uid) => {
    return { ...val, uid };
  });

  // const { myCrumbs } = state;
  return {
    nearByCrumbs,
    mapChange,
    menuState,
  };
};

BreadCrumbMap = connect(mapStateToProps, { mapMove, breadCrumbsNearUser })(BreadCrumbMap);
export { BreadCrumbMap };
