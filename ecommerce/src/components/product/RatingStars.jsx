import { StarIcon } from '../ui/Icons';

export default function RatingStars({ rating, reviews, size = 'size-4' }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex" role="img" aria-label={`Rated ${rating} out of 5`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            className={`${size} ${star <= Math.round(rating) ? 'text-amber-400' : 'text-slate-200'}`}
          />
        ))}
      </div>
      <span className="text-sm text-slate-600">
        {rating.toFixed(1)}
        {reviews !== undefined && <span className="text-slate-500"> ({reviews})</span>}
      </span>
    </div>
  );
}
