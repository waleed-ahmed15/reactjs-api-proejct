import React from "react";

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }
  componentDidMount() {
    console.log(this.imageRef);
    this.imageRef.current.addEventListener("load", this.setSpan);
  }
  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    this.spans = Math.ceil(height / 10);
    console.log(this.imageRef.current.clientHeight);
  };
  render() {
    return (
      //   <div className="image">
      <img
        style={{ gridRowEnd: `span ${this.spans}` }}
        ref={this.imageRef}
        src={this.props.image.urls.regular}
        alt={this.props.image.description}
      />
      //   </div>
    );
  }
}
