import React, { useEffect } from 'react';
import './sapmod.css';

const SapMod = () => {
  const updateScroller = () => {
    const section = document.querySelector('.scroll-content');
    const sectionHeight = section.scrollHeight;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Calculate the scroll position relative to the section
    const scrollPosition = scrollY - sectionTop;
    const maxScrollableHeight = sectionHeight - viewportHeight;

    // Ensure that the progress only reaches 100% when the bottom of the section is in view
    const scrollPercentage = Math.round(
      (scrollPosition / maxScrollableHeight) * 100
    );

    const progress = Math.max(0, Math.min(scrollPercentage, 100));

    // Update the progress text
    document.querySelector('.scroll-mask-one').textContent = `${progress}%`;
    document.querySelector('.scroll-mask-two').textContent = `${progress}%`;

    // Hide the progress text if the user scrolls past the section
    if (scrollY > sectionTop + sectionHeight) {
      document.querySelector('.scroll-mask-one').style.display = 'none';
      document.querySelector('.scroll-mask-two').style.display = 'none';
    } else {
      document.querySelector('.scroll-mask-one').style.display = 'block';
      document.querySelector('.scroll-mask-two').style.display = 'block';
    }

    // Show/hide the scroll button based on scroll position
    if (scrollPosition > 0.2 * sectionHeight) {
      document.querySelector('.scroll-button').style.opacity = '1';
    } else {
      document.querySelector('.scroll-button').style.opacity = '0';
    }
  };
  

  useEffect(() => {
    window.addEventListener('scroll', updateScroller);
    window.addEventListener('resize', updateScroller);
    updateScroller();

    return () => {
      window.removeEventListener('scroll', updateScroller);
      window.removeEventListener('resize', updateScroller);
    };
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-ruler">
        <div className="scroll-mask-one">0%</div>
        <div className="scroll-mask-two">0%</div>
        <div className="scroll-lines">
          {[...Array(25)].map((_, index) => (
            <span key={index}></span>
          ))}
        </div>
      </div>

      <div className="scroll-content">
        <div className="scroll-line-top"></div>

        <div className="scroll-article">
          <h1>Dune</h1>
          <p>A beginning is the time for taking the most delicate care...</p>
          <p>—from "Manual of Muad'Dib" by the Princess Irulan</p>
          <p>In the week before their departure to Arrakis...</p>
          <p>—from "The Fellowship of the Ring" by J.R.R. Tol</p>
          <p>A beginning is the time for taking the most delicate care...</p>
          <p>—from "Manual of Muad'Dib" by the Princess Irulan</p>
          <p>In the week before their departure to Arrakis...</p>
          <p>—from "The Fellowship of the Ring" by J.R.R. Tol</p>
          <p>A beginning is the time for taking the most delicate care...</p>
          <p>—from "Manual of Muad'Dib" by the Princess Irulan</p>
          <p>In the week before their departure to Arrakis...</p>
          <p>—from "The Fellowship of the Ring" by J.R.R. Tol</p>
          <p>A beginning is the time for taking the most delicate care...</p>
          <p>—from "Manual of Muad'Dib" by the Princess Irulan</p>
          <p>In the week before their departure to Arrakis...</p>
          <p>—from "The Fellowship of the Ring" by J.R.R. Tol</p>
          <p>A beginning is the time for taking the most delicate care...</p>
          <p>—from "Manual of Muad'Dib" by the Princess Irulan</p>
          <p>In the week before their departure to Arrakis...</p>
          <p>—from "The Fellowship of the Ring" by J.R.R. Tol</p>
          <p>A beginning is the time for taking the most delicate care...</p>
          <p>—from "Manual of Muad'Dib" by the Princess Irulan</p>
          <p>In the week before their departure to Arrakis...</p>
          <p>—from "The Fellowship of the Ring" by J.R.R. Tol</p>
          <p>A beginning is the time for taking the most delicate care...</p>
          <p>—from "Manual of Muad'Dib" by the Princess Irulan</p>
          <p>In the week before their departure to Arrakis...</p>
          <p>—from "The Fellowship of the Ring" by J.R.R. Tol</p>
          <p>A beginning is the time for taking the most delicate care...</p>
          <p>—from "Manual of Muad'Dib" by the Princess Irulan</p>
          <p>In the week before their departure to Arrakis...</p>
          <p>—from "The Fellowship of the Ring" by J.R.R. Tol</p>
          <p>A beginning is the time for taking the most delicate care...</p>
          <p>—from "Manual of Muad'Dib" by the Princess Irulan</p>
          <p>In the week before their departure to Arrakis...</p>
          <p>—from "The Fellowship of the Ring" by J.R.R. Tol</p>
          <p>A beginning is the time for taking the most delicate care...</p>
          <p>—from "Manual of Muad'Dib" by the Princess Irulan</p>
          <p>In the week before their departure to Arrakis...</p>
          <p>—from "The Fellowship of the Ring" by J.R.R. Tol</p>
          <p>A beginning is the time for taking the most delicate care...</p>
          <p>—from "Manual of Muad'Dib" by the Princess Irulan</p>
          <p>In the week before their departure to Arrakis...</p>
          <p>—from "The Fellowship of the Ring" by J.R.R. Tol</p>
          <p>A beginning is the time for taking the most delicate care...</p>
          <p>—from "Manual of Muad'Dib" by the Princess Irulan</p>
          <p>In the week before their departure to Arrakis...</p>
          <p>—from "The Fellowship of the Ring" by J.R.R. Tol</p>
          {/* Add more content here as needed */}
          <a
            href="https://www.penguinrandomhouse.ca/books/352036/dune-by-frank-herbert/9780441013593/excerpt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Excerpt from Dune by Frank Herbert
          </a>
        </div>

        <div className="scroll-line-bottom"></div>
      </div>

      <a className="scroll-button" href="#main">
        <div className="scroll-rectangles">
          {[...Array(8)].map((_, index) => (
            <div className="scroll-rectangle" key={index}></div>
          ))}
        </div>
        <span className="scroll-text">Throttle up</span>
      </a>
    </div>
  );
};

export default SapMod;
