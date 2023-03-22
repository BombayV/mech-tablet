import { withTranslation } from "react-i18next";

const Home = ({t}: {
  t: (key: string) => string;
}) => {

  return (
    <div className={`w-full h-full flex`}>
      <h1 className={`text-4xl font-bold`}>{t('HOME_APP.TITLE')}</h1>
      <p>Welcome to your personal tablet</p>
    </div>
  );
};

export default withTranslation()(Home);
