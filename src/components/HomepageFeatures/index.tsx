import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  route: string
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Part 1',
    route: 'part-one/variables',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>Variable & Deklaration</p>
        <p>Variabletypen</p>
        <p>Operands</p>
      </>
    ),
  },
  {
    title: 'Part 2',
    route: 'part-two/conditionals',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <p>Conditionals</p>
        <p>Functions</p>
        <p>Loops</p>
      </>
    ),
  },
  {
    title: 'Part 3',
    route: 'part-three/arrays',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <p>Arrays</p>
        <p>Built-in array methods</p>
        <p>Objects</p>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  if (window?.location?.href?.split('/')?.slice(-1)?.[0] === 'intro') {
    window?.localStorage?.setItem('intro','seen')
  }
  const introSeen = window?.localStorage?.getItem('intro') === 'seen'
  return (
    <section className={styles.features}>
      <div className="container">
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          {FeatureList.map((props, idx) => (
            <Link className={styles['outline-button']} to={`./docs/${ introSeen ? props.route : 'intro'}`}>
              <Feature key={idx} {...props} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
