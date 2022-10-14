import { MouseEvent, useState } from 'react';

const useAnchor = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLDivElement>(null);
	const anchorState = Boolean(anchorEl);
	const handleMenu = (event: MouseEvent<HTMLDivElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (newState: boolean) => {
		setAnchorEl(null);
	};
	return { anchorEl, anchorState, handleMenu, handleClose };
}

export default useAnchor;