import Welcome from "../../../../Components/Welcome/Welcome";
import useAuth from "../../../../hooks/useAuth";

const DonorHome = () => {
    const {user}=useAuth()

    return(
        <div>
            <div>
                <Welcome heading={user?.displayName}/>
            </div>
        </div>
    )}
export default DonorHome;