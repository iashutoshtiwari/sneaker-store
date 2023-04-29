import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getProductDetails } from "@/redux/actions/pdp";
import ProductInfo from "@/components/pdp/product-info/product-info";
import ProductImages from "@/components/pdp/product-images/product-images";
import ProductDescription from "@/components/pdp/product-description/product-description";
import Spinner from "@/components/common/spinner/spinner";
import useBreakpoint from "@/utils/hooks/useBreakpoint";
import styles from "../index.module.scss";

const ProductDetails = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const breakpoint = useBreakpoint();

	const pageLoaded = useSelector((state) => state?.pdp?.pageLoaded ?? false);

	useEffect(() => {
		dispatch(getProductDetails(router?.query?.pid));
	});

	return (
		<>
			{pageLoaded ? (
				<div className={styles["pdp-container"]}>
					{(breakpoint === "md" || breakpoint === "lg" || breakpoint === "xl") && (
						<div className={styles["image-wrapper"]}>
							<ProductImages />
						</div>
					)}
					<div>
						<ProductInfo />
						{(breakpoint === "xs" || breakpoint === "sm") && (
							<div className={styles["image-wrapper"]}>
								<ProductImages />
							</div>
						)}
						<ProductDescription />
					</div>
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default ProductDetails;
