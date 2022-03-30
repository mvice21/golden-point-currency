import styles from "./commonStyles.module.css";

export default function Header() {
	let today = new Date();
	const dd = String(today.getDate()).padStart(2, "0");
	const mm = String(today.getMonth() + 1).padStart(2, "0");
	const yy = today.getFullYear().toString().slice(-2);
	today = `${dd}.${mm}.${yy}`;

	return (
		<>
			<h3 className={styles.heading}>Курс валют на {today}</h3>
			<div className={styles.listHeader}>
				<div>Код валюты</div>
				<div>Курс в ₽</div>
				<div>Изменение</div>
			</div>
		</>
	);
}
