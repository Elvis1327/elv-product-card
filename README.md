# 0-elv-product-card

This is just a package for test

### Elvis Garcia

## Examples

import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'elv-product-card';

```
<ProductCard 
    product={ product }
    initialValues={{
        count: 6,
        maxCount: 10
    }}
>
    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons  />
            </>
        )
    }
</ProductCard>
```


