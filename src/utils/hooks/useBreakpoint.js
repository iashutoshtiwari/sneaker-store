import { useEffect, useState } from "react";
import breakpoints from "../breakpoints";

const useBreakpoint = () => {
	const [breakpoint, setBreakPoint] = useState("");
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	const handleResize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();

		if (0 < windowSize.width && windowSize.width < 576) {
			setBreakPoint(breakpoints[0]);
		}
		if (576 <= windowSize.width && windowSize.width < 768) {
			setBreakPoint(breakpoints[576]);
		}
		if (768 <= windowSize.width && windowSize.width < 992) {
			setBreakPoint(breakpoints[768]);
		}
		if (992 <= windowSize.width && windowSize.width < 1200) {
			setBreakPoint(breakpoints[992]);
		}
		if (windowSize.width >= 1200) {
			setBreakPoint(breakpoints[1200]);
		}

		return () => window.removeEventListener("resize", handleResize);
	}, [windowSize.width]);
	return breakpoint;
};

export default useBreakpoint;
