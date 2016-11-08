import React, { Component } from 'react';
import { Text, View, Modal, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
// import { updateBreadCrumb, createBreadCrumb } from 'Bread_Crumbs/src/controllers/actions/';
import firebase from 'firebase';

import { Button, Section } from 'Bread_Crumbs/src/views/components/';

const styles = {
  theme: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    // position: 'relative',
    // flex: 1,
    justifyContent: 'center',
  },

  textTheme: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  sectionTheme: {
    padding: 2,
  },
};

const ConfirmPopUp = (props) => {
  const { children, onYes, onNo, visible, theme, textTheme, sectionTheme } = props;

  return (
    <Modal
      animationType={ 'slide' }
      onRequestClose={ () => {} }
      transparent={ true }
      visible={ visible }

    >
      <View style={ [styles.theme, theme] }>
        <Section style={ [styles.sectionTheme, sectionTheme] }>
          <Text style={ [styles.textTheme, textTheme] }>{ children }</Text>
        </Section>

        <Section style={ [styles.sectionTheme, sectionTheme] }>
          <Button onPress={ onYes } buttonTitle={ 'Yes' } />
          <Button onPress={ onNo } buttonTitle={ 'No' } />
        </Section>
      </View>
    </Modal>
  );
};

export { ConfirmPopUp };
