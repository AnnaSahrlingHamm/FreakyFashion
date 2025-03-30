import React from "react";
import styles from "./AdminLeftBar.module.css";

const AdminLeftBar = () => {
  return (
    <aside className={styles.adminLeftBar}>
      <nav>
        <h3 className={styles.sidebarTitle}>Products</h3>
      </nav>
    </aside>
  );
};

export default AdminLeftBar;
