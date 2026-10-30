import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <nav
          className="flex justify-center gap-8 mb-8"
          aria-label="Social media links"
        >
          <a
            href="https://github.com/marusyaganza"
            className={styles.socialLink}
            aria-label="Visit GitHub profile"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mariia-ganza/"
            className={styles.socialLink}
            aria-label="Visit LinkedIn profile"
            target="_blank"
          >
            LinkedIn
          </a>
        </nav>
        <div className="font-accent text-sm opacity-70 max-w-md mx-auto leading-relaxed">
          <p>
            Built with Next.js by Mariia Ganza
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
