import * as React from "react";
const divAlignment: React.CSSProperties =
    {
        height: '700px', textAlign: "center", padding: "50px", boxSizing: "border-box"
    };
const tableAlignment: React.CSSProperties =
    {
        display: "inline-block", textAlign: "left"
    };
const textRightAlignment: React.CSSProperties = { textAlign: "right" };

export const MainComponent = () =>
    <div style={divAlignment}>
        <div style={tableAlignment}>
            <table>
                <tr>
                    <td><label>Location </label></td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td><label>From </label></td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td><label>To </label></td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td></td>
                    <td style={textRightAlignment}><button>Search</button></td>
                </tr>
            </table>
        </div>
    </div>;