import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import CollectionData from "./collectionData";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: CollectionData,
    };
  }
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
