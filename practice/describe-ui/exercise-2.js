// receiving props

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    // passing props
    <div>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          size: '100',
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          size: '100',
        }}
      />
      <Avatar
        size={50}
        person={{
          name: 'Lin Lanying',
          size: '100',
        }}
      />
    </div>
  );
}
