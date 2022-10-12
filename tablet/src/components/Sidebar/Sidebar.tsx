import './styles/Sidebar.css'
import {SetStateAction, useState} from "react";
import {APPS} from "../../os/apps/Apps";
import {Link} from "react-router-dom";
import StyledBadge from "./components/StyledBadge";
import {IconButton, Popover, Tooltip} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

	const test = false
	const handlePopClick = (e: { currentTarget: SetStateAction<HTMLElement | null> }) => {
		setAnchorEl(e.currentTarget);
	}

	const handlePopClose = (state: boolean) => {
		setAnchorEl(null);
		console.log(state)
	}

	return (
		<div style={
			sidebarOpen ? {
				width: '16rem',
			} : {
				width: '4rem',
			}
		} className="TabletSDContainer">
			<button className="SDClose" type="button">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"/>
				</svg>
			</button>
			<div>
				{
					sidebarOpen ?
						<div className="TabletTPContainer">
							{
								test ? <img src="https://vignette.wikia.nocookie.net/de.gta/images/9/9c/LS_Customs%2C_Logo_V.png/revision/latest?cb=20150428144957" alt="Logo"/> : <h1>MDT</h1>
							}
						</div>
						: null
				}
				<div>
					<div className="TabletAppsContainer">
						{
							APPS.map((app) => {
								return (
									<Link style={
										sidebarOpen ? {
											justifyContent: 'flex-start',
 										}: {
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											width: '100%',
											padding: '0',
										}
									} className="AppLink" to={app.path} id={app.id} key={app.id}>
										{app.icon()}
										{sidebarOpen && app.title}
									</Link>
								)
							})
						}
					</div>
				</div>
			</div>
			<div style={
				sidebarOpen ? {
					justifyContent: 'space-between'
				} : {
					justifyContent: 'center',
				}
			} className="TabletSDBottom">
				{
					sidebarOpen ?
						<>
							<div onClick={handlePopClick} className="SDAvatarContainer">
								<StyledBadge
									active={true}
									name="Mauricio Rivera"
									avatar="/static/images/avatar/1.jpg"/>
								<div className="AvatarName">
									<span>Mauricio Rivera</span>
									<span>Boss</span>
								</div>
							</div>
							<Popover
								open={Boolean(anchorEl)}
								anchorEl={anchorEl}
								onClose={handlePopClose}
								anchorOrigin={{vertical: 'top', horizontal: 'left',}}
								transformOrigin={{vertical: 'bottom', horizontal: 'left',}}
								sx={[{transform: 'translateY(-15px)'}]}
							>
								<div className="AvatarPop">
									<button type="button" onClick={() => handlePopClose(true)}>
										<span className="AvatarCircle"></span>
										<span>Available</span>
									</button>
									<button type="button" onClick={() => handlePopClose(false)}>
                    <span style={{backgroundColor: '#d53939',}} className="AvatarCircle"></span>
										<span>Do not disrupt</span>
									</button>
								</div>
							</Popover>
						</>
						:
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
				}
			</div>
		</div>
	);
}

export default Sidebar;