import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import NotFound from "./src/components/NotFound";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import userContext from "./utils/userContext";

const AppLayout = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const loggedInUser = {
      name: "Manash J. Das",
    };
    setName(loggedInUser?.name);
  }, []);

  return (
    // <userContext.Provider value={{ loggedinUser: name }}>
    //   <div className="app">
    //     <userContext.Provider value={{ loggedinUser: "Chintu" }}>
    //       <Header />
    //     </userContext.Provider>
    //     <Outlet />
    //   </div>
    // </userContext.Provider>
    <userContext.Provider value={{ loggedinUser: name, setName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

/**
 * Lazy loading
 * Code Splitting
 * Dynamic loading
 * import() below is a function
 */

const About = lazy(() => import("./src/components/About"));

// create the routing configuration
// provide the configuration by routerProvider to the App
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);
