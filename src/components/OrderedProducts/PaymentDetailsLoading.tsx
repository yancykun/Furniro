const PaymentDetailsLoading = () => {
  return (
    <div className="w-full sm:w-[300px]">
      <div className="grid gap-2">
        {[...Array(3)].map((_, index) => (
          <div className="flex justify-between" key={index}>
            <div className="h-[1.5rem] w-[120px] animate-pulse rounded-full bg-color-6/50"></div>
            <div className="h-[1.5rem] w-[80px] animate-pulse rounded-full bg-color-6/50"></div>
          </div>
        ))}
        <div className="mt-6 flex justify-between border-t border-color-6/40 pt-6">
          <div className="h-[1.75rem] w-[80px] animate-pulse rounded-full bg-color-6/50"></div>
          <div className="h-[1.75rem] w-[80px] animate-pulse rounded-full bg-color-6/50"></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsLoading;
