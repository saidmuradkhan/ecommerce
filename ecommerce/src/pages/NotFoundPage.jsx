import Button from '../components/ui/Button';

export default function NotFoundPage({
  title = 'Page not found',
  message = "Sorry, we couldn't find the page you're looking for.",
}) {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <title>{`${title} · Zenvolt`}</title>
      <p className="text-6xl font-extrabold text-blue-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
      <p className="mt-3 text-slate-600">{message}</p>
      <Button to="/" size="lg" className="mt-8">
        Back to the shop
      </Button>
    </section>
  );
}
