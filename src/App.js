import React, { Component } from "react";
import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen";
import store from "./lib/redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    );
  }
}

export default App;
