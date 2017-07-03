import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="root">
        {this.props.children}
        <style jsx>{`
          .root {
            text-align: right;
            display:block;
            height: 64px;
            z-index: 100;
            padding: 0px 10px 0px 0px;
          }
        `}</style>
      </div>
    )
  }
}


NavBar.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName]

    let error = null
    React.Children.forEach(prop, function (child) {
      if (child.type.displayName !== 'NavItem') {
        error = new Error('`' + componentName + '` children should be of type `NavItem`. Child is of type'+child.type.displayName);
      }
    })
    return error
  }
}

export default NavBar;
