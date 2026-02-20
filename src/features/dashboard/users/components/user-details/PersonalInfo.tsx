import { User } from "../../types";
import Info from "./Info";

const PersonalInfo = ({ user }: { user: User }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Info label="Email" value={user.email} />
      <Info label="Phone" value={user.phone} />
      <Info label="Age" value={user.age} />
      <Info label="Gender" value={user.gender} />
      <Info label="Blood Group" value={user.bloodGroup} />
      <Info label="Height" value={`${user.height} cm`} />
      <Info label="Weight" value={`${user.weight} kg`} />
      <Info label="Eye Color" value={user.eyeColor} />
      <Info label="Hair" value={`${user.hair.color} - ${user.hair.type}`} />
      <Info label="University" value={user.university} />
    </div>
  );
};

export default PersonalInfo;
