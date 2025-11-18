import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Прогноз погоды</h1>
        <div>
          <input type="text" placeholder="Найти локацию..." />
        </div>
      </div>
    );
  }
}
export default App;
