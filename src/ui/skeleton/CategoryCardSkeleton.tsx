function CategoryCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Thumbnail Skeleton */}
      <div className="h-32 w-full animate-pulse bg-gray-200" />

      {/* Content Skeleton */}
      <div className="space-y-3 p-4 text-center">
        {/* Title */}
        <div className="mx-auto h-5 w-24 animate-pulse rounded bg-gray-200" />
        {/* Description */}
        <div className="mx-auto h-4 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="mx-auto h-4 w-2/3 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
}

export default CategoryCardSkeleton;
