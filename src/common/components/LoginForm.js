import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

// components
import { Button,
  Section,
  Input,
  LoadingSpinner,
} from 'Bread_Crumbs/src/common/';

// themes
import themes from 'Bread_Crumbs/src/stylesheets/themes';
const { loginInput, boxShadow } = themes;

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    creatingUser: '',
    createUserError: '',
    loading: false,
  };

  // login button actions
  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({
      creatingUser: '',
      createUserError: '',
      loading: true,
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLogin.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLogin.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  };

  onLogin() {
    this.setState({
      email: '',
      password: '',
      creatingUser: 'Creating new user account',
      createUserError: '',
      loading: false,
    });
  }

  onLoginFail() {
    this.setState({
      createUserError: 'Failed to sign in and/or create user account',
      loading: false,
    });
  }

  renderButton() {
    let result;

    // when trying to login show spinner
    if (this.state.loading) {
      result = (
        <LoadingSpinner
          color={ 'rgb(255, 255, 255)' }
        />
      );

    // no action taken, show button
    } else {
      result = (
        <Button
          onPress={ this.onButtonPress.bind(this) }
          buttonTitle={ 'Log In' }
        />
      );
    }

    return result;
  }

  render() {
    return (
      <Section>

        <Text>
          { this.state.createUserError }
        </Text>
        <Text style={{ height: 20, flex: 1 }}>
          { this.state.creatingUser }
        </Text>

        <Input
          lable={ 'Email' }
          placeholder={ 'example@mail.com' }
          value={ this.state.email }
          onChangeText={ (email) => this.setState({ email }) }
          autoFocus
          returnKeyType={ 'next' }
          returnKeyLabel={ 'next' }
          autoCapitalize={ 'none' }
          keyboardType={ 'email-address' }
        />

        <Input
          lable={ 'Password' }
          placeholder={ 'password123' }
          value={ this.state.password }
          onChangeText={ (password) => this.setState({ password }) }
          secureTextEntry
          returnKeyType={ 'go' }
          returnKeyLabel={ 'go' }
          autoCapitalize={ 'none' }
          onSubmitEditing={ this.onButtonPress.bind(this) }
        />

        { this.renderButton() }

      </Section>

    );
  }
}

export { LoginForm };
