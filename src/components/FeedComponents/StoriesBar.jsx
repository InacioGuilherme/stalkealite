import styles from "./StoriesBar.module.css";
import avatar from "../../assets/perfil-sem-foto.jpeg";

const STORIES = [
  { name: "Dav*****", type: "locked" },
  { name: "Fel*****", type: "locked" },
  { name: "Lar*****", type: "locked" },
  { name: "Cam*****", type: "locked" },
  { name: "Isa*****", type: "locked" },
  { name: "Gab*****", type: "locked" },
  { name: "Dan*****", type: "locked" },
  { name: "Mat*****", type: "locked" },
  { name: "Vit*****", type: "locked" },
  { name: "Car*****", type: "locked" },
];

export default function StoriesBar() {
  return (
    <section className={styles.storiesWrapper}>
      <div className={styles.storiesContainer}>

        {/* SEU STORY */}
        <div className={styles.storyItem}>
          <button className={styles.storyButton}>
            <div className={`${styles.storyRing} ${styles.self}`}>
              <div className={styles.storyAvatar}>
                <img src={avatar} alt="Seu story" />
              </div>
              <div className={styles.addStory}>
                <span>+</span>
              </div>
            </div>
          </button>
          <span className={styles.storyUsername}>Seu story</span>
        </div>

        {/* STORIES FAKE (IG-LIKE) */}
        {STORIES.map((story, index) => (
          <div className={styles.storyItem} key={index}>
            <button className={styles.storyButton}>
              <div className={`${styles.storyRing} ${styles[story.type]}`}>
                <div className={styles.storyAvatar}>
                  <img src={avatar} alt={story.name} />
                </div>
              </div>
            </button>
            <span className={styles.storyUsername}>{story.name}</span>
          </div>
        ))}

      </div>
    </section>
  );
}