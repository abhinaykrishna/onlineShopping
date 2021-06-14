import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selctor";
import CollectionItem from "../../components/collection-item/collection-item";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  // console.log(match.params.collectionId);
  // console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title"> {title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // Here ownProps is the props of the component which we are wrapping in connect
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
  // state is passed to this selector as a part of the state depending upon the URL parameter
};

export default connect(mapStateToProps)(CollectionPage);
