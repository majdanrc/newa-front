import React from "react";
import Image from "next/image";
import { monoton } from "@/app/ui/fonts";

const LogoBox = () => {
  const styles = {
    logoContainer: {
      display: "flex",
      alignItems: "center",
      padding: "20px",
    },
    logo: {
      width: 200,
      height: 200,
    },
    logoText: {
      color: "#3c4f3a",
      marginLeft: "20px",
    },
  };

  return (
    <div style={styles.logoContainer} className="p-40">
      <Image
        className="sticky dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo.png"
        alt="Logo"
        width={styles.logo.width}
        height={styles.logo.height}
        style={styles.logo}
      />
      <h1
        style={styles.logoText}
        className={`${monoton.className} text-xl md:text-5xl md:leading-normal`}
      >
        Kino Newa
      </h1>
    </div>
  );
};

export default LogoBox;
