import './spiner-styles.scss';

type SpinerProps = React.HTMLAttributes<HTMLDivElement>;

export const Spiner = (props: SpinerProps) => {
  return (
    <div className={'lds-ring'}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
