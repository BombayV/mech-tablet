import {Avatar, Badge, styled} from '@mui/material';

const StyledBadge = ({ ...props }) => {
  const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      backgroundColor: props.active ? '#38dc6a' : '#d53939',
      color:  props.active ? 'green' : 'red',
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        content: '""',
      },
    },
  }));

  const stringToColor = (string: string) => {
    let hash: number = 0;
    let i: number;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color: string = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  const stringToAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 40,
        height: 40,
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar {...stringToAvatar(props.name )} alt={props.name}/>
    </StyledBadge>
  );
}

export default StyledBadge;