import React from 'react';
import Link from 'next/link'

class Tag extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="root">
        <Link href={"/tags/"+this.props.name.toLowerCase().replace(/\s/g, "+")}><a className="tag">{this.props.name}</a></Link>
        <style jsx>{`
          .root {
            display: inline-block;
            height: 2rem;
          }
          .tag {
            display: inline-block;
            line-height: 2rem;
            height: 2rem;
            border: 2px white solid;
            color: white;
            text-decoration: none;
            padding: 0px 20px;
            margin-right: 20px;
            font-family: "ADAM.CG PRO";
          }
          .tag:hover {
            background-color: white;
            color: black;
          }
        `}</style>
      </div>
    )
  }
}

export default Tag;
