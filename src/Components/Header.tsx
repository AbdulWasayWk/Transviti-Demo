import { AppBar, Avatar, Box, Container, Typography } from "@mui/material";
import ActionButton from "./ActionButton";
import SearchField from "./SearchField";
import CompanyLogo from "./CompanyLogo";
import headerImage from "../assets/header_profile_picture.png";

const headings = ["Find Jobs", "Top Companies", "Job Tracker", "My Calendar", "Documents", "Messages", "Notifications"];

export default function Header() {
	return (
		<AppBar position="static" elevation={0}>
			<Container
				maxWidth="xl"
				sx={{
					widows: "100%",
					height: "70px",
					backgroundColor: "white",
					display: "flex",
					gap: "25px",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box>
					<CompanyLogo />
				</Box>
				{headings.map((item, index) => (
					<Typography
						key={index}
						variant="h6"
						sx={{
							fontSize: "16px",
							color: index === 0 ? "#0154AA" : "#737A91",
							fontWeight: index === 0 ? 600 : 500,
						}}
					>
						{item}
					</Typography>
				))}
				<SearchField />
				<ActionButton label="Resume Builder" />
				<Avatar alt="AV" src={headerImage} />
			</Container>
		</AppBar>
	);
}
