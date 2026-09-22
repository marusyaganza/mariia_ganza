"use client";

import { useEffect, useRef } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className={`${styles.section} py-32`}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <header>
          <h2 className="font-heading font-bold text-5xl mb-16 text-center relative drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
            Close the Case
          </h2>
        </header>
        <div
          ref={contactRef}
          className={`${styles.contactContent} ${styles.fadeIn} text-center max-w-3xl mx-auto relative p-12 max-md:p-6`}
        >
          <span className={styles.subheading}>
            A CLEAR PROBLEM STATEMENT IS A GOOD PLACE TO START
          </span>
          <blockquote className="text-xl mb-12 opacity-90 italic">
            Open to remote backend-leaning fullstack roles and clearly scoped
            technical contract work. Available for scheduled collaboration
            across US and European time zones.
          </blockquote>
          <div className={styles.buttons}>
            <a
              href="mailto:mariia_ganza@protonmail.com"
              className={styles.button}
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/mariia-ganza"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Linkedin
            </a>
            <a
              href="https://github.com/marusyaganza"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Github
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
