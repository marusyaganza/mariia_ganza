import Reveal from "@/components/Reveal/Reveal";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={`${styles.section} py-32`}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <header>
          <h2 className="font-heading font-bold text-5xl mb-16 text-center relative drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
            Close the Case
          </h2>
        </header>
        <Reveal
          className={`${styles.contactContent} text-center max-w-3xl mx-auto relative p-12 max-md:p-6`}
        >
          <span className={styles.subheading}>
            A CLEAR PROBLEM STATEMENT IS A GOOD PLACE TO START
          </span>
          <blockquote className="text-xl mb-12 opacity-90 italic space-y-3 text-balance">
            <p>
              <strong>
                Open to remote Python backend and backend-leaning fullstack
                roles.
              </strong>
            </p>
            <p>
              Strong React/TypeScript background, with a particular interest in
              cross-layer debugging and application behavior.
            </p>
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
              LinkedIn
            </a>
            <a
              href="https://github.com/marusyaganza"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              GitHub
            </a>
            <a
              href="/Mariia_Ganza_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Download CV · PDF
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
