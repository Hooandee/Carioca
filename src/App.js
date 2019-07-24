import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    color: null
  };

  render() {
    return (
      <>
        <div className="App">
          <input
            onChange={event =>
              this.setState({
                color:
                  "#" +
                  event.target.value
                    .split("")
                    .map(value => value.charCodeAt(0))
                    .reduce((acc, element) => acc + element, 0)
              })
            }
          />
        </div>

        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: this.state.color,
            border: "1px solid black"
          }}
        />
      </>
    );
  }
}

export default App;
