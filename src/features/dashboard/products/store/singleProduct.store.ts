import { Product } from "../types";
import { create } from "zustand";

type SingleProductState = {
    product: Product | null;

    // derived
    discountedPrice: number;

    // actions
    initialize: (product: Product) => void;
    updateField: (name: keyof Product, value: string | number) => void;
    reset: () => void;
}





export const useSingleProductStore = create<SingleProductState>((set,get) => ({
    product: null,
    discountedPrice: 0,

    initialize: (product) => {
        const discountedPrice =
            product.price -
            (product.price * product.discountPercentage) / 100;

        set({
            product,
            discountedPrice,
    });
    },

    updateField: (name, value) => {
        const current = get().product;
        if (!current) return;

        const updated = {
        ...current,
            [name]:
            name === "price" ||
            name === "discountPercentage" ||
            name === "stock"
            ? Number(value)
            : value,
        };

        const discountedPrice =
            updated.price -
            (updated.price * updated.discountPercentage) / 100;

        set({
            product: updated,
            discountedPrice,
        });
    },
    reset: () =>
        set({
            product: null,
            discountedPrice: 0,
        }),
}))