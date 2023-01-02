import React, { FC, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

import styles from "./DesignLayout.module.css";
import Preview from "./Preview";

interface TabProps {
  text: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const Tab: FC<TabProps> = ({ text, active, onClick }) => {
  return (
    <div
      className={`${styles.tab} ${active ? styles.tabActive : null}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

enum Pages {
  profile = "profile",
  links = "links",
}

const pageTitles = {
  [Pages.profile]: "Customize Profile",
  [Pages.links]: "Links",
};

const DesignLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.profile);
  useEffect(() => {
    if (location.pathname === "/design/profile") setCurrentPage(Pages.profile);
    if (location.pathname === "/design/links") setCurrentPage(Pages.links);
  }, [location]);

  return (
    <div className={styles.layout}>
      <div className={styles.designerWrapper}>
        <div className={styles.tabsContainer}>
          <Tab
            text="Profile"
            onClick={() => navigate("./profile")}
            active={currentPage === Pages.profile}
          />
          <Tab
            text="Links"
            onClick={() => navigate("./links")}
            active={currentPage === Pages.links}
          />
        </div>
        <div className={styles.designer}>
          <h1 className={styles.pageTitle}>{pageTitles[currentPage]}</h1>
          <Outlet />
          <button className={styles.saveBtn}>Save</button>
        </div>
      </div>
      <Preview />
    </div>
  );
};

export default DesignLayout;
