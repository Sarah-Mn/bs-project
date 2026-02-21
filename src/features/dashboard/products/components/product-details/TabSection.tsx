import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Product } from "../../types";
import Reviews from "./Reviews";
import Inventory from "./Inventory";
import Dimensions from "./Dimensions";
import clsx from "clsx";

export const TabSection = ({ product }: { product: Product }) => {
  return (
    <div className="mt-16">
      <TabGroup>
        <TabList className="flex space-x-6 border-b pb-2 text-sm font-medium">
          {["Inventory", "Dimensions", "Reviews"].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                clsx(
                  selected
                    ? "text-black border-b-2 border-black pb-2 focus:outline-none "
                    : "text-gray-400 ",
                  "cursor-pointer hover:text-black",
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels className="mt-6">
          {/* INVENTORY */}
          <TabPanel>
            <Inventory product={product} />
          </TabPanel>

          {/* DIMENSIONS */}
          <TabPanel>
            <Dimensions product={product} />
          </TabPanel>

          {/* REVIEWS */}
          <TabPanel>
            <Reviews product={product} />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};
