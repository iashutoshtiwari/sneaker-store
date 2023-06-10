import React from "react";
import styles from "./hero-banner.module.scss";
import Image from "next/image";
import useBreakpoint from "@/utils/hooks/useBreakpoint";

const HeroBanner = () => {
  const breakpoint = useBreakpoint();

  return (
    <div className={styles["container"]}>
      <Image
        src={
          "https://ik.imagekit.io/ashutoshtiwari/sneaker-store/hero-banner/air-force-1.webp?updatedAt=1686370834658"
        }
        alt="Air Force 1 Banner"
        style={{
          objectFit:
            breakpoint !== "xs" && breakpoint !== "sm" ? "contain" : "cover",
        }}
        fill
      />
    </div>
  );
};

export default HeroBanner;
