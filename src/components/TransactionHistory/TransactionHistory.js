import PropTypes from 'prop-types';
import{TransactionHistoryContainer,
       TransactionThead,
       TransactionInfo} from './TransactionHistory.styled'

export const TransactionHistory = ({items}) => {
    return (
        <TransactionHistoryContainer>
                    <TransactionThead>
                        <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Currency</th>
                        </tr>
                    </TransactionThead>

                    <tbody >      
        {items.map(({id, type, amount, currency}) => {
            return (
                        <TransactionInfo key = {id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </TransactionInfo>
                     )
        })}
                    </tbody>
        </TransactionHistoryContainer>  )
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };