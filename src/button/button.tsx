import React, { FC } from "react";
import { clsx } from "clsx";

import styles from "./button.module.css";

interface Button {
	text: string;
	size: "small" | "medium" | "big";
}

const sizeStyles: Record<Button["size"], string> = {
	small: styles.buttonSmall,
	medium: styles.buttonMedium,
	big: styles.buttonBig,
};

export const Button: FC<Button> = ({ text, size }) => {
	return (
		<button className={clsx(styles.button, sizeStyles[size])}>{text}</button>
	);
};
