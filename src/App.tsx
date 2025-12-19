import { Box } from "@mui/material";
import Header from "./Components/Header";
import "./App.css";
import ProfileInfo from "./Components/ProfileInfo";
import JobsManagement from "./Components/JobsManagement";

function App() {
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Header />
			<Box
				sx={{
					backgroundColor: "#F4F4F4",
					flex: 1,
					display: "flex",
					flexDirection: "row",
					padding: "30px 40px",
				}}
			>
				<ProfileInfo />
				<JobsManagement />
			</Box>
		</Box>
	);
}

export default App;
