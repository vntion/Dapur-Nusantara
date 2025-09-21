function MealCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Thumbnail Skeleton */}
      <div className="relative h-48 w-full animate-pulse bg-gray-200" />

      <div className="flex flex-grow flex-col p-6">
        <div className="flex-grow space-y-3">
          {/* Title Skeleton */}
          <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />
          <div className="h-6 w-2/5 animate-pulse rounded bg-gray-200" />

          {/* Info Skeleton */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Footer Skeleton */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200" />
          <div className="h-5 w-12 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default MealCardSkeleton;
