import MenuItems from "./MenuItems";

const MenuAccordion = ({ data, showItems, setShowIndex }) => {
  const toggleAccordion = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="w-6/12 text-white my-4 mx-auto p-4  shadow-lg bg-[#161618] rounded-md
    text-normal font-normal cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center justify-between">
          <span className="font-bold">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>{showItems ? "⌃" : "⌄"}</span>
        </div>
        {showItems && <MenuItems items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default MenuAccordion;
