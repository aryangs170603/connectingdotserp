import React, { useState, useEffect, useRef } from "react";
import "./Menubar.css";
import { IoKeypadOutline, IoFlaskOutline, IoQrCodeOutline, IoCameraOutline, IoBicycleOutline } from "react-icons/io5";

const Menubar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef(null);

  const menuItems = [
    { icon: <IoKeypadOutline />, color: "#f44336" },
    { icon: <IoFlaskOutline />, color: "#ffa117" },
    { icon: <IoQrCodeOutline />, color: "#0fc70f" },
    { icon: <IoCameraOutline />, color: "#2196f3" },
    { icon: <IoBicycleOutline />, color: "#b145e9" },
  ];

  useEffect(() => {
    const activeItem = document.querySelector(".navigation ul li.active");
    if (activeItem && indicatorRef.current) {
      indicatorRef.current.style.left = `${activeItem.offsetLeft + activeItem.clientWidth / 2 - indicatorRef.current.clientWidth / 2}px`;
    }
  }, [activeIndex]);

  return (
    <div className="navigation">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`list ${activeIndex === index ? "active" : ""}`}
            style={{ "--clr": item.color }}
            onClick={() => setActiveIndex(index)}
          >
            <a href="#">
              <span className="icon">
                {item.icon}
              </span>
            </a>
          </li>
        ))}
        <div className="indicator" ref={indicatorRef}></div>
      </ul>
    </div>
  );
};

export default Menubar;
