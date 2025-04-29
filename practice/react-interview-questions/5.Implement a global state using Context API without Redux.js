// context.js
const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

// Usage
const { user } = useContext(AppContext);
