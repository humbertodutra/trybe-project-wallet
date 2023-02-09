import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { allFetched } from '../services/apiData';
import { setExpenses } from '../actions/index';
import './expenditure.css';

class Expenditure extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      paymentMethod: 'Cartão de crédito',
      category: 'Alimentação',
      currencies: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  submitExpenses = async () => {
    const { addExepenses } = this.props;
    const currenciesAll = await allFetched();
    this.setState({
      currencies: currenciesAll,
    });
    const {
      value,
      description,
      currency,
      paymentMethod,
      category,
      currencies,
    } = this.state;

    const total = () => {
      if (value === 0) {
        const totalFormated = 0;
        return totalFormated;
      } if (value.includes(',')) {
        const totalFormated = parseFloat(value.replace(',', '.'));
        return totalFormated;
      }
      const totalFormated = parseFloat(value);
      return totalFormated;
    };

    const expenditureToBeAdded = {
      value: total(),
      description,
      currency,
      method: paymentMethod,
      tag: category,
      exchangeRates: currencies,
    };
    addExepenses(expenditureToBeAdded);
  };

  render() {
    const { currencies } = this.props;
    const { value } = this.state;
    return (
      <main className="expenditure-main">
        <form className="expenditure-form">
          <label htmlFor="value" className="label-expenditure">
            Valor de despesa:
            <input
              data-testid="value-input"
              name="value"
              id="value"
              onChange={ this.handleChange }
              value={ value }
              className="input-expenditure-value"
            />
          </label>

          <label htmlFor="value" className="label-expenditure">
            Descrição
            <input
              data-testid="description-input"
              type="text"
              name="description"
              onChange={ this.handleChange }
              className="input-expenditure-description"
            />
          </label>

          <label htmlFor="Moeda" className="label-expenditure">
            Moeda:
            <select
              className="select-expenditure"
              name="currency"
              data-testid="currency-input"
              id="Moeda"
              onChange={ this.handleChange }
            >
              {currencies.map((curr) => (
                <option key={ curr } value={ curr }>
                  {curr}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="method-input" className="label-expenditure">
            Metodo de pagamento
            <select
              data-testid="method-input"
              onChange={ this.handleChange }
              name="paymentMethod"
              id="method-input"
              className="select-expenditure"
            >
              <option>Cartão de crédito</option>
              <option>Dinheiro</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="category" className="label-expenditure">
            Categoria de despesa:
            <select
              name="category"
              data-testid="tag-input"
              onChange={ this.handleChange }
              id="category"
              className="select-expenditure"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

          <button
            onClick={ this.submitExpenses }
            type="button"
            className="button-expenditure"
          >
            Adicionar despesa
          </button>
        </form>
      </main>
    );
  }
}

Expenditure.propTypes = {
  addExepenses: PropType.func,
  currencies: PropType.arrayOf(PropType.object).isRequired,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExepenses: (expenses) => dispatch(setExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenditure);
