import { Box } from "@mui/material";
import CategoryChip from "./CategoryChip";

const similarTags = ["Frontend", "Backend", "Graphic Designer"];

export default function SimilarCategories() {
	return (
		<Box sx={{ marginTop: 3, display: "flex", alignItems: "center", gap: 1.5 }}>
			<Box sx={{ fontWeight: 500, color: "#737A91", fontSize: "14px" }}>Similar:</Box>
			<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
				{similarTags.map((tag) => (
					<CategoryChip key={tag} label={tag} />
				))}
			</Box>
		</Box>
	);
}
