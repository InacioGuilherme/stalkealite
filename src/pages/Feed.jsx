import FeedHeader from "../components/FeedComponents/FeedHeader";
import StoriesBar from "../components/FeedComponents/StoriesBar";
import FeedPost from "../components/FeedComponents/FeedPost";
import BottomNav from "../components/FeedComponents/BottomNav";
import TrialBanner from "../components/TrialComponents/TrialBanner";
import "./Feed.css";

import avChat2 from "../assets/feed/chat2.png";
import avChat1 from "../assets/feed/chat1.png";
import avChat3 from "../assets/feed/chat3.png";
import av7 from "../assets/feed/av-fallback-7.jpg";
import av3 from "../assets/feed/av-fallback-3.jpg";
import av9 from "../assets/feed/av-fallback-9.jpg";

const POSTS = [
  { username: "And*****", avatar: avChat2, likes: 204, comments: 73, time: "Agora" },
  { username: "Jo*****", avatar: avChat1, likes: 89, comments: 32, time: "23 min" },
  { username: "\u{1D56D}\u{1D597}\u{1D59A}****", avatar: avChat3, likes: 312, comments: 41, time: "1 h" },
  { username: "Mel*****", avatar: av7, likes: 156, comments: 28, time: "3 h" },
  { username: "Ped*****", avatar: av3, likes: 67, comments: 15, time: "5 h" },
  { username: "The*****", avatar: av9, likes: 421, comments: 89, time: "8 h" },
];

export default function Feed() {
  return (
    <div className="feed-page">
      <FeedHeader />

      <main className="feed-content">
        <StoriesBar />
        {POSTS.map((post, index) => (
          <FeedPost
            key={index}
            username={post.username}
            avatar={post.avatar}
            likes={post.likes}
            comments={post.comments}
            time={post.time}
          />
        ))}
      </main>

      <TrialBanner />
      <BottomNav />
    </div>
  );
}