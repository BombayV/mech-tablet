import { withTranslation } from 'react-i18next';

const Map = ({ t }: { t: (key: string) => string }) => {
  return (
    <div className={`w-full flex relative`}>
      <div className={`relative flex justify-between items-center w-full gap-x-20`}>
        <div className={`flex flex-col items-start gap-y-1.5`}>
          <h1 className={`text-5xl font-bold`}>Virtual Map</h1>
          <p
            className={`font-medium text-neutral-400 text-lg text-left`}
          >{`Find where current alerts are located in the map by placing markers and recording the location.`}</p>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Map);
