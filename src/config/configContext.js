import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

class ConfigProvider extends Component {
  state = {
    hoveredItem: { name: 'Tunnel Redwood Pinehurst' },
    toggleItem: (item) => {
      /// console.log(item)
      this.setState({ hoveredItem: item }, console.log(this.state.hoveredItem));
    },
  };

  render() {
    return (
      <Provider
        value={{
          toggleItem: this.state.toggleItem,
          hoveredItem: this.state.hoveredItem,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ConfigProvider };

// I make this default since it will probably be exported most often.
export default Consumer;
