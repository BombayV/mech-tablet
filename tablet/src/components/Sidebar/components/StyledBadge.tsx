import StringToAvatar from "../utils/StringToAvatar";

export const StyledBadge = ({
  ...props
} : {
  name: string;
  state: boolean;
  img?: string;
}) => {
  const data = StringToAvatar(props.name);
  return (
    <div style={
      {
        backgroundColor: data.bgcolor,
        backgroundImage: props.img ? `url(${props.img})` : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    } className={`h-10 w-10 ${data.bgcolor} rounded-full grid place-items-center`}>
      {
        props.img ? '' : <p className={'text-white font-bold'}>{data.name}</p>
      }
    </div>
  )
}