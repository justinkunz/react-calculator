import React from "react";

class NumberKeys extends React.Component {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];

  getNumClasses(n) {
    return this.props.lastSelected === n
      ? "calc-data calc-number lastSel"
      : "calc-data calc-number";
  }
  render() {
    return (
      <div className="nums">
        {this.numbers.map(n => (
          <div
            key={n}
            className={this.getNumClasses(n)}
            onClick={() => this.props.pushNumber(n)}
          >
            {n}
          </div>
        ))}

        <div
          className="calc-data calc-equal"
          onClick={() => this.props.doCalc()}
        >
          =
        </div>
      </div>
    );
  }
}

export default NumberKeys;
