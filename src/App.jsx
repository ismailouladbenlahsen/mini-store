import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsList from "./features/posts/PostsList";
import Navbar from "./features/navigation/NavBar";
import HomePage from "./features/home/HomePage";
import DetailsProduct from "./features/posts/DetailsProduct";
import CheckoutPage from "./features/posts/Checkout";
import SignIn from "./features/authenticate/SignInPage";
import SignUp from "./features/authenticate/SignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<PostsList />} />
        <Route path="/product/:productId" element={<DetailsProduct />} />
        <Route path="/checkout" element={<CheckoutPage />} />{" "}
        <Route path="/signin" element={<SignIn />} />{" "}
        <Route path="/signup" element={<SignUp />} />{" "}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
