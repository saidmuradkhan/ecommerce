import { Link } from 'react-router-dom';
import { BoltIcon } from '../ui/Icons';

export default function Logo({ inverted = false, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-lg"
      aria-label="Zenvolt home"
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
        <BoltIcon className="size-5" strokeWidth={2.2} />
      </span>
      <span
        className={`text-xl font-extrabold tracking-tight ${inverted ? 'text-white' : 'text-slate-900'}`}
      >
        Zen<span className={inverted ? 'text-blue-400' : 'text-blue-600'}>volt</span>
      </span>
    </Link>
  );
}
