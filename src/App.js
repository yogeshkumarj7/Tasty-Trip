import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Payment from "./components/Payment";
import Developer from "./components/Developer";
import SignupForm from "./components/SignupForm";

const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/developer",
        element: <Developer />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
