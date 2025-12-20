import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import profileBackground from "../assets/profile_background_image.png";
import profilePicture from "../assets/profile_picture.png";

export default function ProfileDetails() {
	return (
		<Card
			sx={{
				width: "95%",
				minHeight: "260px",
				borderRadius: "10px",
				textAlign: "center",
				backgroundColor: "white",
				boxShadow: 0,
			}}
		>
			<Box
				sx={{
					width: "100%",
					height: 100,
					backgroundImage: `url(${profileBackground})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					position: "relative",
				}}
			>
				<Avatar
					src={profilePicture}
					alt="Albert Flores"
					sx={{
						width: 100,
						height: 100,
						position: "absolute",
						bottom: -40,
						left: "50%",
						transform: "translateX(-50%)",
					}}
					slotProps={{
						img: {
							loading: "lazy",
						},
					}}
				/>
			</Box>

			<CardContent sx={{ paddingTop: 6 }}>
				<Typography
					sx={{
						fontWeight: 600,
						fontSize: "18px",
						color: "#333333",
					}}
				>
					Albert Flores
				</Typography>
				<Typography
					sx={{
						marginTop: 0.5,
						fontWeight: 500,
						fontSize: "14px",
						color: "#333333",
					}}
				>
					Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
				</Typography>
				<Typography
					variant="body2"
					sx={{
						marginTop: 1,
						fontWeight: 500,
						fontSize: "12px",
						color: "#585D6E",
					}}
				>
					Clinton, Maryland
				</Typography>
			</CardContent>
		</Card>
	);
}
