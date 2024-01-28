import { Spiner } from '../spiner/spiner';

export function FormStatus() {
  return (
    <div className="errorWrap">
      <Spiner className="spinner" />
      <span className="error">Error</span>
    </div>
  );
}
