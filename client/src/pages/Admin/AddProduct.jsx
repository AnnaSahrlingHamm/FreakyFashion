import React from "react";
import styles from '../../components/AdminComponents/AdminLayout.module.css';
import AdminHeader from "../../components/AdminComponents/AdminHeader";
import AdminLeftBar from "../../components/AdminComponents/AdminLeftBar";
import AddProductForm from "../../components/AdminComponents/AddProductForm";



const AddProduct = () => {
  return (
    <div className="container">
      <div className={styles.adminLayout}>
      <AdminHeader>Administration</AdminHeader> 
        <div className={styles.adminContainer}>
      <AdminLeftBar>Products</AdminLeftBar>
      <div className = {styles.adminContent}>
        <AddProductForm />
      </div>
      </div>
    </div>
    </div>
  );
};

export default AddProduct;
