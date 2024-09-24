import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UploadPage.module.css'; // Import the CSS module

function UploadPage({ setResumeData }) {
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleBuildFromScratch = () => {
        setResumeData({}); // Set empty resume data
        navigate('/display'); // Navigate to display page
    };

    return (
        <div className={styles.pageContainer}>
            {loading ? (
                <div className={styles.loadingScreen}>
                    <div className={styles.spinner}></div>
                    <p>Processing, please wait...</p>
                </div>
            ) : (
                <div className={styles.splitContainer}>
                    {/* Right side - Build from Scratch Section */}
                    <div className={styles.buildContainer}>
                        <h2>Build from Scratch</h2>
                        <div className={styles.box} onClick={handleBuildFromScratch}>
                            Build Resume from Scratch
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UploadPage;
