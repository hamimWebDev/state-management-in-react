type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ControllerWithFunComponents = ({ count, setCount }: TProps) => {
  console.log("rerender");
  return (
    <div className="border border-red-500 p-10 m-10">
      <button
        className="bg-purple-800 h-10 w-10 rounded-md text-white text-lg font-semibold"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default ControllerWithFunComponents;
