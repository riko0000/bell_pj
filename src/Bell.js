import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class Bell extends Component {
  constructor(props){
    super(props);
    this.state = {sf: 0, dp: 0, circleX: this.props.x };
  }

  render(){
    return(
      <Motion
        defaultStyle ={{ cx : this.state.circleX }} style ={{ cx : spring((this.state.circleX + 15), {stiffness: this.state.sf, damping: this.state.dp}) }}>
        {interpolatingStyle =>
            <circle
            onMouseDown={this.onClickCircle.bind()}
            onMouseUp={this.onEndOfClick.bind()}
            onTouchStart={this.onClickCircle.bind()}
            onTouchEnd={this.onEndOfClick.bind()}
            cx = {interpolatingStyle.cx} cy={this.props.y} />
          }
      </Motion>
    )
  }

  onClickCircle = ()  => {
    this.setState({sf: 400, dp: 5 ,circleX: this.props.x});
  };

  onEndOfClick = ()  => {
    this.setState({sf: 400, dp: 5, circleX: this.props.x - 15});
  };
}
