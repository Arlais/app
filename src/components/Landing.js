import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Landing() {
  const { state, dispatch } = useContext(ThemeContext);
  return <h1>Esta en el Landing page</h1>;
}
export default Landing;
