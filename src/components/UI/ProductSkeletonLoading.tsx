import ProductSkeleton from "./ProductSkeleton";

const ProductSkeletonLoading = () => {
  return (
    <>
      <div className="mx-auto mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </>
  );
};

export default ProductSkeletonLoading;
