import React from "react";
import Logo from "../../assets/logo.svg";
import styles from "./header.module.scss";
import useBreakpoint from "../../utils/hooks/useBreakpoint";

const Header = () => {
	const breakpoint = useBreakpoint();
	console.log(breakpoint);
	return (
		<div className={styles.container}>
			<Logo height={78} width={78} />
			<div className={styles.actions}>
				<ion-icon style={{ fontSize: "24px" }} name="heart-outline"></ion-icon>
				<ion-icon style={{ fontSize: "24px" }} name="bag-outline"></ion-icon>
				<ion-icon style={{ fontSize: "24px" }} name="reorder-four-outline"></ion-icon>
			</div>
		</div>
	);
};

export default Header;
