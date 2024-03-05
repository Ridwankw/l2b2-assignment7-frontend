import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./http";

interface EventItem {
  _id: string;
  image: string;
  imageTitle: string;
}

export const useGetEventItems = () => {
  const eventItemsData = useQuery({
    queryKey: ["eventItems"],
    queryFn: fetchData,
    select: (data) => {
      const eventItems = data.data.map((item: EventItem) => ({
        id: item._id,
        image: item.image,
        imageTitle: item.imageTitle,
      }));

      return eventItems;
    },
  });
  return eventItemsData;
};
