import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "./SearchIcon";
import { useState } from "react";

export default function SearchField() {
	const [value, setValue] = useState("");
	return (
		<TextField
			size="small"
			label="Search"
			variant="outlined"
			value={value}
			onChange={(e) => {
				setValue(e.target.value);
			}}
			sx={{
				"& .MuiOutlinedInput-root": {
					"& fieldset": { border: "none" },
					"&:hover fieldset": { border: "none" },
					"&.Mui-focused fieldset": { border: "none" },
					borderRadius: "8px",
					backgroundColor: "#F6F9FF",
					padding: "0 12px",
				},
				"& .MuiInputLabel-root": {
					color: "#737A91",
				},
				"& .MuiInputLabel-root.Mui-focused": {
					color: "#737A91",
				},
				width: "261px",
			}}
			slotProps={{
				inputLabel: !value
					? {
							shrink: true,
							style: {
								transform: "translate(40px, 9px) scale(1)",
							},
					  }
					: {},
				input: {
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				},
			}}
		/>
	);
}
