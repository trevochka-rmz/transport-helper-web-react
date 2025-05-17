import ServiceBlock from './ServiceBlock.jsx';
import services from '../data/services.js';
import Modal from 'react-modal';
import { useState } from 'react';
import ServiceModal from '../modals/ServiceModal.jsx';
import { _basketService } from '../data/basketServices.js';
import { _orders } from '../data/orders.js';
import { notifySuccess, notifyError } from '../utils/notification.js';
function ServiceList({ user, setUser, isRegistr }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [indexService, setindexService] = useState(0);
    const addToLib = () => {
        if (
            _basketService.find(
                (service) => service.name === services[indexService].name
            )
        ) {
            notifyError(`Такую услугу Вы уже заказали`);
        } else if (user.balance >= services[indexService].price) {
            _basketService.push({
                number_passenger: user.number_passenger,
                type: 'Услуга',
                name: services[indexService].name,
                price: services[indexService].price,
                count: 1,
            });
            _orders.push({
                number_passenger: user.number_passenger,
                name: services[indexService].name,
                type: 'Услуга',
                price: services[indexService].price,
                count: 1,
            });
            const updatedUser = {
                ...user,
                balance: user.balance - services[indexService].price,
            };

            setUser(updatedUser);

            notifySuccess(
                `${services[indexService].service} был куплен, осталось ${updatedUser.balance}`
            );
        } else {
            notifyError(
                `На вашем балансе недостаточно средств, ваш баланс ${user.balance}`
            );
        }
    };
    return (
        <div className="divgame">
            <ol className="olgame">
                {services.map((i) => (
                    <ServiceBlock
                        key={`${i.name}-${Date.now()}`}
                        service={i}
                        onClick={() => {
                            setIsOpenModal(true);
                            setindexService(services.indexOf(i));
                        }}
                    ></ServiceBlock>
                ))}
            </ol>
            <Modal
                isOpen={isOpenModal}
                onRequestClose={() => setIsOpenModal(false)}
                ariaHideApp={false}
            >
                <ServiceModal
                    isRegistr={isRegistr}
                    service={services[indexService]}
                    onClose={() => setIsOpenModal(false)}
                    onClick={() => {
                        addToLib();
                    }}
                />
            </Modal>
        </div>
    );
}
export default ServiceList;
