import * as React from "react";
/** @type {{footerStyle: React.CSSProperties}} */
const footerStyle: React.CSSProperties = {
    fontStyle: 'italic',
    textAlign: 'center'
};
export const Footer = () =>
    <div style={footerStyle}>
        Copyright: this page is for internal use only
</div>;