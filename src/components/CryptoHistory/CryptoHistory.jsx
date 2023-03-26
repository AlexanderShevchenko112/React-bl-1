import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatDate } from 'helpers/formatDate';
import PropTypes from 'prop-types';
export const CryptoHistory = ({ transactions }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {transactions.map((transaction, index) => {
          return (
            <Tr key={transaction.id}>
              <Td>{index + 1}</Td>
              <Td>{transaction.price}</Td>
              <Td>{transaction.amount}</Td>
              <Td>{formatDate(transaction.date)}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
};

CryptoHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ),
};
