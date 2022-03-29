import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import { useReducer } from "react";
import { initialState, themeReducer } from "./utils";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
