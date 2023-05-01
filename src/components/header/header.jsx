import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../../assets/logo.svg";
import Bag from "../../assets/bag.svg";
import Menu from "../../assets/menu.svg";
import Profile from "../../assets/profile.svg";
import styles from "./header.module.scss";
import useBreakpoint from "../../utils/hooks/useBreakpoint";
import Button from "../common/button/button";
import { Drawer } from "@mui/material";
import LoginModal from "../login-modal/login-modal";

const Header = () => {
	const router = useRouter();
	const breakpoint = useBreakpoint();

	const [toggleHeaderDrawer, setToggleHeaderDrawer] = useState(false);
	const [toggleLoginModal, setToggleLoginModal] = useState(false);

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
		setToggleHeaderDrawer(!toggleHeaderDrawer);
	};

	const onLoginClick = () => {
		console.log("Header >>> onProfileIconClick");
		setToggleLoginModal(true);
		setToggleHeaderDrawer(false);
	};

	const onDrawerClose = () => {
		setToggleHeaderDrawer(!toggleHeaderDrawer);
	};

	return (
		<>
			<div className={styles.container}>
				<Logo className={styles.logo} onClick={onLogoClick} height={58} width={58} />
				<div className={styles.actions}>
					<Bag
						onClick={onCartIconClick}
						className={styles.icon}
						style={{ fontSize: "24px", padding: "8px", marginRight: "8px" }}
					/>
					{breakpoint === "xs" || breakpoint === "sm" ? (
						<Menu
							onClick={onMenuIconClick}
							className={styles.icon}
							style={{ fontSize: "24px", padding: "8px", marginRight: "8px" }}
						/>
					) : (
						<Profile
							onClick={onLoginClick}
							className={styles.icon}
							style={{ fontSize: "24px", padding: "8px", marginRight: "8px" }}
						/>
					)}
				</div>
				<Drawer open={toggleHeaderDrawer} onClose={onDrawerClose} anchor="right">
					<div className={styles["drawer-container"]}>
						<Button onClick={onLoginClick} width={150} height={40} buttonLabel="Sign In" />
					</div>
				</Drawer>
			</div>
			<LoginModal open={toggleLoginModal} setOpen={setToggleLoginModal} />
		</>
	);
};

export default Header;
