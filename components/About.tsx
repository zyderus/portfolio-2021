import styles from '@/assets/styles/About.module.scss';

const techList = [
  'JavaScript',
  'TypeScript',
  'Node',
  'Express',
  'React',
  'Next',
  'SQL',
  'MongoDB',
];

export default function About() {
  return (
    <section id='about' className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        <p>
          Hi! I am Rustam and I enjoy creating attractive, human-friendly apps
          that brighten up the day. My interest in application development
          started back in 1998. Then, as a student, I grokked HTML and CGI
          scripts to built a personal web page with a guestbook. It was hideous,
          but somehow functional. However, in the following few years, my career
          path had not steered towards the code. I went from business consulting
          to artist management, construction recruiting, logistics. Fast-forward
          to 2018, and out of nowhere, I have an encounter with Arduino with its
          idea of C++. My head made a few blips and clicks and the rest is
          history.
        </p>
        <p>
          Today, I use the following set of tools to create beautiful,
          convenient and conversion-oriented applications:
        </p>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            {techList.map((item, idx) => (
              <li key={idx} className={styles.li}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
