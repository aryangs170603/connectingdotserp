//Imports of Master in DS Page
//-----------------------------------------DSHeader
import React, { useState, useEffect } from 'react';
import './MasterDSPage.css';
import ContactForm from '../Homepage/ContactForm'; 

//-----------------------------------------WhyDS

//-----------------------------------------Counsellor

//-----------------------------------------DS Modules

//-----------------------------------------Trust US
import Logos from '../Logos/Ourclients/Artboard 10.png';
import Logos1 from '../Logos/Ourclients/Artboard 11.png';
import Logos2 from '../Logos/Ourclients/Artboard 12.png';
import Logos3 from '../Logos/Ourclients/Artboard 13.png';
import Logos4 from '../Logos/Ourclients/Artboard 14.png';
import Logos5 from '../Logos/Ourclients/Artboard 15.png';
import Logos6 from '../Logos/Ourclients/Artboard 16.png';
import Logos7 from '../Logos/Ourclients/Artboard 17.png';
import Logos8 from '../Logos/Ourclients/Artboard 18.png';
import Logos9 from '../Logos/Ourclients/Artboard 19.png';
import Logos10 from '../Logos/Ourclients/Artboard 20.png';
import Logos11 from '../Logos/Ourclients/Artboard 21.png';
import Logos12 from '../Logos/Ourclients/Artboard 22.png';
import Logos13 from '../Logos/Ourclients/Artboard 23.png';
import Logos14 from '../Logos/Ourclients/Artboard 24.png';
import Logos15 from '../Logos/Ourclients/Artboard 25.png';
import Logos16 from '../Logos/Ourclients/Artboard 26.png';
import Logos17 from '../Logos/Ourclients/Artboard 40.png';
import Logos18 from '../Logos/Ourclients/Artboard 41.png';
import Logos19 from '../Logos/Ourclients/Artboard 42.png';
import Logos20 from '../Logos/Ourclients/Artboard 43.png';
import Logos21 from '../Logos/Ourclients/Artboard 44.png';
import Logos22 from '../Logos/Ourclients/Artboard 45.png';
import Logos23 from '../Logos/Ourclients/Artboard 46.png';
import Logos24 from '../Logos/Ourclients/Artboard 47.png';
import Logos25 from '../Logos/Ourclients/Artboard 48.png';
import Logos26 from '../Logos/Ourclients/Artboard 49.png';
import Logos27 from '../Logos/Ourclients/Artboard 50.png';
import Logos28 from '../Logos/Ourclients/Artboard 51.png';
import Logos29 from '../Logos/Ourclients/Artboard 52.png';

//---------------------------------------------Industry Project
  import { Carousel } from 'react-bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';

  //-------------------------------------------Faq section
  import React, { useState, useEffect } from 'react';
  import faqVideo from '../Logos/DSimages/faqvideo.mp4';

  //-------------------------------------------Related Courses

  //-------------------------------------------Fetching hooks and functionality
  
const MDSPage = ({ pageId }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showContactForm, setShowContactForm] = useState(false);
    const [course, setCourse] = useState('');

    useEffect(() => {
        fetch('/dsHeaderData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const pageData = data.pages[pageId];
                if (pageData) {
                    setData(pageData);
                } else {
                    throw new Error('Page data not found');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setError(error);
                setLoading(false);
            });
    }, [pageId]);

    const handleOpenContactForm = (courseName) => {
        setCourse(courseName);
        setShowContactForm(true);
    };

    const handleCloseContactForm = () => {
        setShowContactForm(false);
        setCourse('');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }

    if (!data) {
        return <div>No data available for the specified page.</div>;
    }


//---------------------------------------------WhyDS
  // const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch JSON data
    fetch('/Whyds.json')  // Path to your JSON file
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container-yds mx-auto p-6">
      <SectionComponent section={data.dataScience} />

    </div>
  );
  const SectionComponeUnreachable code detected.nt = ({ section }) => {
    return (
      <>
        <h1 className="text-5xl text-center mb-10 text-primary">
          <span className="text-accent">{section.title}</span>
        </h1>
        <div className="cards-container-yds grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.cards.map((card, index) => (
            <DataCard
              key={index}
              title={card.title}
              content={card.content}
              listItems={card.listItems}
            />
          ))}
        </div>
      </>
    );
  };

  const DataCard = ({ title, content, listItems }) => {
    return (
      <div className="cardClass-yds">
        <h2
          className="text-3xl font-semibold mb-3 textPrimaryClass"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <p
          className="textMutedForegroundClass mb-4"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        {listItems && (
          <ul className="list-disc list-inside textMutedForegroundClass mb-4">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  //---------------------------------------DS Modules
  const [activeTab, setActiveTab] = useState('beginner');
  const [activeModule, setActiveModule] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./curriculumdata.json');
        const data = await response.json();
        setData(data.dataScienceCurriculum);
      } catch (error) {
        console.error('Error fetching module data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleModuleClick = (moduleIndex) => {
    if (activeModule !== moduleIndex) {
      setActiveModule(moduleIndex);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveModule(0);
  };

  const activeContent = data.tabs.find(tab => tab.type === activeTab).modules[activeModule];


//---------------------------------------Trust US
  const logos1 = [
    Logos,
    Logos1,
    Logos2,
    Logos3,
    Logos4,
    Logos15,
    Logos16,
    Logos17,
    Logos18,
    Logos19
  ];

  const logos2 = [
    Logos5,
    Logos6,
    Logos7,
    Logos8,
    Logos9,
    Logos20,
    Logos21,
    Logos22,
    Logos23,
    Logos24
  ];

  const logos3 = [
    Logos10,
    Logos11,
    Logos12,
    Logos13,
    Logos14,
    Logos25,
    Logos26,
    Logos27,
    Logos28,
    Logos29
  ];

  const duplicateLogos = (logos) => {
    return [...logos, ...logos];
  }

//----------------------------------------Industry project
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [indusproData, setIndusproData] = useState(null);

  useEffect(() => {
    fetch('./indusprodata.json')  // Path to your JSON file
      .then((response) => response.json())
      .then((data) => setIndusproData(data.industryProjects))
      .catch((error) => console.error('Error fetching the data:', error));
  }, []);

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  if (!indusproData) {
    return <p>Loading...</p>;
  }


//----------------------------------------FAQ Section
  const FAQAccordion = ({ pageId }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
      fetch('/faqdata.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const pageData = data[pageId];
          if (pageData) {
            setData(pageData);
          } else {
            throw new Error('Page data not found');
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching FAQ data:', error);
          setError(error);
          setLoading(false);
        });
    }, [pageId]);

    const handleToggle = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error loading data: {error.message}</div>;
    }

    if (!data) {
      return <div>No data available for the specified page.</div>;
    }
  };

//----------------------------------------Related Courses
  const CoursesRelated = () => {
    const [relatedCourses, setRelatedCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      fetch('/relateddata.json')  // Path to your JSON file
        .then(response => response.json())
        .then(data => setRelatedCourses(data.courses.items))
        .catch(error => console.error('Error fetching related courses data:', error));
    }, []);

    useEffect(() => {
      if (showModal) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }

      return () => {
        document.body.classList.remove('modal-open');
      };
    }, [showModal]);

    const handleEnrollNowClick = (relcourse) => {
      setSelectedCourse(relcourse);
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedCourse(null);
    };

    const handleSelect = (selectedIndex) => {
      setActiveIndex(selectedIndex);
    };
  };

//----------------------------------------return() of MDSPage
  return (
    // -----------------------------------MDSHeader
    <div className="container-it-Mds-header">
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
                {data.form.inputs.map((input, index) => (
                    input.countryCode ? (
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
                    ) : (
                        <input 
                            key={index}
                            type={input.type} 
                            name={input.name} 
                            placeholder={input.placeholder} 
                            style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} 
                        />
                    )
                ))}
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
            <ContactForm onClose={handleCloseContactForm} course={course} />
        )}
    </div>

//------------------------------------WhyDS
    

//------------------------------------DS Modules
    <div className="container-it-ds-modules">
    <div className="container-ds">
      <div className="header-ds">
        <h1>{data.title}</h1>
      </div>
      <div className="tabs">
        {data.tabs.map(tab => (
          <div
            key={tab.type}
            className={`tab ${activeTab === tab.type ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.type)}
          >
            <p>{tab.type.charAt(0).toUpperCase() + tab.type.slice(1)}</p>
            <span>{tab.duration}</span>
          </div>
        ))}
      </div>
      <div className="content-container">
        <div className="content">
          {data.tabs.find(tab => tab.type === activeTab).modules.map((module, index) => (
            <div
              key={index}
              className={`module ${activeModule === index ? 'selected' : ''}`}
              onClick={() => handleModuleClick(index)}
            >
              <div className="module-header">
                <p>MODULE - {index + 1}</p>
                <h2>{module.title}</h2>
                <span>{module.duration}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="module-details-container">
          {activeContent && (
            <div className="module-details expanded">
              <h2>{activeContent.title}</h2>
              <p><strong>Duration:</strong> {activeContent.duration}</p>
              <ul>
                {activeContent.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="footer">
        <button>Download Curriculum</button>
      </div>
    </div>

  //------------------------------------Trust US
    <div className="container-it-ds">

      <div className="logos-it-ds">
        <div className="marquee-it-ds">
          <div className="marquee-content-it-ds">

            {duplicateLogos(logos1).map((src, index) => (
              <img src={src} alt={`Logo ${index}`} className="logo-it-ds" key={index} />
            ))}
          </div>
        </div>
        <div className="marquee-it-ds">
          <div className="marquee-content-it-ds">
            {duplicateLogos(logos2).map((src, index) => (
              <img src={src} alt={`Logo ${index}`} className="logo-it-ds" key={index} />
            ))}
          </div>
        </div>
        <div className="marquee-it-ds">
          <div className="marquee-content-it-ds">
            {duplicateLogos(logos3).map((src, index) => (
              <img src={src} alt={`Logo ${index}`} className="logo-it-ds" key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="info-it-ds">
        <div className="container-it-ds-title">
          <h2>ORGANISATIONS TRUST US </h2>
        </div>
        <h2 className="title-it-ds"> <span className='highlight-span-cards'>1000+</span> Organizations<br></br> TRUST US WITH THEIR <br></br>Openings</h2>
        <p className="description-it-ds">
          <span className='highlight-span-cards'>Organizations</span>, across the globe trust our students and their brilliant <span className='highlight-span-cards'>technical skills</span> in Full Stack Development, <span className='highlight-span-cards'>Data Science & Analytics with AI</span>, Java Full Stack Developer, Digital Marketing Course, AWS Cloud Technology, which results in them getting hired at excellent companies with impressive pay scales.<span className='highlight-span-cards'>Connecting Dots ERP</span>, India’s fastest-growing <span className='highlight-span-cards'>Software Training Institute</span> provides a range of IT Courses helping to shape the future of our students in every way possible. The Coding Courses provided by our Institute are highly valuable and worthy for the students.
        </p>
        <div className="statistics-it-ds">
          <div className="stat-it-ds">
            <span className="number-it-ds">1000+</span> <span className="label-it-ds">Hiring companies</span>
          </div>
          <div className="stat-it-ds">
            <span className="number-it-ds">100+</span> <span className="label-it-ds">Students already placed</span>
          </div>
        </div>
      </div>
    </div>

  //-------------------------------Industry Project
  <div className="induspro-container text-center">
    <div className="induspro-title">
      <h2>{indusproData.title}</h2>
    </div>
    <Carousel
      activeIndex={carouselIndex}
      onSelect={handleSelect}
      interval={3000} // 3 seconds interval for automatic sliding
      indicators={false}
      controls={false}
      pause="hover" // Pause the carousel on hover
    >
      <Carousel.Item>
        <div className="induspro-grid">
          {indusproData.projects.slice(0, 5).map((project, index) => (
            <div key={index} className="induspro-card">
              <div className="induspro-container">
                <img src={project.icon} alt={`${project.name} icon`} className="induspro-icon" />
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="induspro-grid">
          {indusproData.projects.slice(5, 10).map((project, index) => (
            <div key={index} className="induspro-card">
              <div className="induspro-container">
                <img src={project.icon} alt={`${project.name} icon`} className="induspro-icon" />
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </Carousel.Item>
    </Carousel>
    <div className="induspro-radio-buttons">
      <label>
        <input
          type="radio"
          name="carousel-radio"
          checked={carouselIndex === 0}
          onChange={() => handleSelect(0)}
        />
      </label>
      <label>
        <input
          type="radio"
          name="carousel-radio"
          checked={carouselIndex === 1}
          onChange={() => handleSelect(1)}
        />
      </label>
    </div>
  </div>

  //------------------------------------FAQ Section
  <div className="container-faq-ds">
    <h2>{data.title}</h2>
    <p>{data.description}</p>
    <div className="faq-content">
      <div className="faq-image">
        <video loop autoPlay muted>
          <source src={faqVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="faq-questions">
        {data.items.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              aria-expanded={expandedIndex === index}
              onClick={() => handleToggle(index)}
            >
              <span className="accordion-title">{item.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className="accordion-content"
              style={{
                opacity: expandedIndex === index ? 1 : 0,
                maxHeight: expandedIndex === index ? '9em' : 0
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

//------------------------------------Related Courses
<div className="related-courses-container text-center">
  <div className="related-courses-title">
    <h2>RELATED COURSES</h2>
  </div>
  <Carousel
    activeIndex={activeIndex}
    onSelect={handleSelect}
    interval={3000} // 3 seconds interval for automatic sliding
    indicators={false}
    controls={false}
    pause="hover" // Pause the carousel on hover
  >
    <Carousel.Item>
      <div className="related-courses-grid">
        {relatedCourses.slice(0, 5).map((relcourse, index) => (
          <div key={index} className="related-course-card" onClick={() => handleEnrollNowClick(relcourse.name)}>
            <div className="related-icon-container">
              <img src={relcourse.icon} alt={relcourse.alt} className="related-course-icon" />
            </div>
            <h3>{relcourse.name}</h3>
            <p>{relcourse.description}</p>
          </div>
        ))}
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="related-courses-grid">
        {relatedCourses.slice(5, 10).map((relcourse, index) => (
          <div key={index} className="related-course-card" onClick={() => handleEnrollNowClick(relcourse.name)}>
            <div className="related-icon-container">
              <img src={relcourse.icon} alt={relcourse.alt} className="related-course-icon" />
            </div>
            <h3>{relcourse.name}</h3>
            <p>{relcourse.description}</p>
          </div>
        ))}
      </div>
    </Carousel.Item>
  </Carousel>
  <div className="related-carousel-radio-buttons">
    <input
      type="radio"
      name="carousel-radio"
      checked={activeIndex === 0}
      onChange={() => handleSelect(0)}
    />
    <input
      type="radio"
      name="carousel-radio"
      checked={activeIndex === 1}
      onChange={() => handleSelect(1)}
    />
  </div>

  {showModal && <ContactForm onClose={handleCloseModal} course={selectedCourse} />}
</div>

    
  

    );
};   
export default MDSPage;