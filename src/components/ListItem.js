import { useEffect } from "react";
import styles from "./commonStyles.module.css";

export default function ListItem({ data }) {
	useEffect(() => {
		let item = document.querySelector(`.item-${data.NumCode}`);
		let tooltip = document.querySelector(`.tooltip-${data.NumCode}`);

		item.onmousemove = function (e) {
			let x = e.clientX + 8 + "px";
			let y = e.clientY + 8 + "px";

			const position = window.pageYOffset;

			tooltip.style.top = parseInt(y) + position + "px";
			tooltip.style.left = x;
		};
	});

	const priceChange = (
		((data.Value - data.Previous) / data.Previous) *
		100
	).toFixed(2);

	return (
		<li className={`${styles.listItem} item-${data.NumCode}`}>
			<div>{data.NumCode}</div>
			<div>{data.Value.toFixed(2)}</div>

			<div>
				<div className={priceChange < 0 ? styles.decreased : styles.increased}>
					{priceChange}%
				</div>
				<div className={styles.compareBlock}>
					{data.Previous.toFixed(2)} &#8594; {data.Value.toFixed(2)}
				</div>
			</div>
			<span className={`${styles.tooltip} tooltip-${data.NumCode}`}>
				{data.Name}
			</span>
		</li>
	);
}
