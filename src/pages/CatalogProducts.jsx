import ProductList from '../components/ProductList.jsx';
function CatalogProducts({ user, setUser, isRegistr }) {
    return (
        <div>
            <ProductList
                isRegistr={isRegistr}
                setUser={setUser}
                user={user}
            ></ProductList>
        </div>
    );
}
export default CatalogProducts;
