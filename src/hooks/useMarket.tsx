import apiClient from "../services/api-client";
import { useQuery} from "@tanstack/react-query";

interface Coin {
  id: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}
const useMarket = (pageParam: number) =>
  useQuery<Coin[]>({
    queryKey: ["coins", pageParam],
    queryFn: () =>
      apiClient
        .get<Coin[]>("/coins/markets", {
          params: {
            vs_currency: "usd",
            per_page: 10,
            page: pageParam,
          },
        })
        .then((res) => res.data),

    keepPreviousData: true,
  });

export default useMarket;
