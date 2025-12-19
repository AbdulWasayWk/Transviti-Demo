import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import TeamsIcon from "./TeamsIcon";
import LocationIcon from "./LocationIcon";
import ClockIcon from "./ClockIcon";
import BookmarkIcon from "./BookmarkIcon";
import ActionButton from "./ActionButton";

export default function JobCard() {
	return (
		<Card sx={{ width: "168px", minHeight: "164px", borderRadius: "10px", padding: "16px" }}>
			<CardContent
				sx={{
					padding: 0,
					"&:last-child": {
						paddingBottom: 0,
					},
				}}
			>
				<Typography
					sx={{
						marginBottom: "5px",
						fontWeight: 600,
						fontSize: "10px",
						color: "#333333",
					}}
				>
					Promoted
				</Typography>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 2,
						marginBottom: "5px",
						marginLeft: "10px",
					}}
				>
					<TeamsIcon width={22} height={22} />
					<Box>
						<Typography
							sx={{
								fontWeight: 500,
								fontSize: "14px",
								color: "#333333",
							}}
						>
							UI/UX Designer
						</Typography>
						<Typography
							sx={{
								marginTop: 0.5,
								fontWeight: 500,
								fontSize: "12px",
								color: "#333333",
							}}
						>
							Teams
						</Typography>
					</Box>
				</Box>

				<Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1 }}>
					<LocationIcon />
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: "12px",
							color: "#585D6E",
						}}
					>
						Seattle, USA (Remote)
					</Typography>
				</Box>

				<Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
					<ClockIcon />
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: "12px",
							color: "#585D6E",
						}}
					>
						1 day ago |{" "}
						<Typography
							component="span"
							sx={{
								fontWeight: 500,
								fontSize: "12px",
								color: "#0154AA",
							}}
						>
							22 applicants
						</Typography>
					</Typography>
				</Box>

				<Box sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
					<ActionButton label="Apply Now" fullWidth />
					<IconButton sx={{ borderColor: "divider" }}>
						<BookmarkIcon />
					</IconButton>
				</Box>
			</CardContent>
		</Card>
	);
}
