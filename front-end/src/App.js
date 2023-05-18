import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./app/CommonComponents/Header";
import Footer from "./app/CommonComponents/Footer";
import NotFound from "./app/CommonComponents/NotFound";
import User from "./app/Components/User/User";
import About from "./app/Components/About";
import Home from "./app/Components/Home";
import Login from "./app/Components/Login";
import SearchResult from "./app/Components/SearchResult/SearchResult";
import SignUp from "./app/Components/SignUp";
import Main from "./app/Components/Main";
import UpdatePetProfile from "./app/Components/PetProfile/UpdatePetProfile";
import UpdateUserProfile from "./app/Components/User/UpdateUserProfile";
import PrivateRoute from "./app/Components/PrivateRoute";
import AddPet from "./app/Components/PetProfile/AddPet";
import PetInformation from "./app/Components/PetProfile/PetInformation";
import AddVaccinationForm from "./app/Components/PetProfile/AddVaccinationForm";

function App() {
  const user = useSelector((state) => state["user"]);
  const isLoggedIn = user.isLoggedIn;

  // Redirect to login page if user is not logged in
  useEffect(() => {
    if (!user) {
      // navigate("/login");
    }
  }, [user]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User user={user} />} />
            <Route path="/UpdatePetProfile" element={<UpdatePetProfile />} />
            <Route path="/UpdateUserProfile" element={<UpdateUserProfile />} />
            <Route path="/addPet" element={<AddPet user={user} />} />
            <Route
              path="/PetInformation"
              element={<PetInformation user={user} />}
            />
            <Route path="/addVaccination" element={<AddVaccinationForm />} />
            <Route path="/home" element={<Home user={user} />} />
            <Route path="/SearchResult" element={<SearchResult />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
