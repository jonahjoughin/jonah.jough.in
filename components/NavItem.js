import React from 'react';
import Link from 'next/link'

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }
  render() {
    return (
      <div className="root" onMouseOver={() => this.setState({ hover: true })} onMouseOut={() => this.setState({ hover: false })}>
        <Link href={"/"+this.props.name.toLowerCase().replace(/\s/g, "+")}><a className={this.state.hover ? "navItem hover":"navItem"}>{this.props.name}</a></Link>
        <style jsx>{`
          .root {
            display: inline-block;
            height: 64px;
          }
          .navItem {
            display: inline-block;
            line-height: 64px;
            vertical-align: middle;
            height: 2rem;
            color: #1118;
            text-decoration: none;
            padding: 0px 15px;
            //margin-right: 20px;
            font-family: "Raleway";
            font-weight: 700;
          }
          .navItem.hover {
            color: #E1BC29;
          }
        `}</style>
      </div>
    )
  }
}

export default NavItem;
