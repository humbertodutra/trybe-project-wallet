import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, wallet } = this.props;
    const total = wallet.reduce((acc, { value, currency, exchangeRates }) => acc
      + (parseInt(value, 10) * exchangeRates[currency].ask), 0);
    return (
      <header>
        <div data-testid="email-field">{email}</div>
        <p data-testid="total-field">
          {total ? total.toFixed(2) : 0}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>

    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  wallet: PropTypes.arrayOf(PropTypes.object).isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
