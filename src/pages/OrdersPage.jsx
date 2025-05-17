import OrderLibList from '../components/OrderLibList';
import './Orders.css';
function OrdersPage() {
    return (
        <div className="orders-page">
            <h1>Заказы</h1>
            <OrderLibList></OrderLibList>
        </div>
    );
}
export default OrdersPage;
