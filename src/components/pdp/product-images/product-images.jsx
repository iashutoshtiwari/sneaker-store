import Carousel from "@/components/common/carousel/carousel";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../pdp.module.scss";

const ProductImages = () => {
	const item = useSelector((state) => state?.pdp?.details);

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className={styles["product-images-container"]}>
			<Carousel settings={settings}>
				{item.images &&
					item.images.map((image) => {
						return (
							<div key={item?.id} className={styles["next-image-wrapper"]}>
								<Image
									sizes="100vw"
									fill
									style={{ objectFit: "contain" }}
									alt={item?.name}
									src={image}
								/>
							</div>
						);
					})}
			</Carousel>
		</div>
	);
};

export default ProductImages;
