import * as React from "react";
import styles from "../../../style.scss";

export const LightsIcon: React.FC = React.memo(() => {
    return (
        <svg className={styles.icon} width="21" height="22" viewBox="0 0 21 22">
            <path
                d="M5.49818 4.30959L3.78 2.51142L2.43409 3.92785L4.14273 5.72603L5.49818 4.30959ZM2.86364 9.99543H0V12.0046H2.86364V9.99543ZM11.4545 0H9.54545V2.96347H11.4545V0V0ZM18.5659 3.92785L17.22 2.51142L15.5114 4.30959L16.8573 5.72603L18.5659 3.92785ZM15.5018 17.6904L17.2105 19.4986L18.5564 18.0822L16.8382 16.284L15.5018 17.6904ZM18.1364 9.99543V12.0046H21V9.99543H18.1364ZM10.5 4.9726C7.34045 4.9726 4.77273 7.67489 4.77273 11C4.77273 14.3251 7.34045 17.0274 10.5 17.0274C13.6595 17.0274 16.2273 14.3251 16.2273 11C16.2273 7.67489 13.6595 4.9726 10.5 4.9726ZM9.54545 22H11.4545V19.0365H9.54545V22ZM2.43409 18.0721L3.78 19.4886L5.48864 17.6804L4.14273 16.2639L2.43409 18.0721Z"
                fill="#E8EEED"
            />
        </svg>
    );
});

LightsIcon.displayName = "LightsIcon";
