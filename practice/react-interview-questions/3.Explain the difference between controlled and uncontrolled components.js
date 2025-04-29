// Controlled: Form inputs controlled by state.

// Uncontrolled: Accessed via refs.

// Controlled Example:
const [value, setValue] = useState('');
<input value={value} onChange={(e) => setValue(e.target.value)} />;

// Uncontrolled Example:
const inputRef = useRef();
<input ref={inputRef} />;
