import React from "react";
import styles from "./index.module.scss";
import ProductTile from "../cart/product-tile/product-tile";
import products from "@/mock/products";

const Home = () => {
	return (
		<div className={styles.container}>
			{products.map((item, index) => (
				<ProductTile key={index} item={item} />
			))}
		</div>
	);
};

export default Home;
