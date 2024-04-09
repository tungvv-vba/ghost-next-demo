"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const options = [
  {
    id: 0,
    name: "Select",
    value: "",
  },
  {
    id: 1,
    name: "title ASC",
    value: "title-ASC",
  },
  {
    id: 2,
    name: "title DESC",
    value: "title-DESC",
  },
  {
    id: 3,
    name: "Publish time ASC",
    value: "published_at-ASC",
  },
  {
    id: 4,
    name: "Publish time DESC",
    value: "published_at-DESC",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Filters() {
  const [selected, setSelected] = useState(options[0]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelectChange = (value: any) => {
    const params = new URLSearchParams(searchParams);
    value.value
      ? params.set("order-by", value.value)
      : params.delete("order-by");
    setSelected(value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Listbox value={selected} onChange={handleSelectChange}>
      {({ open }) => (
        <>
          <Listbox.Label
            className="block text-sm font-medium leading-6 text-gray-900 mx-auto"
            id="order-by"
          >
            Order posts by
          </Listbox.Label>
          <div className="relative mt-2 w-[300px]">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="block truncate">{selected?.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-20 mt-1 max-h-56 w-[300px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
