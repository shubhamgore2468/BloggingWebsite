const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex flex-col items-center">
        <div className="max-w-lg text-3xl font-bold">
          "The customer support I recieved was exceptional. The suppport team
          went above and beyond to address my concerns"
        </div>
        <div className="max-w-md text-xl font-semibold">Jules Winnfield</div>
        <div className="max-w-md text-sm font-light text-slate-400">
          CEO | Acme corp
        </div>
      </div>
    </div>
  );
};

export default Quote;
