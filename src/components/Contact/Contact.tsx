"use client";

import { useEffect, useRef, useCallback } from "react";
import { useAudio } from "../../hooks/useAudio";
import styles from "./Contact.module.css";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const { play: playEnter } = useAudio("/sound/enter.wav", {
    volume: 0.4,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  const handlePlayEnter = useCallback(() => {
    playEnter();
  }, [playEnter]);

  return (
    <section id="contact" className={`${styles.section} py-32`}>
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <header>
          <h2 className="font-heading font-bold text-5xl mb-16 text-center relative drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
            Close the Case
          </h2>
        </header>
        <div
          ref={contactRef}
          className={`${styles.contactContent} ${styles.fadeIn} text-center max-w-3xl mx-auto relative p-12`}
        >
          <blockquote className="text-xl mb-12 opacity-90 italic">
            &ldquo;Every great detective knows that the best cases come from
            unexpected places. Got a digital mystery that needs solving?
            Let&apos;s crack it together.&rdquo;
          </blockquote>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactButton} py-6 px-12`}
            onClick={handlePlayEnter}
            aria-label="Download CV to start investigation"
          >
            Start Investigation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
