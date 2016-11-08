import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Section } from 'Bread_Crumbs/src/views/components/';

const styles = {
  theme: {
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.3)',

    marginVertical: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
  },

  crumbButton: {
    flex: 4,
  },

  textTheme: {
    padding: 1,
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
    fontWeight: 'bold',
  },

  favsButton: {
    flex: 1,
  },
};


class NearByCrumbListItem extends Component {

  onRowPress() {
    Actions.viewBreadCrumb({ viewCrumb: this.props.breadCrumb });
  }

  render() {
    const { breadCrumb } = this.props;
    return (
      <View style={ styles.theme }>
        <Section theme={ styles.crumbButton }>
            <TouchableOpacity onPress={ this.onRowPress.bind(this) } >
              <Text style={ styles.textTheme }>{ breadCrumb.title }</Text>
          </TouchableOpacity>
        </Section>

        <Section theme={ styles.favsButton }>
            <TouchableOpacity>
              <Text style={ styles.textTheme }>Faved</Text>
          </TouchableOpacity>
        </Section>
      </View>
    );
  }
}

export { NearByCrumbListItem };
