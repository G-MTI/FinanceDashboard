
import Form from "./components/form";
import List from "./components/list";
import Budget from "./components/budget";
import Chart from "./components/chart";
import CategoryForm from "./components/settingsForm";
import CategoryList from "./components/categoryList";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen flex justify-center items-center overflow-hidden">
        <div>
      

        <Budget/>
        </div>
        </div>
        <Form/>
        <List/>
        
        <Chart/>
        <CategoryForm/>
        <CategoryList/>


      
    </>
  );
}

export default App;