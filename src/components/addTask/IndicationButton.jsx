import { useState } from "react";
// Solid icon imports.
import { XMarkIcon } from "@heroicons/react/24/solid";

const IndicationButton = ({ displayName, dropDownValues, taskInfo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [newDisplayName, setNewDisplayName] = useState(null);

    const handleDisplayName = value => {
        setNewDisplayName(value);
        if (displayName === "Priority") {
            taskInfo.current.priority = value;
        } else if (displayName === "Status") {
            taskInfo.current.status = value;
        }
    };

    return (
        <button
            className={`px-2 border border-silver-500 rounded-md hover:bg-silver-100 relative ${
                isOpen ? "bg-silver-100" : null
            }`}
            onClick={() => setIsOpen(!isOpen)}
        >
            {newDisplayName === null ? (
                <span>{displayName}</span>
            ) : (
                <div className="flex items-center gap-1">
                    <span>{newDisplayName}</span>
                    <XMarkIcon
                        className="w-4 h-4 hover:text-red"
                        onClick={e => {
                            e.stopPropagation();
                            setNewDisplayName(null);
                            taskInfo.current.priority = null;
                            taskInfo.current.status = null;
                        }}
                    />
                </div>
            )}
            {/* Drop-Down list */}
            {isOpen ? (
                <ul className="absolute z-10 w-max py-2 flex flex-col gap-2 bg-white border border-silver-500 top-full left-0 rounded-md">
                    {dropDownValues.map(value => {
                        return (
                            <li
                                key={value}
                                className="hover:bg-silver-100 px-4"
                                onClick={() => {
                                    handleDisplayName(value);
                                }}
                            >
                                {value}
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <></>
            )}
        </button>
    );
};
export default IndicationButton;
