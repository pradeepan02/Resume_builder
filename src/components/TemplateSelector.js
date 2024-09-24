// TemplateSelector.js
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Template1Image from '../components/images/template1.jpeg';
import Template2Image from '../components/images/template2.jpeg';
import Template3Image from '../components/images/template3.jpeg';
import Template4Image from '../components/images/template4.jpeg';
import Template5Image from '../components/images/template5.jpeg';
import Template6Image from '../components/images/template6.jpg';
import Template7Image from '../components/images/template7.jpg';
import './TemplateSelector.css';

const TemplateSelector = () => {
    const location = useLocation();
    const { formData } = location.state || {};
    const [loading, setLoading] = useState(false);

    const handleTemplateClick = () => {
        setLoading(true);
        // Simulate loading time (e.g., API call or navigation delay)
        setTimeout(() => {
            setLoading(false); // Set loading to false after the simulated delay
            // You can also navigate to the selected template here if needed
        }, 2000); // Adjust time as necessary
    };

    return (
        <div className="template-selector-container">
            <h1 className="title">Select a Resume Template</h1>
            <div className="template-items">
                <div className="template-item" onClick={handleTemplateClick}>
                    <Link to="/resume-builder/template1" state={{ formData }}>
                        <img src={Template1Image} alt="Template 1" />
                        <p>Template 1</p>
                    </Link>
                </div>
                <div className="template-item" onClick={handleTemplateClick}>
                    <Link to="/resume-builder/template2" state={{ formData }}>
                        <img src={Template2Image} alt="Template 2" />
                        <p>Template 2</p>
                    </Link>
                </div>
                <div className="template-item" onClick={handleTemplateClick}>
                    <Link to="/resume-builder/template3" state={{ formData }}>
                        <img src={Template3Image} alt="Template 3" />
                        <p>Template 3</p>
                    </Link>
                </div>
                <div className="template-item" onClick={handleTemplateClick}>
                    <Link to="/resume-builder/template4" state={{ formData }}>
                        <img src={Template4Image} alt="Template 4" />
                        <p>Template 4</p>
                    </Link>
                </div>
                <div className="template-item" onClick={handleTemplateClick}>
                    <Link to="/resume-builder/template5" state={{ formData }}>
                        <img src={Template5Image} alt="Template 5" />
                        <p>Template 5</p>
                    </Link>
                </div>
                <div className="template-item" onClick={handleTemplateClick}>
                    <Link to="/resume-builder/template6" state={{ formData }}>
                        <img src={Template6Image} alt="Template 6" />
                        <p>Template 6</p>
                    </Link>
                </div>
                <div className="template-item" onClick={handleTemplateClick}>
                    <Link to="/resume-builder/template7" state={{ formData }}>
                        <img src={Template7Image} alt="Template 7" />
                        <p>Template 7</p>
                    </Link>
                </div>
            </div>

            {/* Loading Overlay */}
            {loading && (
                <div className="loading-overlay">
                    <div className="spinner"></div>
                    <p>Building The Resume ....</p>
                </div>
            )}
        </div>
    );
};

export default TemplateSelector;
