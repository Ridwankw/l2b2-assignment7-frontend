import { fetchData } from "@/utility/http";
import { useQuery } from "@tanstack/react-query";
import SupplyPostsCard from "./SupplyPostsCard";
import { Button } from "@/components/ui/button";
export type ItemType = {
  id: number;
  title: string;
  amount: string;
  image: string;
  category: string;
};

const SupplyPosts = () => {
  const { data } = useQuery({
    queryKey: ["supply"],
    queryFn: fetchData,
  });

  return (
    <div className="">
      <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 justify-between gap-4 rounded-md mb-6 ">
        {data &&
          data.map((item: ItemType, index: number) => (
            <SupplyPostsCard key={index} item={item} />
          ))}
      </div>

      <Button>View All Button</Button>
    </div>
  );
};

export default SupplyPosts;
