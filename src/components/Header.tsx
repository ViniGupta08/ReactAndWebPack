import * as React from "react";
const HeaderAlignment: React.CSSProperties =
    { textAlign: "center", fontSize: "50px", fontWeight: "bold" };
const loginAlignment: React.CSSProperties = { position: "absolute", right: "65px", top: "0" };
const signUpAlignment: React.CSSProperties = { position: "absolute", right: "0px", top: "0" };
export const Header = () =>
    <div>
        <div style={HeaderAlignment}>AirBnf</div>
        <button style={loginAlignment}>
            Login
            </button>
        <button style={signUpAlignment}>
            Signup
        </button>
    </div>;