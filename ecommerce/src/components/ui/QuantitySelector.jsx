import { MinusIcon, PlusIcon } from './Icons';

export default function QuantitySelector({ value, max, onChange, label = 'Quantity', size = 'md' }) {
  const buttonSize = size === 'sm' ? 'size-8' : 'size-11';

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-xl border border-slate-300 bg-white"
    >
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        aria-label="Decrease quantity"
        className={`${buttonSize} flex items-center justify-center rounded-l-xl text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300 disabled:hover:bg-transparent`}
      >
        <MinusIcon className="size-4" />
      </button>
      <span className="min-w-8 text-center text-sm font-semibold tabular-nums" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label="Increase quantity"
        className={`${buttonSize} flex items-center justify-center rounded-r-xl text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300 disabled:hover:bg-transparent`}
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
}
