import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Share/Footer";
import Navbar from "./Components/Share/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Components/Share/NotFound";
import RequireAuth from "./Components/Login/RequireAUth";
import Profile from "./Components/Pages/Home/Profile";
import Complain from "./Components/Pages/Home/Complain";
import ShowComplains from "./Components/Pages/Home/ShowComplains";
import HotDail from "./Components/Pages/Home/HotDail";
import ManageComplains from "./Components/Pages/Home/Manage Complain/ManageComplains";
import MyProfile from "./Components/Pages/Home/MyProfile";
import MyComplain from "./Components/Pages/Home/MyComplain";

function App() {
  return (
    <div>
      {/* <CreateAccount /> */}
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        >
          <Route index element={<Profile />} />
          <Route path="complain" element={<Complain />} />
          <Route path="showComplains" element={<ShowComplains />} />
          <Route path="manageComplains" element={<ManageComplains />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="myComplain" element={<MyComplain />} />
          <Route path="hotDail" element={<HotDail />} />
          {/* <Route path="complains" element={<Complains />} />  */}
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
