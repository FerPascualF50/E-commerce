import React from "react";
import SHOP_DATA from './shop.data';
import ColelctionPreview from '../../components/collection-preview/collection-preview';


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }
    render() {
        const { collections } = this.state;

        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherCollectionsProps }) => (
                    <ColelctionPreview key={id} {...otherCollectionsProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage;