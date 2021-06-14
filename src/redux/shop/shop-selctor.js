import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
  watches: 1,
  sneakers: 2,
  jeans: 3,
  sunglasses: 4,
  suits: 5,
  beauty: 6,
  men: 7,
  women: 8,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParams) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collections) => collections.id === COLLECTION_ID_MAP[collectionUrlParams]
    )
  )
);
