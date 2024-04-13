import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppDetail from "./screens/AppDetail";
import Home from "./screens/Home";
import Layout from "./screens/Layout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'apps/:appName', element: <AppDetail/>},
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
