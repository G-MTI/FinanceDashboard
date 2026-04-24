
import Form from "./components/form";
import List from "./components/list";
import Budget from "./components/budget";
import Chart from "./components/chart";
import CategoryForm from "./components/categoryForm";
import CategoryList from "./components/categoryList";
import Navbar from "./components/navbar";
import {Routes, Route} from "react-router-dom";
import AllTransaction from "./components/allTransaction";
import NavbarOut from "./components/navbarOut";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home/>
          </>
        }/>

        <Route path="/login" element={
          <>
            <NavbarOut />
            <div className=" min-h-screen flex justify-center items-center overflow-hidden max-w-screen">
              <Login/> 
            </div>
          </>
        }/>

        <Route path="/register" element={
          <>
            <NavbarOut />
            <div className=" min-h-screen flex justify-center items-center overflow-hidden max-w-screen">
              <Register/> 
            </div>
          </>
        }/>

        <Route path="/app" element={
          <>
            <Navbar />
            <div >
              <Budget/>
              </div>
              <Form/>
              <List/>
              <Chart/>
              <CategoryForm/>
              <CategoryList/>
              

            </>
        }/>

        <Route path="/allTransactions" element={
          <>
          <NavbarOut />
            <div className=" min-h-screen flex justify-center items-center overflow-hidden max-w-screen mt-32">
              <AllTransaction/> 
            </div>
          </> } />
      </Routes>
  );
}

export default App;