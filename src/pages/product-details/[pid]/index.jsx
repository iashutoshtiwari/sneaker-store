import { useRouter } from "next/router";
import React from "react";

const Product = () => {
	const router = useRouter();
	const productId = router?.query?.pid;
	return <div>Product {productId}</div>;
};

export default Product;
