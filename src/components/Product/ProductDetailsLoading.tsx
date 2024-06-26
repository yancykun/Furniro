const ProductDetailsLoading = () => {
  return (
    <div className="flex w-full flex-col items-center md:items-start">
      <div className="grid gap-4">
        <div className="h-10 w-[200px] animate-pulse rounded-full bg-color-6/50"></div>
        <div className="h-8 w-[100px] animate-pulse rounded-full bg-color-6/50"></div>
        <div className="flex gap-4">
          <div className="h-6 w-[120px] animate-pulse rounded-full bg-color-6/50"></div>
          <div className="h-6 w-[60px] animate-pulse rounded-full bg-color-6/50"></div>
        </div>
        <div className="h-[150px] w-[400px] animate-pulse rounded-[2rem] bg-color-6/50"></div>
        <div className="flex gap-4">
          <div className="h-10 w-[100px] animate-pulse rounded-[1rem] bg-color-6/50"></div>
          <div className="h-10 w-[180px] animate-pulse rounded-[1rem] bg-color-6/50"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsLoading;
