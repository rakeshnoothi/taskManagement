import { createContext, useState } from "react";

export const AddComponent = createContext();

const AddComponentProvider = ({ children }) => {
    const [render, setRender] = useState(false);
    const context = {
        render,
        setRender,
    };
    return (
        <AddComponent.Provider value={context}>
            {children}
        </AddComponent.Provider>
    );
};
export default AddComponentProvider;
