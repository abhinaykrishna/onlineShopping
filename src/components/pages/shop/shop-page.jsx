import React, { useState } from "react";
import CollectionPreview from "../../collection-preview/collection-preview";
import CollectionData from "./collectionData";

function ShopPage() {
  const [collections, setCollections] = useState(CollectionData);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default ShopPage;
