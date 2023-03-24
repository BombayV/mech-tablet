import { withTranslation } from 'react-i18next';

const Modifier = ({ t }: { t: (key: string) => string }) => {
  return (
    <div className={`w-full flex relative`}>
      <div className={`relative flex justify-between items-center w-full gap-x-20`}>
        <div className={`flex flex-col items-start gap-y-1.5`}>
          <h1 className={`text-5xl font-bold`}>Vehicle Modifier</h1>
          <p className={`font-medium text-neutral-400 text-lg text-left`}>{`Move the vehicle to be modified, install the parts, change the color, and more customization is available in this section.`}</p>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Modifier);
