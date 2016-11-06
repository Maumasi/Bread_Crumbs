import React, { Component } from 'react';
import { Text } from 'react-native';

import { Section } from 'Bread_Crumbs/src/views/components/';


class CrumbListItem extends Component {

  render() {
    const { breadCrumb } = this.props;
    return (
      <Section>
        <Text>{ breadCrumb.title }</Text>
      </Section>
    );
  }
}

export { CrumbListItem };
