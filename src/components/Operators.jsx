import React from "react";

class Operators extends React.Component {
  ops = ["+", "-", "x", "/"];

  getClass(op) {
    return this.props.op === op ? "calc-data exp selected" : "calc-data exp";
  }

  handleSelection(o) {
    this.setState({ selected: o });
    this.props.setOper(o);
  }

  render() {
    return (
      <div className="express">
        {this.ops.map(op => (
          <div
            key={op}
            value={op}
            className={this.getClass(op)}
            onClick={() => this.handleSelection(op)}
          >
            {op}
          </div>
        ))}
      </div>
    );
  }
}

export default Operators;
