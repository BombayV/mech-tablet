import { withTranslation } from 'react-i18next';

const Messages = ({ t }: { t: (key: string) => string }) => {
  return (
    <div className={`w-full flex relative`}>
      <div className={`relative flex justify-between items-center w-full gap-x-20`}>
        <div className={`flex flex-col items-start gap-y-1.5`}>
          <h1 className={`text-5xl font-bold`}>Messages</h1>
          <p className={`font-medium text-neutral-400 text-lg text-left`}>{`Send a message to your fellow co-workers along with boss regarding personal issues, missing payments, or other issues regarding the shop.`}</p>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Messages);
