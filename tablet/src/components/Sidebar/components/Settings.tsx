import { Link } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const Settings = () => {
	return (
		<Tooltip sx={[
			{ fontWeight: 'bold' },
		]} title="Open settings" placement="top" arrow>
			<Link to="/settings">
				<IconButton sx={[
					{ color: 'var(--color-4)', transition: 'all 0.3s ease-in-out', mr: 0.5 },
					() => ({
						'&:hover': {
							color: 'var(--color-1)',
						},
					}),
				]}>
					<SettingsIcon/>
				</IconButton>
			</Link>
		</Tooltip>
	)
}

export default Settings