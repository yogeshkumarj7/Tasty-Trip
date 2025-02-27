import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
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
import Loader from "./utils/Loader";
import { Toaster } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
import Body from "./components/Body";

const AppLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div>
      <Toaster
        position={isMobile ? "top-center" : "top-right"}
        containerStyle={{
          top: 100,
        }}
        toastOptions={{
          duration: 2000,
          style: {
            background: "#333",
            color: "#fff",
            ...(isMobile && {
              maxWidth: "300px",
              fontSize: "14px",
              padding: "8px 12px",
              top: 50,
            }),
          },
          success: {
            style: {
              background: "#22c55e",
            },
          },
          error: {
            style: {
              background: "#ef4444",
            },
          },
        }}
      />
      <Loader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={Store}>
      <AppLayout />
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default App;
