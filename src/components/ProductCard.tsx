import React, { createContext } from "react";

import { useProduct } from "../hooks/useProduct";
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValueProps,
  productCardHandlers,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: productCardHandlers) => JSX.Element
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValue?: InitialValueProps;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValue
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValue });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValue?.maxCount,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  );
};
