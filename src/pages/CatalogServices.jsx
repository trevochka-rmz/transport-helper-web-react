import ServiceList from '../components/ServiceList';
function CatalogServices({ user, setUser, isRegistr }) {
    return (
        <div>
            <ServiceList
                isRegistr={isRegistr}
                setUser={setUser}
                user={user}
            ></ServiceList>
        </div>
    );
}
export default CatalogServices;
