import CollectionData from "./collectionData";

const INITIAL_STATE = {
  collections: CollectionData,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
