import Info from "./Info";
import { User } from "../../types";

const CompanyInfo = ({ user }: { user: User }) => {
  return (
    <div className="space-y-4">
      <Info label="Company" value={user?.company?.name} />
      <Info label="Department" value={user?.company?.department} />
      <Info label="Title" value={user?.company?.title} />
      <Info
        label="Company Address"
        value={`${user?.company?.address.address}, ${user?.company?.address.city}`}
      />
    </div>
  );
};

export default CompanyInfo;
