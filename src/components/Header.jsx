import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css'

class Header extends React.Component {
  render() {
    const { email, wallet } = this.props;
    const total = wallet.reduce((acc, { value, currency, exchangeRates }) => acc
      + (parseInt(value, 10) * exchangeRates[currency].ask), 0);
    return (
      <header className="Header">
        <div className="email-field" data-testid="email-field">{`${email}`}</div>
        <p data-testid="total-field" className="total-field">
          { `Total de desepesas:  R$ ${total ? total.toFixed(2) : 0}`}
        </p>
        <p className="currency" data-testid="header-currency-field">Moeda: BRL</p>
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
