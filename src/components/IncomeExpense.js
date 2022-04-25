import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import TransactionList from "./TransactionList";

const IncomeExpense = () => {
  const { expenses, income, listExpense, listIncome } = useSelector((state) => state.expenseSlice);

  return (
    <>
      <Row style={{ padding: "100px" }}>
        <Col md={6}>
          <div className="d-flex gap-3">
            <h4>Expenses:</h4>
            <p className="mt-1">${expenses}</p>
          </div>
          {listExpense.map((expense, index) => (
            <TransactionList key={index} money={`-$${expense.money}`} date={expense.currentTime} text={expense.text} id={expense.id} />
          ))}
        </Col>
        <Col md={6}>
          <div className="d-flex gap-3">
            <h4>Income:</h4>
            <p className="mt-1">{income}</p>
          </div>
          {listIncome.map((income, index) => (
            <TransactionList key={index} money={`$${income.money}`} date={income.currentTime} text={income.text} id={income.id} />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default IncomeExpense;
