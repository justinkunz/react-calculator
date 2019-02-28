import React from "react";

class Clear extends React.Component {
  render() {
    return (
      <div className="clearBtn" onClick={() => this.props.clear()}>
        Clear
      </div>
    );
  }
}

export default Clear;
