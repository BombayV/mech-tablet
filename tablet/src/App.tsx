import './App.css'
import './Tablet.css'
import TabletWrapper from './TabletWrapper'
import StyledBadge from './components/StyledBadge'
import ThemeOverride from './ThemeOverride'
import { useState, Fragment } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, Tooltip, Popover, Button } from '@mui/material';

function App() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handlePopClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handlePopClose = () => {
    setAnchorEl(null);
  }
  return (
    <div>
      <ThemeOverride>
        <TabletWrapper>
          <div className="TabletSDContainer">
            <div>

            </div>
            <div className="TabletSDBottom">
              <div onClick={handlePopClick} className="SDAvatarContainer">
                <StyledBadge
                  active={true}
                  name = "Mauricio Rivera"
                  avatar = "/static/images/avatar/1.jpg"
                />
                <div className="AvatarName">
                  <span>Mauricio Rivera</span>
                  <span>Boss</span>
                </div>
              </div>
              <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handlePopClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                sx={[
                  {
                    transform: 'translateY(-15px)'
                  }
                ]}
              >
                <div className="AvatarPop">
                  <button>
                    <span className="AvatarCircle"></span>
                    <span>Available</span>
                  </button>
                  <button>
                    <span style={
                      {
                        backgroundColor: '#d53939',
                      }
                    } className="AvatarCircle"></span>
                    <span>Do not disrupt</span>
                  </button>
                </div>
              </Popover>
              <Tooltip sx={[
                { fontWeight: 'bold' },
              ]} title="Open settings" placement="top" arrow>
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
              </Tooltip>
            </div>
          </div>
        </TabletWrapper>
      </ThemeOverride>
    </div>
  )
}

export default App