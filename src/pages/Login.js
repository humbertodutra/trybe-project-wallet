import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  onAnyChangeInInput= ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.verifyForm());
  }

  verifyForm= () => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const { email, password } = this.state;
    const five = 5;

    if (password.length >= five && email.match(regex)) {
      return this.setState({
        disabled: false,
      });
    }
    return this.setState({
      disabled: true,
    });
  }

  redirect= () => {
    const { email } = this.state;
    const { history, sendMail } = this.props;
    sendMail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <main>
        <form>
          email
          <input
            data-testid="email-input"
            type="text"
            name="email"
            onChange={ this.onAnyChangeInInput }
            value={ email }
          />
          senha
          <input
            data-testid="password-input"
            type="text"
            value={ password }
            name="password"
            onChange={ this.onAnyChangeInInput }
          />
          <button
            type="button"
            disabled={ disabled }
            onClick={ this.redirect }

          >
            Entrar
          </button>

        </form>
      </main>);
  }
}

Login.propTypes = {
  sendMail: propTypes.func.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendMail: (data) => dispatch(setEmail(data)),
});

// export default connect(null, mapDispatchToProps)(Login);
export default connect(null, mapDispatchToProps)(Login);
