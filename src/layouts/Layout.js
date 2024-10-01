import clsx from "clsx";
import styles from "./Layout.module.scss";

import { useState } from "react";

import Square1 from "../pages/Square1/Square1";
import Square2 from "../pages/Square2/Square2";

const RootLayout = () => {
    const [state, setState] = useState("old");

    return (
        <div className={clsx(styles.container)}>
            <select
                onChange={(e) => setState(e.target.value)}
                className={clsx(styles.select)}
            >
                <option value="old">Old</option>
                <option value="new">New</option>
            </select>

            {state === "old" ? <Square1 /> : <Square2 />}
        </div>
    );
};

export default RootLayout;