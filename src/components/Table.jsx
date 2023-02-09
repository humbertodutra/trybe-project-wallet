import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenses } from '../actions/index';
import './table.css';

class Table extends React.Component {
  deletedExpenditure = (id) => {
    const { expenses, deleteExpenditure } = this.props;
    const toDeleted = expenses.filter((expense) => expense.id !== id);
    console.log(toDeleted);
    deleteExpenditure(toDeleted);
  };

  render() {
    const { expenses } = this.props;
    return (
      <div className="tableDiv">
        <h2 className="table-title"> Tabela de gastos </h2>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(
              ({
                description,
                tag,
                method,
                value,
                currency,
                exchangeRates,
                id,
              }) => (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{parseFloat(value).toFixed(2)}</td>
                  <td>{exchangeRates[currency].name.split('/')[0]}</td>
                  <td>
                    {parseFloat(exchangeRates[currency].ask).toFixed(2)}
                    {' '}
                  </td>
                  <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="delete-btn"
                      type="button"
                      onClick={ () => this.deletedExpenditure(id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenditure: (index) => dispatch(deleteExpenses(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
