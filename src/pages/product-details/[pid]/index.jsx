import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getProductDetails } from "@/redux/actions/pdp";
import ProductInfo from "@/components/pdp/product-info/product-info";
import ProductImages from "@/components/pdp/product-images/product-images";
import ProductDescription from "@/components/pdp/product-description/product-description";
import Spinner from "@/components/common/spinner/spinner";

const ProductDetails = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const pageLoaded = useSelector((state) => state?.pdp?.pageLoaded ?? false);

	useEffect(() => {
		setTimeout(() => {
			dispatch(getProductDetails(router?.query?.pid));
		}, 3000);
	});

	return (
		<>
			{pageLoaded ? (
				<div>
					<ProductInfo />
					<ProductImages />
					<ProductDescription />
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default ProductDetails;
