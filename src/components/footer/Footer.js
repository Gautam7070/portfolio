import React, { useContext, useState, useEffect } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const [lastUpdated, setLastUpdated] = useState("Jan 31, 2026"); // Fallback date

  useEffect(() => {
    fetch("https://api.github.com/repos/Gautam7070/portfolio/commits?per_page=1")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const date = new Date(data[0].commit.committer.date);
          const options = { year: "numeric", month: "short", day: "numeric" };
          setLastUpdated(date.toLocaleDateString("en-US", options));
        }
      })
      .catch((err) => {
        console.error("Error fetching last updated date:", err);
      });
  }, []);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Last updated on {lastUpdated}
        </p>
      </div>
    </Fade>
  );
}
