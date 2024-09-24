import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Template5.css'; // Make sure to create this file using the CSS provided

const Template5 = ({ formData }) => {
    const generatePDF = () => {
        const input = document.getElementById('resume-template-5');
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
                pdf.save('resume-template5.pdf');
            })
            .catch((error) => {
                console.error('Error generating PDF:', error);
            });
    };

    const renderSection = (title, content) => {
        if (!content || content.length === 0) return null;

        if (title === 'Education') {
            return (
                <div className="section">
                    <div className="sectionHeading">{title}</div>
                    <div className="tableContainer">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="tableHeader">Institution</th>
                                    <th className="tableHeader">Year</th>
                                    <th className="tableHeader">Degree</th>
                                    <th className="tableHeader">Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'rowEven' : ''}>
                                        <td className="tableCell">{item.Institution}</td>
                                        <td className="tableCell">{item.Year}</td>
                                        <td className="tableCell">{item.Degree}</td>
                                        <td className="tableCell">{item.Results}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        } else if (title === 'Certifications' || title === 'Languages' || title === 'Hobbies' || title === 'Areas of Interest' || title === 'Achievements' || title === 'Leadership Qualities') {
            return (
                <div className="section">
                    <div className="sectionHeading">{title}</div>
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="section">
                    <div className="sectionHeading">{title}</div>
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

    const renderResume = () => {
        const { CareerLevel } = formData;

        if (CareerLevel === 'Fresher') {
            return (
                <>
                    {formData.CareerObjective && (
                        <div className="section career-objective">
                            <div className="sectionHeading">Career Objective</div>
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
                    {renderSection('Achievements', formData.Achievements)}
                    {renderSection('Areas of Interest', formData.AreasOfInterest)}
                    {renderSection('Leadership Qualities', formData.LeadershipQualities)}
                </>
            );
        } else if (CareerLevel === 'Beginner') {
            return (
                <>
                    {formData.CareerObjective && (
                        <div className="section career-objective">
                            <div className="sectionHeading">Career Objective</div>
                            <p>{formData.CareerObjective}</p>
                        </div>
                    )}
                    {renderSection('Experience', formData.Experience)}
                    {renderSection('Projects', formData.Projects)}
                    {renderSection('Certifications', formData.Certifications)}
                    {renderSection('Languages', formData.Languages)}
                    {renderSection('Achievements', formData.Achievements)}
                    {renderSection('Areas of Interest', formData.AreasOfInterest)}
                    {renderSection('Leadership Qualities', formData.LeadershipQualities)}
                </>
            );
        } else if (CareerLevel === 'Mid level') {
            return (
                <>
                    {formData.CareerObjective && (
                        <div className="section career-objective">
                            <div className="sectionHeading">Career Objective</div>
                            <p>{formData.CareerObjective}</p>
                        </div>
                    )}
                    {renderSection('Experience', formData.Experience)}
                    {renderSection('Projects', formData.Projects)}
                    {renderSection('Certifications', formData.Certifications)}
                    {renderSection('Languages', formData.Languages)}
                    {renderSection('Achievements', formData.Achievements)}
                    {renderSection('Areas of Interest', formData.AreasOfInterest)}
                    {renderSection('Leadership Qualities', formData.LeadershipQualities)}
                </>
            );
        } else if (CareerLevel === 'Senior level') {
            return (
                <>
                    {formData.CareerObjective && (
                        <div className="section career-objective">
                            <div className="sectionHeading">Career Objective</div>
                            <p>{formData.CareerObjective}</p>
                        </div>
                    )}
                    {renderSection('Experience', formData.Experience)}
                    {renderSection('Projects', formData.Projects)}
                    {renderSection('Certifications', formData.Certifications)}
                    {renderSection('Languages', formData.Languages)}
                    {renderSection('Achievements', formData.Achievements)}
                    {renderSection('Areas of Interest', formData.AreasOfInterest)}
                    {renderSection('Leadership Qualities', formData.LeadershipQualities)}
                </>
            );
        } else {
            return (
                <p>Career Level not specified</p>
            );
        }
    };

    return (
        <div className="resume-container">
            <div id="resume-template-5" className="container">
                <div className="header">
                    <div className="contactInfo">
                        <p className="name">{formData.Name || ''}</p>
                        {formData.CareerLevel && (
                            <p className="details">{formData.CareerLevel}</p>
                        )}
                        <div className="inlineLinks">
                            {formData.PhoneNumber && <p>{formData.PhoneNumber}</p>}
                            {formData.Email && <p> <a href={`mailto:${formData.Email}`} className="link">{formData.Email}</a></p>}
                            {formData.LinkedIn && <p> <a href={formData.LinkedIn} target="_blank" rel="noopener noreferrer" className="link">{formData.LinkedIn}</a></p>}
                            {formData.GitHub && <p><a href={formData.GitHub} target="_blank" rel="noopener noreferrer" className="link">{formData.GitHub}</a></p>}
                        </div>
                    </div>
                </div>

                <div className="resumeDivider"></div>

                {renderResume()}

                <div className="resumeDivider"></div>

                <button className="pdfDownloadButton" onClick={generatePDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Template5;
