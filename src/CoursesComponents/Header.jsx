import React, { useState, useEffect, useMemo, useCallback, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import './Header.css';

const ContactForm = lazy(() => import('../Homepage/ContactForm'));

const DSHeader = ({ pageId, pageType }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showContactForm, setShowContactForm] = useState(false);
    const [course, setCourse] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Cache implementation
                const cachedData = localStorage.getItem(`dsHeader_${pageId}_${pageType}`);
                if (cachedData) {
                    setData(JSON.parse(cachedData));
                    setLoading(false);
                    return;
                }

                const response = await fetch('public/Jsonfolder/dsHeaderData.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();

                const pageData = jsonData[pageType]?.[pageId];
                if (pageData) {
                    localStorage.setItem(`dsHeader_${pageId}_${pageType}`, JSON.stringify(pageData)); // Cache data
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
    }, [pageId, pageType]);

    const handleOpenContactForm = useCallback((courseName) => {
        setCourse(courseName);
        setShowContactForm(true);
    }, []);

    const handleCloseContactForm = useCallback(() => {
        setShowContactForm(false);
        setCourse('');
    }, []);

    const renderFormInputs = useMemo(() => {
        if (!data) return null;

        return data.form.inputs.map((input, index) => {
            if (input.countryCode) {
                return (
                    <div key={index} className="phone-input-it-ds" style={{ display: 'flex', gap: '0.5rem', maxWidth: '23.5vw' }}>
                        <select style={{ flex: '0 0 80px', padding: '0.5rem', height: '3.5vw', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}>
                            <option>{input.countryCode}</option>
                            {/* Add more country codes as needed */}
                        </select>
                        <input 
                            type={input.type} 
                            name={input.name} 
                            placeholder={input.placeholder} 
                            style={{ flex: '1', padding: '0.5rem', height: '3.5vw', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} 
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
                    />
                );
            }
        });
    }, [data]);

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
        <div className="container-it-ds-header">
            <Helmet>
                <title>{data.title || 'Default Title'}</title>
                <meta name="description" content={data.description || 'Default description'} />
                <meta name="keywords" content={data.keywords?.join(', ') || 'Default, Keywords'} />
            </Helmet>

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
                >
                    {renderFormInputs}
                    <button 
                        type="submit" 
                        className="submit-button-it-ds" 
                        style={{ backgroundColor: '#dc2626', color: 'white', padding: '0.5rem', borderRadius: '0.375rem' }}
                        onClick={() => alert('You Have Booked a Live Demo!')}
                    >
                        {data.form.submitText}
                    </button>
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
