import type { StaticImageData } from "next/image";
import styles from "./CaseStudy.module.css";
import ZoomableImage from "./ZoomableImage";

interface ScreenStep {
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
}

interface ScreenStoryProps {
  steps: readonly ScreenStep[];
}

// A user flow told as numbered steps, one screenshot each
const ScreenStory = ({ steps }: ScreenStoryProps) => {
  return (
    <ol className={styles.screenStory}>
      {steps.map((step, index) => (
        <li key={step.title} className={styles.screenStep}>
          <div>
            <span className="mb-2 block font-accent text-[0.8rem] tracking-[1px] text-green-text">
              STEP {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-2.5 font-heading text-[1.05rem]">{step.title}</h3>
            <p className="text-[0.92rem]">{step.text}</p>
          </div>
          <ScreenShot image={step.image} alt={step.alt} />
        </li>
      ))}
    </ol>
  );
};

interface ScreenShotProps {
  image: StaticImageData;
  alt: string;
}

// Enlarges in a modal on click
export const ScreenShot = ({ image, alt }: ScreenShotProps) => {
  return (
    <ZoomableImage
      image={image}
      alt={alt}
      sizes="(max-width: 900px) 100vw, 480px"
      className={styles.screenShot}
    />
  );
};

export default ScreenStory;
