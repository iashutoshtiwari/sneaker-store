import React from "react";
import styles from "./productTile.module.scss";
import Image from "next/image";

const ProductTile = (props) => {
	const { item, onClick } = props;

	const onProductTileClick = () => {
		console.log("ProductTile >>> onProductTileClick");

		if (onClick) {
			onClick();
		}
	};

	return (
		<div className={styles["container"]} onClick={onProductTileClick}>
			<div className={styles["product-image-container"]}>
				<Image style={{ objectFit: "contain" }} alt={item.name} height={223} width={223} src={item.images[0]} />
			</div>
			<div className={styles["product-details-container"]}>
				<div className={styles["product-details"]}>
					<h3>{item?.name}</h3>
					<p>{item?.category}</p>
				</div>
				<div className={styles["product-price"]}>
					<h3>MRP: ₹ {item?.price}</h3>
				</div>
			</div>
		</div>
	);
};

export default ProductTile;
