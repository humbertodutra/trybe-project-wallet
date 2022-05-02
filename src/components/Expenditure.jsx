import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { allFetched } from '../services/apiData';
import { setExpenses } from '../actions/index';

class Expenditure extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: '',
      paymentMethod: '',
      category: '',
      currencies: [],
    };
  }

  handleChange= ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submitExpenses= async () => {
    const { addExepenses } = this.props;
    const currenciesAll = await allFetched();
    this.setState({
      currencies: currenciesAll,
    });
    const { value,
      description, currency, paymentMethod, category, currencies } = this.state;

    const total = value;

    const expenditureToBeAdded = {
      value: total,
      description,
      currency,
      method: paymentMethod,
      tag: category,
      exchangeRates: currencies,
    };
    addExepenses(expenditureToBeAdded);

    this.setState({
      value: 0,

    });
  }

  render() {
    const { currencies } = this.props;
    const { value } = this.state;
    return (
      <main>
        <form>
          <label htmlFor="value">
            Valor de despesa:
            <input
              data-testid="value-input"
              name="value"
              id="value"
              onChange={ this.handleChange }
              value={ value }
            />
          </label>

          <label htmlFor="value">
            Descrição
            <input
              data-testid="description-input"
              type="text"
              name="description"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="Moeda">
            Moeda:
            <select
              name="currency"
              data-testid="currency-input"
              id="Moeda"
              onChange={ this.handleChange }
            >
              {currencies.map((curr) => (
                <option key={ curr } value={ curr }>
                  {curr}
                </option>))}
            </select>
          </label>

          <label htmlFor="method-input">
            Metodo de pagamento
            <select
              data-testid="method-input"
              onChange={ this.handleChange }
              name="paymentMethod"
              id="method-input"
            >
              <option>Cartão de crédito</option>
              <option>Dinheiro</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="category">
            Categoria de despesa:
            <select
              name="category"
              data-testid="tag-input"
              onChange={ this.handleChange }
              id="category"
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
