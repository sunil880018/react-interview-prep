// How does React prevent unnecessary re-renders?
// Answer: React avoids unnecessary re-renders via:

// React.memo() for functional components.

// shouldComponentUpdate() in class components.

// useMemo and useCallback to memoize values/functions.

const MemoizedComponent = React.memo(({ data }) => {
  console.log('Rendered');
  return <div>{data}</div>;
});
