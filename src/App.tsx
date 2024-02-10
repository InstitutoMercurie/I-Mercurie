import { useEffect, useState } from "react";
import { HeaderComponent as Header } from "./components/Header/Header";

function App() {
	const now = new Date();

	const weekDays = [
		"Segunda-Feira",
		"Terça-Feira",
		"Quarta-Feira",
		"Quinta-Feira",
		"Sexta-Feira",
		"Sábado",
		"Domingo",
	];

	const [date, setDate] = useState({
		hours: now.getHours(),
		minutes: now.getMinutes(),
		weekday: now.getDay(),
	});
	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date();
			setDate({
				hours: now.getHours(),
				minutes: now.getMinutes(),
				weekday: now.getDay(),
			});
		}, 1000);
		return () => clearInterval(timer);
	}, []);
	return (
		<>
			<Header />
			<div className="w-full h-screen flex flex-col pt-24 pb-12">
				<div className="w-full h-full py-14 flex flex-col items-center justify-center">
					<span className="font-poppins text-2xl text-white">Bom dia</span>
					<span className="font-raleway text-4xl text-white font-semibold">
						Instituto Mercurie
					</span>
				</div>
				<div className="w-full h-full flex flex-col items-center justify-center">
					<span className="font-poppins text-white text-9xl">{`${
						date.hours < 10 ? `0${date.hours}` : date.hours
					}:${date.minutes < 10 ? `0${date.minutes}` : date.minutes}`}</span>
					<span className="font-poppins text-white text-8xl">
						{weekDays[date.weekday]}
					</span>
				</div>
				<div className="w-full h-full flex justify-center items-end">
					<span className="text-white font-poppins text-2xl">
						Espro - Quarta - 12791
					</span>
				</div>
			</div>
		</>
	);
}

export default App;
