import { User } from "../../types";
import Info from "./Info";

const AddressInfo = ({ user }: { user: User }) => {
  return (
    <div className="space-y-4">
      <Info label="Street" value={user.address.address} />
      <Info label="City" value={user.address.city} />
      <Info
        label="State"
        value={`${user.address.state} (${user.address.stateCode})`}
      />
      <Info label="Postal Code" value={user.address.postalCode} />
      <Info label="Country" value={user.address.country} />
    </div>
  );
};

export default AddressInfo;
