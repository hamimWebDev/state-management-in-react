import React from 'react';

interface State {
  count: number;
}

class CounterWithClass extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log(this);
    const { count } = this.state;
    return (
      <button onClick={() => this.setState({ count: count + 1 })}>
        {count}
      </button>
    );
  }
}

export default CounterWithClass;
