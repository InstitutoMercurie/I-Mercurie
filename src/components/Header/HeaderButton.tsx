interface HeaderButtonProps {
	label: string;
}

export function HeaderButton(props: HeaderButtonProps) {
	// biome-ignore lint/a11y/useValidAnchor: <explanation>
	return <a href="#" className="bg-blue-500 rounded-[20px] px-6 py-3 text-xl text-white font-raleway ease-linear transition-all hover:bg-blue-600">{props.label}</a>;
}
