import { useState } from 'react';
import { ImageIcon } from '../ui/Icons';

export default function ProductImage({ src, alt, className = '', loading = 'lazy' }) {
  const [failedSrc, setFailedSrc] = useState(null);

  if (!src || failedSrc === src) {
    return (
      <div
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
        className={`flex flex-col items-center justify-center gap-2 bg-slate-100 text-slate-400 ${className}`}
      >
        <ImageIcon className="size-10" />
        <span className="text-xs font-medium">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setFailedSrc(src)}
      className={`object-cover ${className}`}
    />
  );
}
