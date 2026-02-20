import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { User } from "../../types";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import CompanyInfo from "./CompanyInfo";
import BankInfo from "./BankInfo";

const TabsSection = ({ user }: { user: User }) => {
  return (
    <TabGroup>
      <TabList className="flex space-x-4 mt-8 border-b">
        {["Personal", "Address", "Company", "Bank"].map((tab) => (
          <Tab
            key={tab}
            className={({ selected }) =>
              clsx(
                "py-2 px-4 text-sm font-medium outline-none cursor-pointer hover:text-black",
                selected
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500",
              )
            }
          >
            {tab}
          </Tab>
        ))}
      </TabList>

      <TabPanels className="mt-6">
        {/* Personal */}
        <TabPanel>
          <PersonalInfo user={user} />
        </TabPanel>

        {/* Address */}
        <TabPanel>
          <AddressInfo user={user} />
        </TabPanel>

        {/* Company */}
        <TabPanel>
          <CompanyInfo user={user} />
        </TabPanel>

        {/* Bank */}
        <TabPanel>
          <BankInfo user={user} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default TabsSection;
