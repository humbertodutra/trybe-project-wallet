import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { currenciesApi } from '../services/apiData';
import { setCurrencies } from '../actions';
import Expenditure from '../components/Expenditure';
import Table from '../components/Table';

class Wallet extends React.Component {
  async componentDidMount() {
    const { sendCurrencies } = this.props;
    const x = await currenciesApi();
    sendCurrencies(x);
  }

  render() {
    return (
      <div>
        <Header />
        <Expenditure />
        <Table />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  sendCurrencies: (data) => dispatch(setCurrencies(data)),
});

export default connect(null, mapDispatchToProps)(Wallet);
