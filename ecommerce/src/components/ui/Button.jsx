import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50';

const variants = {
  primary: 'bg-blue-600 text-white shadow-sm hover:bg-blue-700 active:bg-blue-800',
  secondary: 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50',
  ghost: 'text-slate-700 hover:bg-slate-100',
  light: 'bg-white text-blue-700 shadow-sm hover:bg-blue-50',
  glass: 'bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20',
};

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

export default function Button({
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
