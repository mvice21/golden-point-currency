import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Loader from "./Loader";
import styles from "./commonStyles.module.css";

export default function CurrencyList() {
	const [isLoading, setIsLoading] = useState(true);
	const [currencyData, setCurrencyData] = useState([]);

	useEffect(() => {
		fetch("https://www.cbr-xml-daily.ru/daily_json.js")
			.then((response) => response.json())
			.then((data) => {
				setIsLoading(false);
				setCurrencyData(Object.values(data.Valute));
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<ul className={styles.currencyList}>
			{isLoading ? (
				<Loader />
			) : (
				currencyData.map((c) => <ListItem data={c} key={c.ID} />)
			)}
		</ul>
	);
}
