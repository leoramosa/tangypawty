import React from "react";
import "./styles/Input.css";
class InputNumber extends React.Component {
  state = {
    value: 1,
  };

  constructor() {
    super();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  get value() {
    return this.state.value;
  }

  increment() {
    const { max } = this.props;

    if (typeof max === "number" && this.value >= max) return;

    this.setState({ value: this.value + 1 });
  }

  decrement() {
    const { min } = this.props;

    if (typeof min === "number" && this.value <= min) return;

    this.setState({ value: this.value - 1 });
  }

  render() {
    return (
      <div className="input-number" style={this.props.style}>
        <button className="btn-qua" type="button" onClick={this.decrement}>
          &minus;
        </button>
        <input className="inpuntcontent" value={this.value} min="1" max="10" />
        <button className="btn-qua" type="button" onClick={this.increment}>
          &#43;
        </button>
      </div>
    );
  }
}

export default InputNumber;
