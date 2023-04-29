import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import styles from "./index.module.scss";
import ProductTile from "../../components/home/product-tile/product-tile";
import { getProductList } from "@/redux/actions/home";
import Spinner from "@/components/common/spinner/spinner";

const Home = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const productList = useSelector((state) => state?.home?.list ?? []);
	const pageLoaded = useSelector((state) => state?.home?.pageLoaded ?? false);

	useEffect(() => {
		dispatch(getProductList());
	});

	const onProductTileClick = (item) => {
		console.log("Home >>> onProductTileClick");
		if (item.style) {
			router.push({
				pathname: "/product-details/[pid]",
				query: { pid: item.style },
			});
		}
	};

	return (
		<>
			{pageLoaded ? (
				<div className={styles.container}>
					<Grid container spacing={1}>
						{productList.map((item, index) => (
							<ProductTile onClick={onProductTileClick} key={index} item={item} />
						))}
					</Grid>
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Home;
