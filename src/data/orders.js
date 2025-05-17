export let _orders = [];

export const orders = () => [..._orders];

export const removeFromOrder = (orderName) => {
    _orders = _orders.filter((item) => item.name !== orderName);
    return orders();
};
