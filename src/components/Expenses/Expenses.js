import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

  const saveSelectedYearHandler = (selectedYear)=> {
        props.onSelectedYearHandler(selectedYear);
  };

  return (

    <div>    
      <Card className="expenses">
      <ExpensesFilter onSelectChange={saveSelectedYearHandler} />
      { props.expenses.map(expense => (
          <ExpenseItem 
              title={expense.title}
              amount={expense.amount}
              date={expense.date} 
            />
        ))}        
      </Card>
    </div>
    
  );
}

export default Expenses;
