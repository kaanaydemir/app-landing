import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppDetail from "./screens/AppDetail";
import Home from "./screens/Home";
import Layout from "./screens/Layout";
import Contact from "./screens/Contact";
import 'flowbite';
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./util/http";
import Privacy from "./screens/Privacy";
import TermsOfService from "./screens/TermsOfService";


const router = createBrowserRouter([
  {
    path: '/privacy',
    element: <Privacy/>,
  },
  {
    path: '/terms-of-service',
    element: <TermsOfService/>,
  },
  {
    path: '/',
    element: <Layout/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'apps/:appName', element: <AppDetail/>},
      {path: 'contact', element: <Contact/>},
    ]
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  );
}

export default App;
