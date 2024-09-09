import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const footerData = {
  useCases: [
    "UI design",
    "UX design",
    "Wireframing",
    "Diagramming",
    "Brainstorming",
    "Online whiteboard",
    "Team collaboration",
  ],
  explore: [
    "Design",
    "Prototyping",
    "Development features",
    "Design systems",
    "Collaboration features",
    "Design process",
    "FigJam",
  ],
  resources: [
    "Blog",
    "Best practices",
    "Colors",
    "Color wheel",
    "Support",
    "Developers",
    "Resource library",
  ],
};

const Footer = () => {
  return (
    <div className="footer p-5 min-h-[300px] w-full bg-black flex gap-24 justify-evenly sticky bottom-0 flex-wrap">
      <section className="flex flex-col gap-3 footer-item">
        <h6 className="text-2xl font-bold text-white">Follow us</h6>
        <div className="social-icons flex gap-3">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="h-8 text-blue-500" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-8 text-white" />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className="h-8 text-red-600" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-8 text-sky-700" />
          </a>
        </div>
      </section>
      <section className="flex flex-col gap-3 text-white footer-item">
        <h6 className="text-2xl font-bold text-white">Use Cases</h6>
        <div className="flex flex-col gap-2">
          {footerData.useCases.map((i, index) => (
            <Link key={index} className="hover:underline" to="">
              {i}
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-3 text-white footer-item">
        <h6 className="text-2xl font-bold text-white">Explore</h6>
        <div className="flex flex-col gap-2">
          {footerData.explore.map((i, index) => (
            <Link key={index} className="hover:underline" to="">
              {i}
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-3 text-white">
        <h6 className="text-2xl font-bold text-white">Resources</h6>
        <div className="flex flex-col gap-2">
          {footerData.resources.map((i, index) => (
            <Link key={index} className="hover:underline" to="">
              {i}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Footer;
