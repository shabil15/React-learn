import {  useEffect,useRef, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from './Counter.jsx' 
import { Provider } from "react-redux";
import store from "./store.js";
import "./App.css";
function App() {

  return (
      <Provider store={store}>
        <div>
          <Counter/>
        </div>
      </Provider>
  )
}



export default App;
