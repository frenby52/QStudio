import React from "react";
import './App.css';
import avatar from './avatar.png';

const size = 150;
const initialMargin = 4;
const margin = 4;
const backGroundColor = `red`;
const colors = ['green', 'blue'];
const hoverColors=['blue', 'green', `yellow`];
const colorWidth= 6;

const App = () => {
  return (
    <div className="App">
      <ColoredUserpic
        src={avatar}
        size={size}
        margin={margin}
        backGroundColor={backGroundColor}
        colors={colors}
        hoverColors={hoverColors}
        colorWidth={colorWidth}
      />
    </div>
  );
};

class ColoredUserpic extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { isHovered: false};
    this._handleMouseHover = this._handleMouseHover.bind(this);
  }

  _handleMouseHover() {
    this.setState((prevState) => ({ isHovered: !prevState.isHovered }));
  }

  render() {
    const { isHovered } = this.state;
    const { src, backGroundColor, colorWidth, size, margin, hoverColors, colors } = this.props;
    const picSize = size - initialMargin * 2 - colorWidth * 2;

    return (
      <div className="wrapper" >
        <div className="gradient_container" style={{ border: `${colorWidth}px solid transparent`, backgroundImage: `linear-gradient(to right, ${isHovered ? hoverColors : colors}` }}
             onMouseEnter={this._handleMouseHover}
             onMouseLeave={this._handleMouseHover}
        >
          <div className="bg_container" style={{ backgroundColor: backGroundColor }}>
            <img className="userpic" alt={`userpic`}
              src={src}
              style={{ height: `${picSize}px`, width: `${picSize}px`, margin: margin}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
