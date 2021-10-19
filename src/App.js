import s from "./App.module.css";
import Header from "./HEADER/_Header";
import Main from "./MAIN/_Main";
import Podval from "./PODVAL/_Podval";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Main />
      <Podval />
    </div>
  );
}

export default App;
