import { HeadsetIcon, ReturnIcon, ShieldIcon, TruckIcon } from '../ui/Icons';

const features = [
  { icon: TruckIcon, title: 'Free delivery in Baku', text: 'On all orders over 200 ₼' },
  { icon: ShieldIcon, title: 'Official warranty', text: '12 months on every product' },
  { icon: ReturnIcon, title: 'Easy returns', text: '14 days, no questions asked' },
  { icon: HeadsetIcon, title: 'Friendly support', text: 'Every day, 09:00 to 21:00' },
];

export default function Features() {
  return (
    <section aria-label="Why shop with us" className="border-b border-slate-200 bg-white">
      <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {features.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Icon className="size-6" />
            </span>
            <div>
              <p className="font-semibold text-slate-900">{title}</p>
              <p className="text-sm text-slate-600">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
