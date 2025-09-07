import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <nav
          className="flex justify-center gap-8 mb-8"
          aria-label="Social media links"
        >
          <a
            href="#"
            className={styles.socialLink}
            aria-label="Visit GitHub profile"
          >
            GitHub
          </a>
          <a
            href="#"
            className={styles.socialLink}
            aria-label="Visit LinkedIn profile"
          >
            LinkedIn
          </a>
        </nav>
        <div className="font-accent text-sm opacity-70 max-w-md mx-auto leading-relaxed">
          <p>
            Built with Next.js by Your Name
            <br />
            <span className="text-green-light">★</span> Another case closed{" "}
            <span className="text-green-light">★</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
