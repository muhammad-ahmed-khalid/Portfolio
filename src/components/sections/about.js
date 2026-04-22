import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import MeImage from "../../images/AhmedKhalid.jpg";

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 0px;
        left: 0px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      // mix-blend-mode: multiply;
      // filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['React Native', 'React.js', 'JavaScript (ES6+)', 'TypeScript', "REST APIs", "GIT", "Tailwind CSS", "ShadCN UI"];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I'm Mohammad Ahmed Khalid, a Frontend Engineer with 4.5+ years of experience building scalable web and mobile applications. I specialize in the React and React Native ecosystem, focusing on delivering seamless, high-performance user experiences.</p>


            <p>Currently at  <a href="https://koderlabs.com/">Koderlabs</a>, I work on creating accessible, maintainable, and user-centric digital products. Beyond coding, I focus on performance optimization and mentoring developers to ensure high-quality, scalable systems.
            </p>
            <p>What I bring to the table:</p>
            <ul>
              <li><b>Real-Time Collaboration:</b> Experience in solving complex synchronization problems and building
                real-time collaborative platforms.</li>
              <li><b>Mobile Mastery:</b> Strong expertise in React Native, optimizing app performance, handling complex state management, and delivering smooth cross-platform experiences.</li>
              <li><b>Performance First:</b> Focused on efficient data handling, optimized rendering, and network-aware architectures to ensure fast and responsive applications.</li>
            </ul>

            {/* <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://koderlabs.com/">a huge corporation</a>,{' '}
              <a href="https://ptax.tax/">a start-up</a>,{' '}
              <a href="https://artt.edu.pk/">a school</a>, and{' '}
              <a href="https://finesols.com/">a software & design agency</a>. Currently, my primary goal at <a href="https://koderlabs.com/">Kodelrabs</a> is to construct inclusive and accessible digital products and experiences for diverse clients
            </p> */}

          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img
              className="img"
              src={MeImage}
              width={500}
              quality={95}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
