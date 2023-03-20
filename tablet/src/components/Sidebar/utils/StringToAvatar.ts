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
  const onlyOneName = name.split(' ').length === 1;

  return {
    bgcolor: stringToColor(name),
    name: onlyOneName ? name[0] : name.split(' ').map((n) => n[0]).join(''),
  };
}

export default stringToAvatar;