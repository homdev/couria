import React from 'react';
import Logo from '../res/img/logo.png';
import DarkLogo from '../res/img/darkLogo.png';
import { websiteURL } from '../constants';

const LogoComponent = ({ isDarkMode }) => {

    function redirectHome() {
        window.location.href = websiteURL;
    }

    return <img alt='logo' src={isDarkMode === "true" ? DarkLogo : Logo} className="mr-3 h-9" onClick={redirectHome} />;
};

export default LogoComponent;
