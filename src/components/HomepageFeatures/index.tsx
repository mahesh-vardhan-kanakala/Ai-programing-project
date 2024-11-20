import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Learning Modules',
    description: 'From AI fundamentals to advanced applications, our structured content caters to all skill levels.',
  },
  {
    title: 'Practical Guides',
    description: 'Step-by-step tutorials for popular AI tools and real-world development scenarios.',
  },
  {
    title: 'Interactive Projects',
    description: 'Hands-on learning with project-based challenges and real-time feedback.',
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('feature-card')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="features">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}