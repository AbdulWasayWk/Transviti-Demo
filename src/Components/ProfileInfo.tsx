import { Box } from "@mui/material";
import ProfileDetails from "./ProfileDetails";
import ProfileStats from "./ProfileStats";
import CalendarEvents from "./CalendarEvents";

export default function ProfileInfo() {
	return (
		<Box
			sx={{
				width: "25%",
				height: "100%",
			}}
		>
			<ProfileDetails />
			<ProfileStats />
			<CalendarEvents />
		</Box>
	);
}
