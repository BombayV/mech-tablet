import StringToAvatar from '../utils/StringToAvatar';

export const StyledBadge = ({ ...props }: { name: string; state: string; img?: string; style?: string }) => {
  const data = StringToAvatar(props.name);
  return (
    <div
      style={{
        backgroundColor: data.bgcolor,
        backgroundImage: props.img ? `url(${props.img})` : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`${props.style || 'h-10 w-10'} ${data.bgcolor} rounded-full grid place-items-center relative`}
    >
      {props.img ? '' : <p className={'text-white font-bold'}>{data.name}</p>}
      {
        !props.style ? <span className={`block w-2 h-2 bg-green-500 rounded-full bottom-0 absolute right-0 border border border-green-600 shadow`}></span> : ''
      }
    </div>
  );
};
