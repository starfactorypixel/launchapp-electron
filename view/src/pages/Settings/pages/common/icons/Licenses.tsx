import React from "react";
import {MenuSection} from "@pages/common/MenuSection";

export const LicensesIcon: React.FC = React.memo(() => {
    return <MenuSection.Icon width="30" height="30" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_286_898)">
            <path d="M23.75 3.75H18.525C18 2.3 16.625 1.25 15 1.25C13.375 1.25 12 2.3 11.475 3.75H6.25C4.875 3.75 3.75 4.875 3.75 6.25V23.75C3.75 25.125 4.875 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V6.25C26.25 4.875 25.125 3.75 23.75 3.75ZM15 3.75C15.6875 3.75 16.25 4.3125 16.25 5C16.25 5.6875 15.6875 6.25 15 6.25C14.3125 6.25 13.75 5.6875 13.75 5C13.75 4.3125 14.3125 3.75 15 3.75ZM17.5 21.25H8.75V18.75H17.5V21.25ZM21.25 16.25H8.75V13.75H21.25V16.25ZM21.25 11.25H8.75V8.75H21.25V11.25Z" />
        </g>
        <defs>
            <clipPath id="clip0_286_898">
                <rect width="30" height="30" />
            </clipPath>
        </defs>
    </MenuSection.Icon>;
});