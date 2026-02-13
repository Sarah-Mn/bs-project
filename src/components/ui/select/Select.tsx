import { Fragment, useMemo, useRef, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useVirtualizer } from "@tanstack/react-virtual";

export interface SelectOption {
  id: string;
  label: string;
  group?: string;
}

interface Props {
  options: SelectOption[];
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
  placeholder?: string;
}

export default function Select({
  options,
  value,
  onChange,
  placeholder = "Select options",
}: Props) {
  const [query, setQuery] = useState("");
  const parentRef = useRef<HTMLDivElement>(null);

  //  Filtering
  const filteredOptions = useMemo(() => {
    if (!query) return options;
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(query.toLowerCase()),
    );
  }, [options, query]);

  //  Grouping
  const groupedOptions = useMemo(() => {
    const groups: Record<string, SelectOption[]> = {};

    filteredOptions.forEach((opt) => {
      const group = opt.group || "Other";
      if (!groups[group]) groups[group] = [];
      groups[group].push(opt);
    });

    return Object.entries(groups);
  }, [filteredOptions]);

  //  Flatten for Virtualization
  const flattened = useMemo(() => {
    const rows: (SelectOption | { groupLabel: string })[] = [];

    groupedOptions.forEach(([group, items]) => {
      rows.push({ groupLabel: group });
      rows.push(...items);
    });

    return rows;
  }, [groupedOptions]);

  //  Virtualizer
  const rowVirtualizer = useVirtualizer({
    count: flattened.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
  });

  //  Select All / Clear
  const selectAll = () => {
    onChange(filteredOptions);
  };

  const clearAll = () => {
    onChange([]);
  };

  const isSelected = (option: SelectOption) =>
    value.some((v) => v.id === option.id);

  const toggleOption = (option: SelectOption) => {
    if (isSelected(option)) {
      onChange(value.filter((v) => v.id !== option.id));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="w-80">
      <Listbox value={value} onChange={onChange} multiple>
        {({ open }) => (
          <div className="relative mt-1">
            {/* Button */}
            <ListboxButton className="relative w-full cursor-pointer rounded-lg bg-white dark:bg-zinc-800 py-2 pl-3 pr-10 text-left border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <span className="block truncate">
                {value.length === 0 ? placeholder : `${value.length} selected`}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
              </span>
            </ListboxButton>

            {/* Dropdown */}
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              show={open}
              afterEnter={() => {
                rowVirtualizer.measure();
              }}
            >
              <ListboxOptions className="absolute z-50 mt-2 max-h-96 w-full overflow-hidden rounded-md bg-white dark:bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {/* Search Input */}
                <div className="p-2 border-b dark:border-zinc-700">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-2 py-1 text-sm border rounded-md dark:bg-zinc-800 dark:border-zinc-600"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>

                {/* Select All / Clear */}
                <div className="flex justify-between px-3 py-2 text-sm border-b dark:border-zinc-700">
                  <button
                    onClick={selectAll}
                    className="text-indigo-600 hover:underline"
                  >
                    Select All
                  </button>
                  <button
                    onClick={clearAll}
                    className="text-red-500 hover:underline"
                  >
                    Clear
                  </button>
                </div>

                {/* Virtualized List */}
                <div ref={parentRef} className="max-h-64 overflow-auto">
                  <div
                    style={{
                      height: `${rowVirtualizer.getTotalSize()}px`,
                      position: "relative",
                    }}
                  >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                      const item = flattened[virtualRow.index];

                      if ("groupLabel" in item) {
                        return (
                          <div
                            key={virtualRow.key}
                            className="px-3 py-2 text-xs font-semibold bg-gray-100 dark:bg-zinc-800 sticky top-0"
                            style={{
                              position: "absolute",
                              top: 0,
                              transform: `translateY(${virtualRow.start}px)`,
                            }}
                          >
                            {item.groupLabel}
                          </div>
                        );
                      }

                      return (
                        <div
                          key={item.id}
                          className={`cursor-pointer select-none px-3 py-2 text-sm flex justify-between items-center hover:bg-indigo-50 dark:hover:bg-zinc-800`}
                          style={{
                            position: "absolute",
                            top: 0,
                            transform: `translateY(${virtualRow.start}px)`,
                          }}
                          onClick={() => toggleOption(item)}
                        >
                          {item.label}
                          {isSelected(item) && (
                            <CheckIcon className="h-4 w-4 text-indigo-600" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ListboxOptions>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
}
