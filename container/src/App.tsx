import React from 'react';
import { Routes, Route } from "react-router-dom";
import ContainerApp from "./components/ContainerApp";
import './App.css';

const Button = React.lazy(() => import("app1/Button"));
const Counter = React.lazy(() => import("app2/Counter"));


function App() {
  return (
    <div className='App'>
    <Routes>
      <Route
        path="/"
        element={
          <ContainerApp AppOne={Button} AppTwo={Counter} />
        }
      />
      <Route path="app1/*" element={<Button />} />
      <Route path="app2/*" element={<Counter />} />
    </Routes>
  </div>
  );
}

export default App;
