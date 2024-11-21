import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const EmailContext = createContext();

const EmailProvider = ({children}) => {
    const [email, setEmail] = useState("");

    return (
        <div>
            <EmailContext.Provider value={{ email, setEmail }}>
                {children}
            </EmailContext.Provider>
        </div>
    );
};

EmailProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default EmailProvider;

