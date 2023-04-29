import React from "react";
import styles from "./productTile.module.scss";
import Image from "next/image";
import useBreakpoint from "@/utils/hooks/useBreakpoint";
import { Grid } from "@mui/material";
import { formatCurrency } from "@/utils/utility";

const ProductTile = (props) => {
	const { item, onClick } = props;

	const breakpoint = useBreakpoint();

	const formattedPrice = formatCurrency(item?.price);

	const onProductTileClick = () => {
		console.log("ProductTile >>> onProductTileClick");

		if (onClick) {
			onClick(item);
		}
	};

	return (
		<Grid item xs={6} sm={6} md={4} lg={3}>
			<div className={styles["container"]} onClick={onProductTileClick}>
				<div className={styles["product-image-container"]}>
					<Image
						sizes="(max-width: 899px) 50vw, (max-width: 1199px) 33vw, 25vw"
						style={{ objectFit: "contain" }}
						alt={item?.name}
						fill
						src={item?.images[0]}
					/>
				</div>
				<div className={styles["product-details-container"]}>
					<div className={styles["product-details"]}>
						<h3>{item?.name}</h3>
						<p>{item?.category}</p>
					</div>
					<div className={styles["product-price"]}>
						<h3>MRP: {formattedPrice}</h3>
					</div>
				</div>
			</div>
		</Grid>
	);
};

export default ProductTile;
