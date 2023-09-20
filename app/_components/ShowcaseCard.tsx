import styles from '../styles/Showcase.module.scss';
// import Image from 'next/image';
interface ShowcaseCardProps {
  entries: {
    title: string;
  };
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ entries }) => {
  return (
    <div className={styles.ShowcaseCard}>
      <div className={styles.ShowcaseCardImg}>
        <img alt="julian aijal" src="https://placehold.co/600x400?text=kthnxbye" height={185} width={328} />
      </div>
      <div className={styles.ShowcaseCardCta}>
        <p>{entries.title}</p>
      </div>
    </div>
  );
};

export default ShowcaseCard;