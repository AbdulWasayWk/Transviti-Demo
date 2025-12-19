import { FormControl, InputLabel, MenuItem, Select, type BaseSelectProps } from "@mui/material";
import type { SelectFieldDataType } from "../types";

interface SelectFieldProps<Value = unknown> extends BaseSelectProps<Value> {
	data: Array<SelectFieldDataType>;
}

export default function SelectField<Value = unknown>({ value, onChange, data }: SelectFieldProps<Value>) {
	return (
		<FormControl sx={{ flex: "0 1 200px", minWidth: 180 }}>
			{!value && (
				<InputLabel
					shrink={false}
					sx={{
						color: "#585D6E",
						"&.Mui-focused": {
							color: "#585D6E",
						},
					}}
				>
					Select Location
				</InputLabel>
			)}
			<Select
				label="Select Location"
				value={value}
				onChange={onChange}
				sx={{
					backgroundColor: "white",
					"& .MuiOutlinedInput-notchedOutline": {
						border: "none",
					},
					"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
						border: "none",
					},
					"&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
						border: "none",
					},
				}}
			>
				<MenuItem value="">All</MenuItem>
				{data.map((item) => (
					<MenuItem value={item.id} key={item.id}>
						{item.value}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
