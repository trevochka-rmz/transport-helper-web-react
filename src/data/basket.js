export let _basket = [];

export const basket = () => [..._basket];

export const removeFromBasket = (productName) => {
    _basket = _basket.filter((item) => item.name !== productName);
    return basket();
};

export const clearBasket = () => {
    _basket = [];
};
