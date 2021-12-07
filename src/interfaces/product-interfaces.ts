


export interface Product {
    id?: string;
    title?: string;
    img?: string;
};
export interface ProductContextProps {
    increaseBy: (value: number) => void;
    counter: number;
    product: Product;
    maxCount?: number;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count?: number
};

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}
