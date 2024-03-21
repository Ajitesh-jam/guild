// CompanyList.js
import React from 'react';
import styles from './CompanyList.module.css'; // Import CSS module

const CompanyList = () => {
  return (
    <div className={styles.container}>
      <h1>Our Partner Companies</h1>
      <div className={styles.companyList}> {/* Apply CSS module class */}
        <div className={styles.companyContainer}>
          <div className={styles.companyItem}>
            <img src="adobe.png" alt="Company 1" />
            <div className={styles.description}>
              <h2>Company 1</h2>
              <p>A short description of Company 1.</p>
            </div>
          </div>
        </div>
        <div className={styles.companyContainer}>
          <div className={styles.companyItem}>
            <img src="company2.jpg" alt="Company 2" />
            <div className={styles.description}>
              <h2>Company 2</h2>
              <p>A short description of Company 2.</p>
            </div>
          </div>
        </div>
        <div className={styles.companyContainer}>
          <div className={styles.companyItem}>
            <img src="company3.jpg" alt="Company 3" />
            <div className={styles.description}>
              <h2>Company 3</h2>
              <p>A short description of Company 3.</p>
            </div>
          </div>
        </div>
        {/* Add more company containers as needed */}
      </div>
    </div>
  );
};

export default CompanyList;
