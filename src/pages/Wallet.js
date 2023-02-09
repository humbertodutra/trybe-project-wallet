import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../components/Header';
import { currenciesApi } from '../services/apiData';
import { setCurrencies } from '../actions';
import Expenditure from '../components/Expenditure';
import Table from '../components/Table';
import './login.css';

class Wallet extends React.Component {
  async componentDidMount() {
    const { sendCurrencies } = this.props;
    const x = await currenciesApi();
    sendCurrencies(x);
  }

  render() {
    return (
      <div className="wallet-div">
        <Header />
        <Expenditure />
        <Table />
      </div>
    );
  }
}
Wallet.propTypes = {
  sendCurrencies: propTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  sendCurrencies: (data) => dispatch(setCurrencies(data)),
});

export default connect(null, mapDispatchToProps)(Wallet);
