import { props } from './types/props';
import { Slide } from '@mui/material';

const TabletWrapper = ({ children }: props) => {
  return (
    <Slide direction="up" timeout={{ enter: 500, exit: 500 }} in={true}>
      <div className="Tablet">
        <div className="TabletContainer">
          {children}
        </div>
      </div>
    </Slide>
  )
}

export default TabletWrapper;