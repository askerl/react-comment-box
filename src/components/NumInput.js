
import React, {PropTypes} from 'react';

class NumInput extends React.Component {
  render(){
    let label = this.props.label !== '' ?
      <label>{this.props.label} -  {this.props.val} </label> : ''
    return (
        <div>
          {label}
          <input
            ref="num"
            type={this.props.type}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            defaultValue={this.props.val}
            onChange={this.props.onUpdate}
          />
        </div>
    );
  }

}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  onUpdate: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

export default NumInput;
