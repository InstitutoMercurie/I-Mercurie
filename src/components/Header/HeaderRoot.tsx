import { ReactNode } from "react";

interface HeaderRootProps {
	children: ReactNode;
}

export function HeaderRoot(props: HeaderRootProps) {
	return <div className="flex absolute px-11 py-3 w-full h-24 bg-white">{props.children}</div>;
}
