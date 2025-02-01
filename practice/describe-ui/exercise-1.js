// Using a component

function Profile() {
  const avatar = 'https://i.imgur.com/MK3eW3Am.jpg';
  const description = 'Katherine Johnson';
  return <img src={avatar} alt={description} />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
