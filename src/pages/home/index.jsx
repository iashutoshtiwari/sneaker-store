import React from "react";
import styles from "./index.module.scss";
import ProductTile from "../cart/product-tile/product-tile";
import products from "@/mock/products";
import { Grid } from "@mui/material";

const Home = () => {
	return (
		<div className={styles.container}>
			<Grid container spacing={1}>
				{products.map((item, index) => (
					<ProductTile key={index} item={item} />
				))}
			</Grid>
		</div>
	);
};

export default Home;
