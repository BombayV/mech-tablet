import { withTranslation } from 'react-i18next';

const Stats = ({ t }: { t: (key: string) => string }) => {
  return (
    <div className={`w-full flex relative`}>
      <div className={`relative flex justify-between items-center w-full gap-x-20`}>
        <div className={`flex flex-col items-start gap-y-1.5`}>
          <h1 className={`text-5xl font-bold`}>Vehicle Stats</h1>
          <p className={`font-medium text-neutral-400 text-lg text-left`}>{`Inspect the current vehicle and verify it's current state, the overall stats, and any extra information available of the vehicle.`}</p>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Stats);
