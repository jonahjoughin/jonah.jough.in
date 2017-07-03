import React from 'react';
import Tag from './Tag.js';

class TagGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="root">
        {this.props.children}
        <style jsx>{`
          .root {
            // border: 1px red solid;
            display:block;
            height: 2rem;
            margin: 20px;
          }
        `}</style>
      </div>
    )
  }
}


TagGroup.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName]

    let error = null
    React.Children.forEach(prop, function (child) {
      if (child.type.displayName !== 'Tag') {
        error = new Error('`' + componentName + '` children should be of type `Tag`. Child is of type'+child.type.displayName);
      }
    })
    return error
  }
}

export default TagGroup;
