# ab-product-card

This is just a npm deploy example

## Andres Betancourt

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ab-product-card'
```

```
<ProductCard
    product={product}
    initialValue={{
      count: 4,
      maxCount: 10
    }}
  >

    {
      ({ reset, maxCount, isMaxCountReached, count, increaseBy }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )
    }
</ProductCard>
```
