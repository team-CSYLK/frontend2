import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

import Main from "../pages/Main";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Category from "./Category";
import Layout from "./Layout";
import CategoryTest from "./CategoryTest";
import KakaoLogin from "../pages/socialLogin/KakaoLogin";

const Router = () => {
  //   const checkLogin = sessionStorage.getItem("memberinfo");

  return (
    <BrowserRouter>
      <Layout>
        <CategoryTest />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/KaKaoLogin" element={<KakaoLogin />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Profile" element={<Profile />} />
          {/* todo  :  propfile 주소 바껴야함 */}
          <Route path="/Edit" element={<EditProfile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
