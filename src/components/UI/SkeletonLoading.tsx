const SkeletonLoading = () => {
  return (
    <div className="relative grid">
      <div className="mb-4 h-[300px] w-[292px] animate-pulse rounded-xl bg-color-6/30"></div>
      <div className="mx-3 mb-2 flex items-end justify-end gap-6">
        <div className="h-5 w-[100px] animate-pulse rounded-full bg-color-6/50"></div>
        <div className="h-5 w-[40px] animate-pulse rounded-full bg-color-6/50"></div>
      </div>
      <div className="mx-3 mb-2 flex items-center justify-between">
        <div className="h-5 w-[150px] animate-pulse rounded-full bg-color-6/50"></div>
        <div className="h-6 w-[60px] animate-pulse rounded-full bg-color-6/50"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
