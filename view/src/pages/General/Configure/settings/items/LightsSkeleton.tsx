import React from "react";
import {Skeleton, SkeletonTypes} from "@pages/common/Skeleton";
import styles from "../../style.scss";
import {Dot} from "../common/Dot";
import {Item} from "../common/Item";
import {Line} from "../common/Line";

export const LightsSkeleton: React.FC = React.memo(() => {
    return (
        <Item className={styles.lights} skeleton>
            <Dot />
            <Line />
            <Skeleton type={SkeletonTypes.CIRCLE} width={45} height={45} />
            <span className={styles.name}>
                <Skeleton />
            </span>
        </Item>
    );
});

LightsSkeleton.displayName = "LightsSkeleton";
