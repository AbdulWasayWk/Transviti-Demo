import { Box, Divider, Typography } from "@mui/material";
import { Fragment } from "react/jsx-runtime";

const stats: Array<{
	title: string;
	amount: number;
}> = [
	{
		title: "Profile Visitors",
		amount: 140,
	},
	{
		title: "Resume Viewers",
		amount: 20,
	},
	{
		title: "My Jobs",
		amount: 88,
	},
];

export default function ProfileStats() {
	return (
		<Box
			sx={{
				width: "95%",
				minHeight: "137px",
				borderRadius: "10px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "white",
				marginTop: "10px",
				gap: "10px",
			}}
		>
			{stats.map((stat, index) => (
				<Fragment key={index}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "90%",
						}}
					>
						<Typography
							sx={{
								fontWeight: 500,
								fontSize: "14px",
								color: "#333333",
							}}
						>
							{stat.title}
						</Typography>
						<Typography
							sx={{
								fontWeight: 500,
								fontSize: "16px",
								color: "#0154AA",
							}}
						>
							{stat.amount}
						</Typography>
					</Box>
					{index + 1 < stats.length && (
						<Divider
							sx={{
								width: "90%",
								backgroundColor: "#E9ECEF",
							}}
						/>
					)}
				</Fragment>
			))}
		</Box>
	);
}
