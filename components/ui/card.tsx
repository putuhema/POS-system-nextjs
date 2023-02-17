const Card = ({ id, name, itemsCount, table, status }: Card) => {
  return (
    <div className="w-96 flex rounded-md shadow-sm  p-4 gap-8 justify-between border">
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm text-neutral-400">
          {itemsCount} items . table {table}
        </p>
        <p className="rounded-xl mt-4 w-max px-2 bg-blue-500 text-white text-center">
          {status}
        </p>
      </div>
      <p className="text-neutral-400 text-sm">#{id}</p>
    </div>
  );
};

export default Card;
