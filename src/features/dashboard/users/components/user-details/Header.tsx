import Image from "next/image";
import { User } from "../../types";
import clsx from "clsx";

const Header = ({ user }: { user: User }) => {
  return (
    <div className="flex items-center gap-6 border-b pb-6">
      <Image
        width={112}
        height={112}
        src={user.image || "/avatar.png"}
        alt={user.firstName}
        className="w-28 h-28 rounded-full object-cover border"
      />
      <div>
        <h1 className="text-3xl font-bold">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-gray-500">@{user.username}</p>
        <span
          className={clsx(
            "mt-2 inline-block px-3 py-1 text-sm rounded-full",
            user.role === "admin"
              ? "bg-red-100 text-red-600"
              : user.role === "moderator"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-blue-100 text-blue-600",
          )}
        >
          {user.role}
        </span>
      </div>
    </div>
  );
};

export default Header;
