import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Header, Section } from 'Bread_Crumbs/src/views/components/';

const styles = {
  wrapper: {
    borderRadius: 3,
    backgroundColor: 'rgba(26, 188, 156, 0.9)',
    marginTop: 60,
    marginHorizontal: 10,
  },

  title: {
    fontSize: 32,
    margin: 0,
    marginBottom: 0,
    color: '#FFF',
  },

  titleWrapper: {
    padding: 0,
    paddingTop: 10,
    margin: 0,
  },

  message: {
    marginHorizontal: 10,
    alignSelf: 'center',
    fontSize: 18,
    color: '#FFF',
  },

  button: {
    padding: 10,
    borderColor: 'blue',
    borderWidth: 1,
    flex: 6,
    alignItems: 'center',
    borderRadius: 50,
  },

  buttonText: {
    color: 'blue',
  },

  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    paddingHorizontal: 20,
  },
};

const GeoMessage = (props) => {

  const { title, message, onCloseCrumb, onAddCrumb } = props;

  return (
    <View style={ styles.wrapper }>
      <Header wrapperTheme={ styles.titleWrapper } textTheme={ styles.title } title={ title } />

      <Section>
        <Text style={ styles.message }>
          { message }
        </Text>
      </Section>

      <Section theme={ styles.buttonSection } >
        <TouchableOpacity style={ styles.button } onPress={ onCloseCrumb } >
          <Text style={ styles.buttonText } >
            Close
          </Text>
        </TouchableOpacity>

        <View style={{ flex: 1 }}/>

        <TouchableOpacity style={ styles.button } onPress={ onAddCrumb } >
          <Text style={ styles.buttonText } >
            Add to Favs
          </Text>
        </TouchableOpacity>
      </Section>
    </View>
  );
};

export { GeoMessage };
