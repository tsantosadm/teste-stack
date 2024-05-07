import { create } from 'zustand';
import { CartState } from './interfaces';

const useShoppingCartStore = create<CartState>((set) => ({
    allProductos: [],
}))

export default useShoppingCartStore;