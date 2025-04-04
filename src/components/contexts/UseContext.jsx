import { createContext, useMemo, useState } from "react";

export const UserContext = createContext();

export const UseProvider = ({ children }) => {

    const [active, setActive] = useState(false);

    const context = useMemo(() => ({
        active, setActive
    }));

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    
);

}