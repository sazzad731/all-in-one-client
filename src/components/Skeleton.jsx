const Skeleton = ({size}) => {
  let dataLength = size;
  return (
    <>
      {
        dataLength.map((num)=>{
          return (
            <div key={num} className="flex w-full sm:w-96 flex-col gap-4">
              <div className="skeleton h-60 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          );
        })
      }
    </>
  );
};

export default Skeleton;