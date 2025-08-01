import './styles.css';
import PostCard from './PostCard.js'; 
import postsData from './postsData.js';

export default function BlogPosts() {
  return (
    <div>
      <h2>Blog Posts</h2>
      {postsData.map((card) => (
        <PostCard
          key={card.id}
          title={card.title}
          body={card.body}
          tags={card.tags}
          reactions={card.reactions}
          views={card.views}
        />
      ))}
    </div>
  );
}
