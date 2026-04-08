



import Form from "./components/form";
import List from "./components/list";
import Budget from "./components/budget";
import Chart from "./components/chart";
import CategoryForm from "./components/settingsForm";

function App() {
  return (
    <>
      <div >

        <h1>
          Expense Tracker
        </h1>

        <Form/>
        <List/>
        <Budget/>
        <Chart/>
        <CategoryForm/>


      </div>
    </>
  );
}

export default App;