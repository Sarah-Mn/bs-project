import { User } from "../../types";
import Info from "./Info";

const BankInfo = ({ user }: { user: User }) => {
  return (
    <div className="space-y-4">
      <Info label="Card Type" value={user.bank.cardType} />
      <Info label="Card Number" value={user.bank.cardNumber} />
      <Info label="Expire" value={user.bank.cardExpire} />
      <Info label="Currency" value={user.bank.currency} />
      <Info label="IBAN" value={user.bank.iban} />
    </div>
  );
};

export default BankInfo;
