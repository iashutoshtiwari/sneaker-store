import React from "react";
import styles from "../pdp.module.scss";
import { useSelector } from "react-redux";

const ProductInfo = (props) => {
	const item = useSelector((state) => state?.pdp?.details);
	return (
		<div className={styles["product-info-container"]}>
			<h1>{item?.name}</h1>
			<h3>{item?.category}</h3>
			<div>MRP: ₹{item?.price}</div>
			<div>
				<p>incl. of taxes</p>
			</div>
		</div>
	);
};

export default ProductInfo;
