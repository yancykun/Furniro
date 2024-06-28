const OrderedProductsLoading = () => {
  return (
    <div className="w-full sm:w-[300px]">
      <div className="flex items-center gap-4">
        <div className="mb-4 h-[100px] w-[140px] animate-pulse rounded-xl bg-color-6/30"></div>
        <div className="grid">
          <div className="mb-4 h-[1.5rem] w-[100px] animate-pulse rounded-xl bg-color-6/30"></div>
          <div className="mb-4 h-[1.5rem] w-[100px] animate-pulse rounded-xl bg-color-6/30"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderedProductsLoading;
