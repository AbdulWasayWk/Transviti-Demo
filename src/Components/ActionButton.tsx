import { Button } from "@mui/material";

interface ActionButtonProps {
	label: string;
	icon?: React.ReactNode;
	fullWidth?: boolean;
}

export default function ActionButton({ label, icon, fullWidth }: ActionButtonProps) {
	return (
		<Button
			sx={{
				fontSize: "12px",
				fontWeight: 500,
				color: "white",
				backgroundColor: "#0154AA",
				width: fullWidth ? "100%" : "147px",
				height: "39px",
				borderRadius: "8px",
			}}
			startIcon={icon}
		>
			{label}
		</Button>
	);
}
