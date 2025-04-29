// useMemo: memoizes values

// useCallback: memoizes functions

const memoizedValue = useMemo(() => expensiveCalc(a), [a]);

const memoizedFn = useCallback(() => doSomething(a), [a]);
