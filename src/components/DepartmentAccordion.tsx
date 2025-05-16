// DepartmentAccordion.tsx
import { useState } from "react";
import type { Department } from "../interfaces";
import { NavLink } from "react-router";

type Props = {
    departments: Department[];
};
export default function DepartmentAccordion({ departments }: Props) {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept) => {
                const isOpen = openId === dept.id;

                return (
                    <div
                        key={dept.id}
                        className="border rounded-xl shadow-sm overflow-hidden transition-all self-start h-auto"
                    >
                        <button
                            onClick={() => toggle(dept.id)}
                            type="button"
                            className="flex w-full items-center justify-between gap-2 p-4
                         bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                            aria-expanded={isOpen}
                        >
                            <span className="font-medium text-lg">
                                {dept.name}
                            </span>
                            <svg
                                className={`h-5 w-5 transition-transform duration-300 ${
                                    isOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        <div
                            className={`transition-[max-height] duration-300 ease-in-out ${
                                isOpen ? "max-h-[24rem]" : "max-h-0"
                            } overflow-hidden bg-gray-50`}
                        >
                            <ul
                                className={`divide-y ${
                                    isOpen
                                        ? "overflow-y-auto max-h-[20rem]"
                                        : ""
                                }`}
                            >
                                {dept.towns.map((town) => (
                                    <li
                                        key={town.id}
                                        className="p-4 hover:bg-gray-100"
                                    >
                                        <NavLink
                                            to={`/villes-et-villages/${town.id}`}
                                            className="p-0 m-0"
                                        >
                                            <p className="font-semibold">
                                                {town.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {town.postcode} &middot;{" "}
                                                {town.population.toLocaleString()}
                                            </p>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
