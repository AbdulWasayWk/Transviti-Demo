import { Box, Typography } from "@mui/material";
import JobSearch from "./JobSearch";
import JobsSection from "./JobsSection";
import SimilarCategories from "./SimilarCategories";

export default function JobsManagement() {
	return (
		<Box
			sx={{
				width: "75%",
				height: "100%",
			}}
		>
			<Box
				sx={{
					marginTop: "10px",
				}}
			>
				<Typography
					sx={{
						fontWeight: 600,
						fontSize: "22px",
						color: "#333333",
					}}
				>
					Find your Dream Job,{" "}
					<Box component="span" sx={{ color: "#0154AA" }}>
						Albert!
					</Box>
				</Typography>
				<Typography
					sx={{
						fontWeight: 500,
						fontSize: "14px",
						color: "#585D6E",
					}}
				>
					Explore the latest job openings and apply for the best opportunities available today!
				</Typography>
			</Box>
			<JobSearch />
			<SimilarCategories />
			<JobsSection label="Featured Jobs" link="See Featured Jobs" jobCount={5} />
			<JobsSection label="Recommended Jobs" link="See Recommended Jobs" jobCount={10} />
			<JobsSection label="Latest Jobs" link="See Latest Jobs" jobCount={10} />
		</Box>
	);
}
