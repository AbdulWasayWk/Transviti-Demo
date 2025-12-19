import { Chip } from "@mui/material";

interface CategoryChipProps {
	label: string;
}

export default function CategoryChip({ label }: CategoryChipProps) {
	return (
		<Chip
			label={label}
			variant="outlined"
			sx={{
				color: "#737A91",
				borderRadius: "5px",
				borderColor: "#737A91",
				fontSize: "12px",
				"&:hover": {
					backgroundColor: "action.hover",
					cursor: "pointer",
				},
			}}
		/>
	);
}
