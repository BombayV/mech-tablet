import { withTranslation } from 'react-i18next';

const Alerts = ({ t }: { t: (key: string) => string }) => {
  return (
    <div className={`w-full flex relative`}>
      <div className={`relative flex justify-between items-center w-full gap-x-20`}>
        <div className={`flex flex-col items-start gap-y-1.5`}>
          <h1 className={`text-5xl font-bold`}>Alerts</h1>
          <p
            className={`font-medium text-neutral-400 text-lg text-left`}
          >
            <span>Find any active alerts and past reports created by you or other mechanics. Create new reports by using </span>
            <span className={`font-bold text-neutral-300`}>{`/alert <name> <description>`}</span>
            <span>, it will record the location and time by default.</span>
          </p>
        </div>
      </div>
      <div className={``}></div>
    </div>
  );
};

export default withTranslation()(Alerts);
