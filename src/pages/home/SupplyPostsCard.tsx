import { ItemType } from "./SupplyPosts";
interface SupplyPostsCardProps {
  item: ItemType;
}

const SupplyPostsCard: React.FC<SupplyPostsCardProps> = ({ item }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={item.image} alt="" className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.title}</div>
          <p className="text-gray-700 text-base mb-2">{item.category}</p>
          <p className="text-gray-700 text-base">${item.amount}</p>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplyPostsCard;
