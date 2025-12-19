import { Box, Divider, Paper, TextField } from "@mui/material";
import SearchIcon from "./SearchIcon";
import ActionButton from "./ActionButton";
import { useState } from "react";
import SelectField from "./SelectField";
import type { SelectFieldDataType } from "../types";

const locations: Array<SelectFieldDataType> = [
	{
		id: "new-york",
		value: "New York",
	},
	{
		id: "san-francisco",
		value: "San Francisco",
	},
	{
		id: "london",
		value: "London",
	},
	{
		id: "remote",
		value: "Remote",
	},
];

const jobTypes: Array<SelectFieldDataType> = [
	{
		id: "full-time",
		value: "Full Time",
	},
	{
		id: "part-time",
		value: "Part Time",
	},
	{
		id: "contract",
		value: "Contract",
	},
	{
		id: "internship",
		value: "Internship",
	},
];

export default function JobSearch() {
	const [locationValue, setLocationValue] = useState("");
	const [jobTypeValue, setJobTypeValue] = useState("");

	return (
		<Box
			sx={{
				width: "100%",
				backgroundColor: "#F5F5F5",
				marginTop: "20px",
			}}
		>
			<Paper elevation={0} sx={{ padding: 3, backgroundColor: "white", borderRadius: 2 }}>
				<Box
					sx={{
						display: "flex",
						gap: 2,
						alignItems: "center",
						flexWrap: "wrap",
					}}
				>
					<TextField
						placeholder="Job Title, Company, or Keywords"
						variant="outlined"
						sx={{
							flex: "1 1 300px",
							"& .MuiOutlinedInput-root": {
								"& fieldset": { border: "none" },
								"&:hover fieldset": { border: "none" },
								"&.Mui-focused fieldset": { border: "none" },
							},
							"& .MuiInputBase-input::placeholder": {
								color: "#585D6E",
								opacity: 1,
							},
						}}
					/>

					<Divider
						orientation="vertical"
						variant="middle"
						sx={{
							backgroundColor: "#E9ECEF",
							height: "36px",
						}}
					/>

					<SelectField
						value={locationValue}
						onChange={(e) => {
							setLocationValue(e.target.value);
						}}
						data={locations}
					/>

					<Divider
						orientation="vertical"
						variant="middle"
						sx={{
							backgroundColor: "#E9ECEF",
							height: "36px",
						}}
					/>

					<SelectField
						value={jobTypeValue}
						onChange={(e) => {
							setJobTypeValue(e.target.value);
						}}
						data={jobTypes}
					/>

					<ActionButton label="Search" icon={<SearchIcon color="#FFFFFF" />} />
				</Box>
			</Paper>
		</Box>
	);
}
