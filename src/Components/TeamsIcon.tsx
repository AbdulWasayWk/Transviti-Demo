interface TeamsIconProps {
	width: number;
	height: number;
}

export default function TeamsIcon({ width, height }: TeamsIconProps) {
	return <img width={width} height={height} src="/src/assets/teams.png"></img>;
}
