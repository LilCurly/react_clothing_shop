import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.data
);

export const selectCollectionsForPreview = createSelector(
    [selectShopData],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopData],
    data => data[collectionUrlParam]
)