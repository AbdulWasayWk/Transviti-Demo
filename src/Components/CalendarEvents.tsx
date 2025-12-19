import { Box, Typography } from "@mui/material";
import CaretIcon from "./CaretIcon";

export default function CalendarEvents() {
	return (
		<Box
			sx={{
				width: "95%",
				minHeight: "56px",
				borderRadius: "10px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				backgroundColor: "white",
				marginTop: "10px",
				gap: "10px",
			}}
		>
			<Box
				sx={{
					paddingLeft: "10px",
				}}
			>
				<Typography
					sx={{
						fontWeight: 600,
						fontSize: "16px",
						color: "#333333",
					}}
				>
					My Calendar
				</Typography>
				<Typography
					sx={{
						fontWeight: 500,
						fontSize: "14px",
						color: "#737A91",
					}}
				>
					Upcoming Interviews
				</Typography>
			</Box>
			<Box
				sx={{
					paddingRight: "20px",
				}}
			>
				<CaretIcon />
			</Box>
		</Box>
	);
}
