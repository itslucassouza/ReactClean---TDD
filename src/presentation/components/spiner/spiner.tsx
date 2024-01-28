import './spiner-styles.scss';

type SpinerProps = React.HTMLAttributes<HTMLDivElement>;

export function Spiner(props: SpinerProps) {
  return (
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
