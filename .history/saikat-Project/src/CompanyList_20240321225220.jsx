// CompanyList.js
import React from 'react';
import styles from './CompanyList.module.css'; // Import CSS module

const CompanyList = () => {
  return (
    <div>
      <h1>Our Partner Companies</h1>
      <ul className={styles.companyList}> {/* Apply CSS module class */}
        <li className={styles.companyItem}><img src="company1.jpg" alt="Company 1" /></li>
        <li className={styles.companyItem}><img src="company2.jpg" alt="Company 2" /></li>
        <li className={styles.companyItem}><img src="company3.jpg" alt="Company 3" /></li>
        {/* Add more list items as needed */}
      </ul>
    </div>
  );
};

export default CompanyList;
