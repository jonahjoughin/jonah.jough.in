import React from 'react';
import Link from 'next/link'

class Author extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="root">
        <Link href={"/authors/"+this.props.name.toLowerCase().replace(/\s/g, "+")}>
          <a className="author">
            <img src={"../static/img/"+this.props.name.toLowerCase().replace(/\s/g, "")+".jpg"} className="profilePicture"/>
            <span className = "authorName">{this.props.name}</span>
          </a>
        </Link>
        <style jsx>{`
          .root {
            margin: 20px;
            // border: 1px red solid;
            height: 2rem;
            display:block;
          }
          .author {
            display: inline;
            color: white;
            text-decoration: none;
            line-height: 2rem;
            vertical-align: middle;
            font-family: "ADAM.CG PRO";
          }
          .authorName {
            position: relative;
            top:.15rem;
            display: inline-block;
            vertical-align: middle;
          }
          .profilePicture {
            display: inline-block;
            vertical-align: middle;
            height: 2rem;
            border-radius: 1rem;
            margin-right: 10px;
          }
        `}</style>
      </div>
    )
  }
}

export default Author;
