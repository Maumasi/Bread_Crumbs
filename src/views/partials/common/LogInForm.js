import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

// components
import { Button,
  Section,
  Input,
  LoadingSpinner,
  Header,
} from 'Bread_Crumbs/src/views/components/';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { loginInput, boxShadow, errorStyles, loadingMessage } = themes;

const styles = {
  spinner: {
    opacity: 0.6,
  },
  credentialsSpinner: {
    marginBottom: 20,
  },
};

class LogInForm extends Component {

  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  // login button actions
  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({
      error: '',
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
      error: '',
      loading: false,
    });
  }

  onLoginFail() {
    this.setState({
      password: '',
      error: 'Email and password did not match',
      loading: false,
    });
  }

  renderButton() {
    let result;

    // when trying to login show spinner
    if (this.state.loading) {
      result = (
        <Section>
          <Header
            wrapperTheme={ styles.credentialsSpinner }
            textTheme={ loadingMessage }
            title={ 'Checking Credentials' }
          />

          <LoadingSpinner color={ '#FFF' } />
        </Section>
      );

    // no action taken, show button
    } else {
      result = (
        <Section>

          <Text style={ errorStyles }>
            { this.state.error }
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

          <Button
            onPress={ this.onButtonPress.bind(this) }
            buttonTitle={ 'Log In' }
          />

        </Section>
      );
    }

    return result;
  }

  render() {
    return this.renderButton();
  }
}

export { LogInForm };
