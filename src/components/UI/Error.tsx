const Error = ({ message }: { message: string }) => {
  return (
    <div className="text-center text-red-500">
      <h2 className="mb-2 text-xl font-bold">Error</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
