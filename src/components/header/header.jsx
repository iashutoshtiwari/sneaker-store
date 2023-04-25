import React from "react";
import { useRouter } from "next/router";
import Logo from "../../assets/logo.svg";
import Bag from "../../assets/bag.svg";
import Menu from "../../assets/menu.svg";
import styles from "./header.module.scss";
import useBreakpoint from "../../utils/hooks/useBreakpoint";

const Header = () => {
	const router = useRouter();
	const breakpoint = useBreakpoint();
	console.log(breakpoint);

	const onLogoClick = () => {
		console.log("Header >>> onLogoClick");
		router.push("/home");
	};

	const onCartIconClick = () => {
		console.log("Header >>> onCartIconClick");
		router.push("/cart");
	};

	const onMenuIconClick = () => {
		console.log("Header >>> onMenuIconClick");
	};

	return (
		<div className={styles.container}>
			<Logo className={styles.logo} onClick={onLogoClick} height={58} width={58} />
			<div className={styles.actions}>
				<Bag
					onClick={onCartIconClick}
					className={styles.icon}
					style={{ fontSize: "24px", padding: "8px", marginRight: "8px" }}
				/>
				<Menu
					onClick={onMenuIconClick}
					className={styles.icon}
					style={{ fontSize: "24px", padding: "8px", marginRight: "8px" }}
				/>
			</div>
		</div>
	);
};

export default Header;
