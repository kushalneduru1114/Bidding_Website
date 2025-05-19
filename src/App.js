import Header from "./pages/Header";
import AddProductForm from "./productComponent/AddProductForm";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AddCategoryForm from "./productComponent/AddCategoryForm";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import AddUserForm from "./userComponent/AddUserForm";
import UserLoginForm from "./userComponent/UserLoginForm";
//import MyCart from "./userComponent/MyProductOffers";
import GoogleOAuth from "./userComponent/GoogleOAuth.jsx"
import AddCardDetails from "./pages/AddCardDetails";
import MyOrder from "./userComponent/MyOrder";
import AllOrders from "./userComponent/AllOrders";
import SearchOrder from "./userComponent/SearchOrder";
import RegisterAdminForm from "./userComponent/RegisterAdminForm";
import AdminLoginPage from "./userComponent/AdminLoginPage";
import AddSupplier from "./userComponent/AddSupplier";
import ViewAllSuppliers from "./userComponent/ViewAllSuppliers";
import AddProductReview from "./ReviewComponent/AddProductReview";
import GetProductReviews from "./ReviewComponent/GetProductReviews";
import MyWallet from "./userComponent/MyWallet";
import MyProductOffers from "./userComponent/MyProductOffers";
import UserOtpVerification from "./userComponent/UserOtpVerification";
import UpdateProductForm from "./productComponent/UpdateProductForm";
import ViewAllCategory from "./productComponent/ViewAllCategory";
import UpdateCategoryForm from "./productComponent/UpdateCategoryForm";
import LoginPage from "./pages/LoginPage.jsx";
import { gapi } from "gapi-script";
import  { useEffect } from 'react';

const clientId = "976506540977-set2d5jaq33h0et515ja2rhjglil9h1f.apps.googleusercontent.com";


function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home/all/product/categories" element={<HomePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="addproduct" element={<AddProductForm />} />
        <Route path="addcategory" element={<AddCategoryForm />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user/GoogleOAuth" element={<GoogleOAuth />} />
        <Route path="/user/register" element={<AddUserForm />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/user/admin/register" element={<RegisterAdminForm />} />
        <Route path="/user/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/home/product/category/:categoryId/:categoryName"
          element={<HomePage />}
        />
        <Route
          path="/product/:productId/category/:categoryId"
          element={<Product />}
        />
        <Route path="/user/productOffers" element={<MyProductOffers />} />
        <Route path="/user/order/payment" element={<AddCardDetails />} />
        <Route path="/user/myorder" element={<MyOrder />} />
        <Route path="/user/admin/allorder" element={<AllOrders />} />
        <Route path="/user/admin/searchOrder" element={<SearchOrder />} />
        <Route path="/user/supplier/register" element={<AddSupplier />} />
        <Route path="/supplier/all" element={<ViewAllSuppliers />} />
        <Route
          path="/product/:productId/review/add"
          element={<AddProductReview />}
        />
        <Route path="/product/review/fetch" element={<GetProductReviews />} />
        <Route path="/customer/wallet" element={<MyWallet />} />

        <Route path="/user/verify/register" element={<UserOtpVerification />} />
        <Route path="/admin/product/update" element={<UpdateProductForm />} />
        <Route path="/admin/category/update" element={<UpdateCategoryForm />} />
        <Route path="/admin/category/all" element={<ViewAllCategory />} />
      </Routes>
    </div>
  );
}

export default App;
