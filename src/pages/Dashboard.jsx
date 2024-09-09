import React from 'react';
import styles from '../css/Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.sidebar}>
                <h2>Dashboard</h2>
                <ul>
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#reports">Reports</a></li>
                    <li><a href="#analytics">Analytics</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
            </div>
            <div className={styles.mainContent}>
                <h1>Welcome to the Dashboard</h1>
                <p>This is the main content area.</p>
            </div>
        </div>
    );
};

export default Dashboard;