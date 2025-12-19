import TeamsImage from "../assets/teams.png";

interface TeamsIconProps {
	width: number;
	height: number;
}

export default function TeamsIcon({ width, height }: TeamsIconProps) {
	return <img width={width} height={height} src={TeamsImage}></img>;
}
