import React from "react";
import Popover from "react-popover";



class PopoverComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  togglePopover = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="App">
        <Popover
          isOpen={this.state.isOpen}
          body={this.props.body}
          place="below"
          onOuterAction={this.togglePopover}
        >
          <button onClick={this.togglePopover}>{this.props.button}</button>
        </Popover>
      </div>
    );
  }
}

export default PopoverComponent
