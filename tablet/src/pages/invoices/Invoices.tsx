import { withTranslation } from 'react-i18next';

const Invoices = ({ t }: { t: (key: string) => string }) => {
  return (
    <div className={`w-full flex relative`}>
      <div className={`relative flex justify-between items-center w-full gap-x-20`}>
        <div className={`flex flex-col items-start gap-y-1.5`}>
          <h1 className={`text-5xl font-bold`}>Invoices</h1>
          <p
            className={`font-medium text-neutral-400 text-lg text-left`}
          >{`Check any reports left behind by you or any other mechanics. This includes notes left by clients, missing payments, and more. Use the default filters or create your own to find the right report.`}</p>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Invoices);
