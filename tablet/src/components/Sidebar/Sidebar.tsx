import './styles/Sidebar.css'
import { Link } from "react-router-dom";
import { Popover } from '@mui/material';
import { APPS } from "../../os/apps/Apps";
import StyledBadge from "./components/StyledBadge";
import Settings from "./components/Settings";
import useSidebar from "./hooks/useSidebar";
import useAnchor from "./hooks/useAnchor";

const Sidebar = () => {
	const { sidebarState, toggleSidebar, arrow } = useSidebar();
	const { anchorState, anchorEl, handleMenu, handleClose } = useAnchor();
	const test = false

	return (
		<div style={ sidebarState ? { width: '16rem' } : { width: '4rem' }} className="TabletSDContainer">
			<button onClick={toggleSidebar} className="SDClose" type="button">
				{arrow}
			</button>
			<div>
				{ sidebarState ?
					<div className="TabletTPContainer">
						{ test ? <img src="https://vignette.wikia.nocookie.net/de.gta/images/9/9c/LS_Customs%2C_Logo_V.png/revision/latest?cb=20150428144957" alt="Logo"/> : <h1>MDT</h1>}
					</div> : null
				}
				<div>
					<div className="TabletAppsContainer">
						{ APPS.map((app) => {
							return (
								<Link style={
									sidebarState ? {
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
									{sidebarState && app.title}
								</Link>
							)
						})}
					</div>
				</div>
			</div>
			<div style={
				sidebarState ? { justifyContent: 'space-between' } : { justifyContent: 'center' }
			} className="TabletSDBottom">
				{ sidebarState ?
					<>
						<div onClick={handleMenu} className="SDAvatarContainer">
							<StyledBadge
								active={anchorState} // TBD
								name="Mauricio Rivera"
								avatar="/static/images/avatar/1.jpg"/>
							<div className="AvatarName">
								<span>Mauricio Rivera</span>
								<span>Boss</span>
							</div>
						</div>
						<Popover
							open={anchorState}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{vertical: 'top', horizontal: 'left',}}
							transformOrigin={{vertical: 'bottom', horizontal: 'left',}}
							sx={[{transform: 'translateY(-15px)'}]}
						>
							<div className="AvatarPop">
								<button type="button" onClick={() => handleClose(true)}>
									<span className="AvatarCircle"></span>
									<span>Available</span>
								</button>
								<button type="button" onClick={() => handleClose(false)}>
                  <span style={{backgroundColor: '#d53939',}} className="AvatarCircle"></span>
									<span>Do not disrupt</span>
								</button>
							</div>
						</Popover>
						<Settings/>
					</> :
					<Settings/>
				}
			</div>
		</div>
	);
}

export default Sidebar;