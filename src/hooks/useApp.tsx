import { Product } from "@/models/Product";
import React, { createContext, useContext, useState } from "react";

interface IAppContext {
  products: Product[];
  cartItems: Product[];
  cartIsVisible: boolean;
  loading: boolean;
  setProducts: (products: Product[]) => void;
  setCartItems: (items: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setCartIsVisible: (isVisible: boolean) => void;
}

const AppContext = createContext({} as IAppContext);

interface IAppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cartIsVisible, setCartIsVisible] = useState(false);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        cartIsVisible,
        setCartIsVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function useApp(): IAppContext {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
}

export { AppProvider, useApp };
