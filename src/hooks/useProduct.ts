import { useEffect, useRef, useState } from "react";
import {
  InitialValueProps,
  onChangeArgs,
  Product,
} from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValue?: InitialValueProps;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValue,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValue?.count || value);
  const maxCount = initialValue?.maxCount;

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValue?.maxCount) {
      newValue = Math.min(newValue, initialValue.maxCount);
    }
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValue?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);
  return {
    counter,
    isMaxCountReached:
      !!initialValue?.count && initialValue.maxCount === counter,
    maxCount,

    increaseBy,
    reset,
  };
};
