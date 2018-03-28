import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {

    const childClassName = this.props.theme

    const childrenWithClassName = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        className: childClassName
      });
    });

    return (
      <div>
        {childrenWithClassName}
      </div>
    );
  }
}
