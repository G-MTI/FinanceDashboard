


import Form from "./components/form";
import List from "./components/list";
import Budget from "./components/budget";
import Chart from "./components/chart";

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


      </div>
    </>
  );
}

export default App;