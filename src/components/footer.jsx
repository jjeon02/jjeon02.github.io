import { IconExternalLink } from '../components/icons';
import { IconCopy } from '../components/icons';

import { useState } from 'react';

const EMAIL = 'june.jeon@gmail.com';

function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <footer>
      <section>
        <div className="list-wrapper">
          <h2 className="list-light-line center all-cap list-title">Let's Keep Connected</h2>
          <div className="list list-light-line">
            <p className="list-first">Email</p>
            <p onClick={handleCopy} className='btn-txt'>
              {EMAIL} <IconCopy /></p>
          </div>
          <div className="list list-light-line">
            <p className="list-first">Linkedin </p>
            <p>
              <a className="btn-txt btn-txt-light" href="https://www.linkedin.com/in/jueun-jeon/" target="_blank" rel="noreferrer">
              jueun-jeon <IconExternalLink />
            </a>
            </p>
          </div>
        </div>
      </section>
      <p>{copied && <span className="copied-message">Copied to clipboard!</span>}</p>
    </footer>
  );
}

export default Footer;
