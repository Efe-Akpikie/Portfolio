import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const [copied, setCopied] = useState('');

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 1500);
  };

  return (
    <footer className="w-full bg-black/90 text-white py-6 flex justify-center gap-6 items-center fixed bottom-0 left-0 z-50">
      <a
        href="https://github.com/Efe-Akpikie"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-white"
      >
        <FaGithub size={24} />
      </a>

      <a
        href="https://www.linkedin.com/in/efe-akpikie/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-white"
      >
        <FaLinkedin size={24} />
      </a>

      <button
        onClick={() => handleCopy('eakpikie@example.com', 'email')}
        aria-label="Copy Email"
        className="hover:text-white focus:outline-none"
      >
        <FaEnvelope size={24} />
      </button>

      <button
        onClick={() => handleCopy('+1234567890', 'phone')}
        aria-label="Copy Phone"
        className="hover:text-white focus:outline-none"
      >
        <FaPhone size={24} />
      </button>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
        className="hover:text-white"
      >
        <FaFilePdf size={24} />
      </a>

      {/* Optional "Copied!" text */}
      {copied && (
        <span className="text-green-400 text-sm absolute bottom-[4.5rem]">
          {copied === 'email' ? 'Email copied!' : 'Phone copied!'}
        </span>
      )}

    </footer>
  );
};

export default Footer;
