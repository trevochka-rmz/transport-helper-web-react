export let _basketService = [];

export const basketServices = () => [..._basketService];

export const removeFromServices = (serviceName) => {
    _basketService = _basketService.filter((item) => item.name !== serviceName);
    return basketServices();
};
