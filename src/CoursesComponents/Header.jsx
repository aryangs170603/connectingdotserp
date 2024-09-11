import React, { useState, useEffect, useMemo, useCallback, lazy, Suspense, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { CityContext } from '../CityContext';
import './Header.css';

const ContactForm = lazy(() => import('../Homepage/ContactForm'));

const DSHeader = ({ pageId, pageType }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showContactForm, setShowContactForm] = useState(false);
    const [course, setCourse] = useState('');
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);
    const city = useContext(CityContext);


    useEffect(() => {
        localStorage.clear();

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const cachedData = localStorage.getItem(`dsHeader_${pageId}_${pageType}`);
                if (cachedData) {
                    setData(JSON.parse(cachedData));
                    setLoading(false);
                    return;
                }

                // Fetching data from the JSON file
                const response = await fetch('/Jsonfolder/dsHeaderData.json');
                if (!response.ok) {
                    throw new Error('Failed to load data');
                }

                const jsonData = await response.json();
                const pageData = jsonData[pageType]?.[pageId];

                if (pageData) {
                    // Set page data including backgroundVideo from JSON
                    pageData.title = pageData.title.replace(/{city}/g, city);
                    pageData.subtitle = pageData.subtitle.replace(/{city}/g, city);
                    pageData.description = pageData.description.replace(/{city}/g, city);
                    pageData.features = pageData.features.map(feature => feature.replace(/{city}/g, city));
                    pageData.alumni = pageData.alumni.map(company => ({
                        ...company,
                        name: company.name.replace(/{city}/g, city)
                    }));
                    pageData.buttons = pageData.buttons.map(button => ({
                        ...button,
                        text: button.text.replace(/{city}/g, city)
                    }));

                    localStorage.setItem(`dsHeader_${pageId}_${pageType}`, JSON.stringify(pageData));
                    setData(pageData);
                } else {
                    throw new Error('Page data not found');
                }

                setLoading(false);
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [pageId, pageType, city]);

    const handleOpenContactForm = useCallback((courseName) => {
        setCourse(courseName);
        setShowContactForm(true);
    }, []);

    const handleCloseContactForm = useCallback(() => {
        setShowContactForm(false);
        setCourse('');
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmissionError(null);

        try {
            const response = await fetch('http://localhost:5001/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            alert('Form submitted successfully!');
            setFormData({});
            setShowContactForm(false);
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmissionError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderFormInputs = useMemo(() => {
        if (!data) return null;

        return data.form.inputs.map((input, index) => {
            if (input.countryCode) {
                return (
                    <div key={index} className="phone-input-it-ds" style={{ display: 'flex', gap: '0.5rem', maxWidth: '23.5vw' }}>
                        <select style={{ flex: '0 0 80px', padding: '0.5rem', height: '3.5vw', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}>
                            <option>{input.countryCode}</option>
                        </select>
                        <input 
                            type={input.type} 
                            name={input.name} 
                            placeholder={input.placeholder} 
                            style={{ flex: '1', padding: '0.5rem', height: '3.5vw', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} 
                            value={formData[input.name] || ''}
                            onChange={handleChange}
                        />
                    </div>
                );
            } else {
                return (
            <input
                key={index}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
                value={formData[input.name] || ''}
                onChange={handleChange}
            />
        
        );
            }
        });
    }, [data, formData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }

    if (!data) {
        return <div>No data available for the specified page.</div>;
    }

    return (
        <div className="container-it-ds-header  ">
            <Helmet>
                <title>{data.title || 'Default Title'}</title>
                <meta name="description" content={data.description || 'Default description'} />
                <meta name="keywords" content={data.keywords?.join(', ') || 'Default, Keywords'} />
            </Helmet>

            {/* Lazy loaded background video */}
            <video
                className="background-video"
                src={data.backgroundVideo}  
                autoPlay
                muted
                loop
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
                loading="lazy" // Lazy loading the video
            />

            <div className="left-section-it-ds">
                <h1><span className='ds-header-span'>{data.title}</span></h1>
                <h2><span className='ds-header-span-2'>{data.subtitle}</span></h2>
                <p>{data.description}</p>
                <ul className="features-it-ds">
                    {data.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className="alumni-it-ds">
                    <span>Find our Alumni at -</span>
                    <div className="alumni-logos-it-ds">
                        {data.alumni.map((company, index) => (
                            <img key={index} src={company.logo} alt={`${company.name} logo`} />
                        ))}
                    </div>
                </div>
                <div className="buttons-it-ds">
                    {data.buttons.map((button, index) => (
                        <button
                            key={index}
                            className="batch-button-it-ds"
                            onClick={() => handleOpenContactForm(button.courseName)}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
            </div>

            <div className="right-section-it-ds">
                <h3>{data.form.title}</h3>
                <form
                    action="#"
                    method="POST"
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    onSubmit={handleSubmit}
                >
                    {renderFormInputs}
                    <button
                        type="submit"
                        className="submit-button-it-ds"
                        style={{ backgroundColor: '#dc2626', color: 'white', padding: '0.5rem', borderRadius: '0.375rem' }}
                        disabled={isSubmitting}
                    >
                        {data.form.submitText}
                    </button>
                    {submissionError && <p style={{ color: 'red' }}>{submissionError}</p>}
                </form>
            </div>

            {showContactForm && (
                <Suspense fallback={<div>Loading form...</div>}>
                    <ContactForm onClose={handleCloseContactForm} course={course} />
                </Suspense>
            )}
        </div>
    );
};

export default DSHeader;
