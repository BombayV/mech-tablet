import { withTranslation } from "react-i18next";
import {StyledBadge} from "../../components/Sidebar/components/StyledBadge";

const Invoices = ({t}: {
  t: (key: string) => string;
}) => {

  return (
    <div className={`w-full flex relative`}>
      <div className={`relative flex justify-between items-center w-full gap-x-20`}>
        <h1 className={`text-5xl font-bold`}>{t('HOME_APP.TITLE')}</h1>
        <p className={`font-medium text-neutral-400 text-lg text-left`}>Welcome to your personal tablet. Here you will find all the tools required for this job. Here you will find the latest alerts and notes left by other mechanics.</p>
      </div>
      <div className={``}>

      </div>
    </div>
  );
};

export default withTranslation()(Invoices);
