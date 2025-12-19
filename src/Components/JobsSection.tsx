import { Box, Link, Typography } from "@mui/material";
import JobCard from "./JobCard";

interface JobsSectionProps {
	label: string;
	link: string;
	jobCount: number;
}

export default function JobsSection({ label, link, jobCount }: JobsSectionProps) {
	return (
		<Box
			sx={{
				marginTop: "30px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					gap: "10px",
					alignItems: "center",
				}}
			>
				<Typography
					sx={{
						fontWeight: 500,
						fontSize: "18px",
						color: "#333333",
					}}
				>
					{label}
				</Typography>
				<Link
					sx={{
						fontWeight: 500,
						fontSize: "14px",
						color: "#0154AA",
						cursor: "pointer",
					}}
				>
					{link}
				</Link>
			</Box>
			<Box
				sx={{
					width: "100%",
					marginTop: "15px",
					display: "flex",
					flexWrap: "wrap",
					gap: "20px",
				}}
			>
				{Array.from({ length: jobCount }).map((_, index) => (
					<JobCard key={index} />
				))}
			</Box>
		</Box>
	);
}
