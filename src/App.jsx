import SplitGrid from "./components/Splitgrid";
import AppState from "./context/app/appState";

const App = () => {
  return (
    <AppState>
      <div className="App">
        <SplitGrid />
      </div>
    </AppState>
  );
};

export default App;
