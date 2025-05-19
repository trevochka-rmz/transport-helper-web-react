import ProductBlock from './ProductBlock.jsx';
import products from '../data/products.js';
import './ProductList.css';
import Modal from 'react-modal';
import { useState } from 'react';
import ProductModal from '../modals/ProductModal.jsx';
import { _basket } from '../data/basket.js';
import { _orders } from '../data/orders.js';
import { notifySuccess, notifyError } from '../utils/notification.js';
function ProductList({ user, setUser, isRegistr }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [indexProduct, setindexProduct] = useState(0);

    const addToLib = () => {
        if (
            _basket.find(
                (product) => product.name === products[indexProduct].name
            )
        ) {
            _basket[indexProduct].count += 1;
            _orders[indexProduct].count += 1;
            notifySuccess(
                `${products[indexProduct].name} был куплен, осталось ${updatedUser.balance}`
            );
        } else if (user.balance >= products[indexProduct].price) {
            _basket.push({
                number_passenger: user.number_passenger,
                name: products[indexProduct].name,
                images_path: products[indexProduct].images_path,
                type: 'Товар',
                price: products[indexProduct].price,
                count: 1,
            });
            _orders.push({
                number_passenger: user.number_passenger,
                name: products[indexProduct].name,
                images_path: products[indexProduct].images_path,
                type: 'Товар',
                price: products[indexProduct].price,
                count: 1,
            });

            const updatedUser = {
                ...user,
                balance: user.balance - products[indexProduct].price,
            };

            setUser(updatedUser);

            notifySuccess(
                `${products[indexProduct].name} был куплен, осталось ${updatedUser.balance}`
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
                {products.map((i) => (
                    <ProductBlock
                        key={`${i.name}-${Date.now()}`}
                        product={i}
                        onClick={() => {
                            setIsOpenModal(true);
                            setindexProduct(products.indexOf(i));
                        }}
                    ></ProductBlock>
                ))}
            </ol>
            <Modal
                isOpen={isOpenModal}
                onRequestClose={() => setIsOpenModal(false)}
                ariaHideApp={false}
            >
                <ProductModal
                    isRegistr={isRegistr}
                    product={products[indexProduct]}
                    onClose={() => setIsOpenModal(false)}
                    onClick={() => {
                        addToLib();
                    }}
                />
            </Modal>
        </div>
    );
}
export default ProductList;
