export default function PostCard({ title, body, tags, reactions, views }) {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="engage">
        <div>#{tags}</div>
        <div>
          👍 {reactions.likes} | 👎 {reactions.dislikes} | 👁️ {views}
        </div>
      </div>
    </div>
  );
}
