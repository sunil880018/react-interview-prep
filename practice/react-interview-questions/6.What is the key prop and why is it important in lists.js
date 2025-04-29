// Answer: key helps React identify which items have changed, been added, or removed.

// Wrong (index as key can cause UI bugs):

// wrong way
{
  items.map((item, i) => <li key={i}>{item.name}</li>);
}

// correct way
{
  items.map((item) => <li key={item.id}>{item.name}</li>);
}
