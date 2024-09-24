import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Template7.css'; // Import the updated CSS file

const Template7 = ({ formData }) => {
    const generatePDF = () => {
        const input = document.getElementById('resume-template-7');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'pt',
                    format: 'a4'
                });

                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const margin = 40;

                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min((pdfWidth - 2 * margin) / imgWidth, (pdfHeight - 2 * margin) / imgHeight);
                const imgScaledWidth = imgWidth * ratio;
                const imgScaledHeight = imgHeight * ratio;

                pdf.addImage(imgData, 'PNG', margin, margin, imgScaledWidth, imgScaledHeight);
                pdf.save('resume-template7.pdf');
            })
            .catch((error) => {
                console.error('Error generating PDF:', error);
            });
    };

    const renderSection = (title, content) => {
        if (!content || content.length === 0) return null;

        if (title === 'Education') {
            return (
                <div className="resume-section education-section">
                    <h2>{title}</h2>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Institution</th>
                                    <th>Year</th>
                                    <th>Degree</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.Institution}</td>
                                        <td>{item.Year}</td>
                                        <td>{item.Degree}</td>
                                        <td>{item.Results}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        } else if (title === 'Certifications' || title === 'Languages' || title === 'Hobbies' || title === 'Areas of Interest' || title === 'Leadership Qualities' || title === 'Achievements') {
            return (
                <div className={`resume-section ${title.toLowerCase()}-section`}>
                    <h2>{title}</h2>
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="resume-section generic-section">
                    <h2>{title}</h2>
                    {content.map((item, index) => (
                        <div key={index}>
                            {Object.entries(item).map(([key, value]) => (
                                typeof value === 'object' ? (
                                    Object.entries(value).map(([nestedKey, nestedValue]) => (
                                        nestedValue ? <p key={nestedKey}><strong>{nestedKey}:</strong> {nestedValue}</p> : null
                                    ))
                                ) : value ? (
                                    <p key={key}><strong>{key}:</strong> {value}</p>
                                ) : null
                            ))}
                        </div>
                    ))}
                </div>
            );
        }
    };

    const safeJoin = (array) => {
        return Array.isArray(array) && array.length > 0 ? array.join(', ') : '';
    };

    const renderContentBasedOnCareerLevel = () => {
        const careerLevel = formData.CareerLevel || '';

        if (careerLevel === 'Fresher') {
            return (
                <>
                    {formData.CareerObjective && (
                        <div className="resume-section career-objective-section">
                            <h2>Career Objective</h2>
                            <p>{formData.CareerObjective}</p>
                        </div>
                    )}
                    {renderSection('Education', formData.Education)}
                    {renderSection('Skills', [
                        { 'Programming Languages': safeJoin(formData.ProgrammingLanguages) },
                        { 'Web Technologies': safeJoin(formData.WebTechnologies) },
                        { 'Tools and Frameworks': safeJoin(formData.ToolsandFrameworks) },
                        { 'Databases': safeJoin(formData.Databases) },
                    ])}
                    {renderSection('Experience', formData.Experience)}
                    {renderSection('Projects', formData.Projects)}
                    {renderSection('Certifications', formData.Certifications)}
                    {renderSection('Languages', formData.Languages)}
                    {renderSection('Hobbies', formData.Hobbies)}
                    {renderSection('Achievements', formData.Achievements)}
                    {renderSection('Areas of Interest', formData.AreasOfInterest)}
                    {renderSection('Leadership Qualities', formData.LeadershipQualities)}
                </>
            );
        }

        if (careerLevel === 'Beginner' || careerLevel === 'Mid level' || careerLevel === 'Senior level') {
            return (
                <>
                    {formData.CareerObjective && (
                        <div className="resume-section career-objective-section">
                            <h2>Career Objective</h2>
                            <p>{formData.CareerObjective}</p>
                        </div>
                    )}
                    {renderSection('Experience', formData.Experience)}
                    {renderSection('Projects', formData.Projects)}
                    {renderSection('Certifications', formData.Certifications)}
                    {renderSection('Languages', formData.Languages)}
                    {renderSection('Achievements', formData.Achievements)}
                    {renderSection('Leadership Qualities', formData.LeadershipQualities)}
                </>
            );
        }

        return null;
    };

    return (
        <div id="resume-template-7" className="resume-container">
            <div className="resume-header">
                <h1>{formData.Name || ''}</h1>
                {formData.CareerLevel && (
                    <p className="details">{formData.CareerLevel}</p>
                )}
                <div className="contact-info">
                    <p>
                        {formData.Email && (
                            <span className="contact-item">
                                <a href={`mailto:${formData.Email}`}>{formData.Email}</a>
                            </span>
                        )}
                        {formData.PhoneNumber && (
                            <span className="contact-item">{formData.PhoneNumber}</span>
                        )}
                        {formData.GitHub && (
                            <span className="contact-item">
                                <a href={formData.GitHub} target="_blank" rel="noopener noreferrer">
                                {formData.GitHub}
                                </a>
                            </span>
                        )}
                        {formData.LinkedIn && (
                            <span className="contact-item">
                                <a href={formData.LinkedIn} target="_blank" rel="noopener noreferrer">
                                {formData.LinkedIn}
                                </a>
                            </span>
                        )}
                    </p>
                </div>
            </div>

            <div className="resume-divider"></div>

            {renderContentBasedOnCareerLevel()}

            <button className="pdf-download-button" onClick={generatePDF}>Download as PDF</button>
        </div>
    );
};

export default Template7;
