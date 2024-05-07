import { QueryClient, QueryClientProvider } from "react-query";
import ShoppingProducts from "../components/shoppingCartComponent";

const Home = () => {  
  return (
    <QueryClientProvider client={new QueryClient}>
      <ShoppingProducts />
    </QueryClientProvider>
  )
}
export default Home;
