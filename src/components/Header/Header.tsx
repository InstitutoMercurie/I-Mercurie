import { Header } from ".";

export function HeaderComponent() {
	return (
		<Header.Root>
			<div className="flex gap-5 h-full w-full items-center justify-start">
				<Header.Button label="Início" />
				<Header.Button label="Histórico" />
			</div>
			<div>
				<img src="icon.png" alt="" className="w-80 mt-1 drop-shadow-blue " />
			</div>
			<div className="flex gap-5 h-full w-full items-center justify-end">
				<Header.Button label="Atrasos/Faltas" />
				<Header.Button label="Cronograma" />
			</div>
		</Header.Root>
	);
}
