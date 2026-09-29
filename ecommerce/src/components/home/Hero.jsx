import ProductImage from '../product/ProductImage';
import Button from '../ui/Button';
import { ArrowRightIcon } from '../ui/Icons';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-blue-800 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-blue-100 ring-1 ring-white/20">
            New season · up to 13% off selected gear
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Tech that keeps up with you.
          </h1>
          <p className="max-w-xl text-lg text-blue-100">
            Headphones, laptops, wearables and gaming gear from the brands you trust, delivered
            across Baku with an official warranty.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/#shop" variant="light" size="lg">
              Shop now
              <ArrowRightIcon className="size-5" />
            </Button>
            <Button to="/?sale=1#shop" variant="glass" size="lg">
              Browse deals
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-4xl bg-blue-500/30 blur-3xl" aria-hidden="true" />
          <ProductImage
            src={HERO_IMAGE}
            alt="A modern desk setup with a monitor, keyboard and headphones"
            loading="eager"
            className="relative aspect-4/3 w-full rounded-3xl shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}
