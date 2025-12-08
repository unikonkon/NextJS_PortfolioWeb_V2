# 📚 คู่มือ React Hooks & Next.js Hooks ฉบับสมบูรณ์

เอกสารนี้รวบรวมการใช้งาน Hooks ที่นิยมใน React และ Next.js พร้อมตัวอย่างโค้ดและคำอธิบายภาษาไทย

---

## 📖 สารบัญ

- [Part 1: React Hooks](#part-1-react-hooks)
  - [useState](#1-usestate)
  - [useEffect](#2-useeffect)
  - [useContext](#3-usecontext)
  - [useRef](#4-useref)
  - [useMemo](#5-usememo)
  - [useCallback](#6-usecallback)
  - [useReducer](#7-usereducer)
  - [Custom Hooks](#8-custom-hooks)
- [Part 2: Next.js Hooks](#part-2-nextjs-hooks)
  - [useRouter](#1-userouter)
  - [useParams](#2-useparams)
  - [useSearchParams](#3-usesearchparams)
  - [usePathname](#4-usepathname)
- [สรุปตาราง Hooks](#สรุปตาราง-hooks)
- [แหล่งอ้างอิง](#แหล่งอ้างอิง)

---

# Part 1: React Hooks

React Hooks คือฟังก์ชันที่ช่วยให้ Functional Components สามารถใช้งาน state และ lifecycle features ได้ โดยไม่ต้องเขียนเป็น Class Component ถูกเปิดตัวใน React 16.8

## 1. useState

### 📝 คำอธิบาย
`useState` ใช้สำหรับประกาศ state variable ใน functional component ทำให้ component สามารถเก็บและอัปเดตข้อมูลได้

### 🔧 Syntax
```javascript
const [state, setState] = useState(initialValue);
```

- `state` - ค่าปัจจุบันของ state
- `setState` - ฟังก์ชันสำหรับอัปเดต state
- `initialValue` - ค่าเริ่มต้นของ state

### 💡 ตัวอย่างการใช้งาน

**ตัวอย่างที่ 1: Counter พื้นฐาน**
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>คุณคลิกไปแล้ว {count} ครั้ง</p>
      <button onClick={() => setCount(count + 1)}>
        เพิ่ม
      </button>
    </div>
  );
}
```

**ตัวอย่างที่ 2: Multiple States**
```jsx
import { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="ชื่อ"
      />
      <input 
        type="number"
        value={age} 
        onChange={(e) => setAge(Number(e.target.value))} 
        placeholder="อายุ"
      />
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Active' : 'Inactive'}
      </button>
    </div>
  );
}
```

**ตัวอย่างที่ 3: State เป็น Object**
```jsx
import { useState } from 'react';

function Profile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: 'user'
  });

  const updateName = (newName) => {
    setUser(prevUser => ({
      ...prevUser,  // spread operator เพื่อคงค่าเดิม
      name: newName
    }));
  };

  return (
    <input 
      value={user.name}
      onChange={(e) => updateName(e.target.value)}
    />
  );
}
```

**ตัวอย่างที่ 4: State เป็น Array**
```jsx
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>เพิ่ม</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>ลบ</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### ⚠️ ข้อควรระวัง
- อย่าเรียก `useState` ภายใน loops, conditions, หรือ nested functions
- ใช้ functional update เมื่อค่าใหม่ขึ้นอยู่กับค่าก่อนหน้า: `setCount(prev => prev + 1)`
- State updates เป็น asynchronous

---

## 2. useEffect

### 📝 คำอธิบาย
`useEffect` ใช้สำหรับจัดการ side effects ใน functional components เช่น การ fetch data, การ subscribe/unsubscribe, การเปลี่ยนแปลง DOM, timers เป็นต้น

### 🔧 Syntax
```javascript
useEffect(() => {
  // Effect code
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

### 💡 ตัวอย่างการใช้งาน

**ตัวอย่างที่ 1: รันทุกครั้งที่ render**
```jsx
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `คุณคลิกไปแล้ว ${count} ครั้ง`;
  }); // ไม่มี dependency array = รันทุกครั้ง

  return (
    <button onClick={() => setCount(count + 1)}>
      คลิก
    </button>
  );
}
```

**ตัวอย่างที่ 2: รันครั้งเดียวตอน Mount (componentDidMount)**
```jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data เมื่อ component mount
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []); // Empty array = รันครั้งเดียว

  if (loading) return <p>กำลังโหลด...</p>;
  
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

**ตัวอย่างที่ 3: รันเมื่อ dependencies เปลี่ยน**
```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch ใหม่เมื่อ userId เปลี่ยน
    fetch(`https://api.example.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]); // รันเมื่อ userId เปลี่ยน

  return user ? <h1>{user.name}</h1> : <p>Loading...</p>;
}
```

**ตัวอย่างที่ 4: Cleanup Function (componentWillUnmount)**
```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup: ล้าง interval เมื่อ component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>เวลาผ่านไป: {seconds} วินาที</p>;
}
```

**ตัวอย่างที่ 5: Event Listener**
```jsx
import { useState, useEffect } from 'react';

function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <p>ขนาดหน้าต่าง: {size.width} x {size.height}</p>
  );
}
```

**ตัวอย่างที่ 6: Async/Await ใน useEffect**
```jsx
import { useState, useEffect } from 'react';

function DataFetcher({ url }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false; // Flag สำหรับ cancel

    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        
        if (!ignore) {
          setData(json);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      }
    }

    fetchData();

    return () => {
      ignore = true; // Cancel เมื่อ unmount
    };
  }, [url]);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

### 📊 สรุป Dependency Array

| Dependency | พฤติกรรม |
|------------|----------|
| ไม่มี `[]` | รันทุกครั้งที่ render |
| `[]` (empty) | รันครั้งเดียวตอน mount |
| `[a, b]` | รันเมื่อ a หรือ b เปลี่ยน |

---

## 3. useContext

### 📝 คำอธิบาย
`useContext` ใช้สำหรับรับค่าจาก React Context โดยไม่ต้อง prop drilling (ส่ง props ลงไปหลายชั้น)

### 🔧 Syntax
```javascript
const value = useContext(MyContext);
```

### 💡 ตัวอย่างการใช้งาน

**ตัวอย่างที่ 1: Theme Context**
```jsx
import { createContext, useContext, useState } from 'react';

// 1. สร้าง Context
const ThemeContext = createContext();

// 2. สร้าง Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. สร้าง Custom Hook (optional แต่แนะนำ)
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// 4. ใช้งานใน Component
function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header style={{ 
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff'
    }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        เปลี่ยนเป็น {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  );
}

// 5. Wrap App ด้วย Provider
function App() {
  return (
    <ThemeProvider>
      <Header />
      {/* Other components */}
    </ThemeProvider>
  );
}
```

**ตัวอย่างที่ 2: Auth Context**
```jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

// ใช้งาน
function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <>
          <span>สวัสดี, {user.name}</span>
          <button onClick={logout}>ออกจากระบบ</button>
        </>
      ) : (
        <a href="/login">เข้าสู่ระบบ</a>
      )}
    </nav>
  );
}
```

---

## 4. useRef

### 📝 คำอธิบาย
`useRef` ใช้สำหรับเก็บค่าที่ไม่ต้องการให้ trigger re-render เมื่อเปลี่ยนแปลง หรือใช้เข้าถึง DOM element โดยตรง

### 🔧 Syntax
```javascript
const refContainer = useRef(initialValue);
// เข้าถึงค่าผ่าน refContainer.current
```

### 💡 ตัวอย่างการใช้งาน

**ตัวอย่างที่ 1: เข้าถึง DOM Element**
```jsx
import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="พิมพ์ที่นี่" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

**ตัวอย่างที่ 2: เก็บค่าก่อนหน้า**
```jsx
import { useState, useRef, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>ปัจจุบัน: {count}, ก่อนหน้า: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
    </div>
  );
}
```

**ตัวอย่างที่ 3: เก็บ Timer ID**
```jsx
import { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <div>
      <p>เวลา: {time} วินาที</p>
      <button onClick={start}>เริ่ม</button>
      <button onClick={stop}>หยุด</button>
      <button onClick={reset}>รีเซ็ต</button>
    </div>
  );
}
```

**ตัวอย่างที่ 4: Video Player**
```jsx
import { useRef, useState } from 'react';

function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <video ref={videoRef} src={src} width="400" />
      <button onClick={togglePlay}>
        {isPlaying ? 'หยุด' : 'เล่น'}
      </button>
    </div>
  );
}
```

### ⚠️ ข้อแตกต่างระหว่าง useRef vs useState

| useRef | useState |
|--------|----------|
| เปลี่ยน `.current` ไม่ trigger re-render | เปลี่ยน state จะ trigger re-render |
| เหมาะสำหรับเก็บค่าที่ไม่ต้องแสดงผล | เหมาะสำหรับค่าที่ต้องแสดงผล |
| ค่าคงอยู่ระหว่าง renders | ค่าคงอยู่ระหว่าง renders |

---

## 5. useMemo

### 📝 คำอธิบาย
`useMemo` ใช้สำหรับ memoize (cache) ผลลัพธ์ของการคำนวณที่หนัก เพื่อป้องกันการคำนวณซ้ำทุกครั้งที่ render

### 🔧 Syntax
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 💡 ตัวอย่างการใช้งาน

**ตัวอย่างที่ 1: การคำนวณที่หนัก**
```jsx
import { useState, useMemo } from 'react';

function ExpensiveCalculation({ numbers }) {
  const [filter, setFilter] = useState('');

  // จะคำนวณใหม่เฉพาะเมื่อ numbers เปลี่ยน
  const sum = useMemo(() => {
    console.log('กำลังคำนวณผลรวม...');
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  return (
    <div>
      <input 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)}
        placeholder="พิมพ์อะไรก็ได้"
      />
      <p>ผลรวม: {sum}</p>
    </div>
  );
}
```

**ตัวอย่างที่ 2: Filter และ Sort**
```jsx
import { useState, useMemo } from 'react';

function ProductList({ products }) {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredAndSortedProducts = useMemo(() => {
    console.log('กำลัง filter และ sort...');
    
    return products
      .filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'price') return a.price - b.price;
        return 0;
      });
  }, [products, search, sortBy]);

  return (
    <div>
      <input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        placeholder="ค้นหาสินค้า"
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">เรียงตามชื่อ</option>
        <option value="price">เรียงตามราคา</option>
      </select>
      <ul>
        {filteredAndSortedProducts.map(product => (
          <li key={product.id}>{product.name} - {product.price} บาท</li>
        ))}
      </ul>
    </div>
  );
}
```

### ⚠️ เมื่อไหร่ควรใช้ useMemo
- การคำนวณที่ใช้เวลานาน (loop ข้อมูลมากๆ)
- การ filter/sort array ขนาดใหญ่
- อย่าใช้กับการคำนวณง่ายๆ เพราะ overhead ของ useMemo อาจแพงกว่า

---

## 6. useCallback

### 📝 คำอธิบาย
`useCallback` ใช้สำหรับ memoize function เพื่อป้องกันการสร้าง function ใหม่ทุกครั้งที่ render มีประโยชน์เมื่อส่ง function เป็น props ให้ child component

### 🔧 Syntax
```javascript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

### 💡 ตัวอย่างการใช้งาน

**ตัวอย่างที่ 1: ป้องกัน Unnecessary Re-render**
```jsx
import { useState, useCallback, memo } from 'react';

// Child component ที่ถูก memo
const Button = memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // ไม่มี useCallback: Button จะ re-render ทุกครั้ง
  // const increment = () => setCount(c => c + 1);

  // มี useCallback: Button จะไม่ re-render เมื่อพิมพ์ text
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Count: {count}</p>
      <Button onClick={increment}>เพิ่ม</Button>
    </div>
  );
}
```

**ตัวอย่างที่ 2: ใช้กับ useEffect**
```jsx
import { useState, useCallback, useEffect } from 'react';

function SearchComponent({ query }) {
  const [results, setResults] = useState([]);

  // memoize fetch function
  const fetchResults = useCallback(async () => {
    const response = await fetch(`/api/search?q=${query}`);
    const data = await response.json();
    setResults(data);
  }, [query]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]); // ใส่ใน dependency ได้อย่างปลอดภัย

  return (
    <ul>
      {results.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}
```

### ⚠️ useMemo vs useCallback

```javascript
// useCallback สำหรับ memoize function
const memoizedFn = useCallback(() => {
  doSomething();
}, [deps]);

// useMemo สำหรับ memoize value
const memoizedValue = useMemo(() => {
  return computeExpensiveValue();
}, [deps]);

// useCallback(fn, deps) เท่ากับ useMemo(() => fn, deps)
```

---

## 7. useReducer

### 📝 คำอธิบาย
`useReducer` เป็นทางเลือกของ useState สำหรับจัดการ state ที่ซับซ้อน ทำงานคล้าย Redux reducer

### 🔧 Syntax
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

### 💡 ตัวอย่างการใช้งาน

**ตัวอย่างที่ 1: Counter**
```jsx
import { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 100 })}>
        Set to 100
      </button>
    </div>
  );
}
```

**ตัวอย่างที่ 2: Todo List**
```jsx
import { useReducer, useState } from 'react';

const initialState = {
  todos: [],
  filter: 'all' // all, active, completed
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="เพิ่มงานใหม่"
        />
        <button type="submit">เพิ่ม</button>
      </form>

      <div>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>
          ทั้งหมด
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}>
          ยังไม่เสร็จ
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}>
          เสร็จแล้ว
        </button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
              ลบ
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>
        ลบงานที่เสร็จแล้ว
      </button>
    </div>
  );
}
```

### ⚠️ useState vs useReducer

| useState | useReducer |
|----------|------------|
| เหมาะกับ state ง่ายๆ | เหมาะกับ state ซับซ้อน |
| state เป็น primitive/object เดี่ยว | state มีหลาย fields ที่เกี่ยวข้องกัน |
| logic อยู่ใน component | logic แยกออกมาเป็น reducer |
| เรียนรู้ง่าย | pattern ชัดเจน, testable |

---

## 8. Custom Hooks

### 📝 คำอธิบาย
Custom Hooks คือ function ที่ชื่อขึ้นต้นด้วย `use` และสามารถใช้ hooks อื่นๆ ภายในได้ ช่วยให้ reuse logic ได้ง่าย

### 💡 ตัวอย่างการใช้งาน

**ตัวอย่างที่ 1: useFetch**
```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();
        
        if (isMounted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

// ใช้งาน
function UserList() {
  const { data: users, loading, error } = useFetch('/api/users');

  if (loading) return <p>กำลังโหลด...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users?.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

**ตัวอย่างที่ 2: useLocalStorage**
```jsx
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // อ่านค่าจาก localStorage หรือใช้ initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // อัปเดต localStorage เมื่อ state เปลี่ยน
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// ใช้งาน
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [language, setLanguage] = useLocalStorage('language', 'th');

  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="th">ไทย</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
```

**ตัวอย่างที่ 3: useDebounce**
```jsx
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

// ใช้งาน: Search with debounce
function SearchInput() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      // เรียก API หลังหยุดพิมพ์ 500ms
      console.log('Searching for:', debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="ค้นหา..."
    />
  );
}
```

**ตัวอย่างที่ 4: useWindowSize**
```jsx
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // เรียกครั้งแรกเพื่อ set ค่าเริ่มต้น

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// ใช้งาน
function ResponsiveComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>ความกว้าง: {width}px</p>
      <p>ความสูง: {height}px</p>
      {width < 768 ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

**ตัวอย่างที่ 5: useToggle**
```jsx
import { useState, useCallback } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse };
}

// ใช้งาน
function Modal() {
  const { value: isOpen, toggle, setFalse: close } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle Modal</button>
      {isOpen && (
        <div className="modal">
          <p>Modal Content</p>
          <button onClick={close}>ปิด</button>
        </div>
      )}
    </div>
  );
}
```

---

# Part 2: Next.js Hooks

Next.js มี hooks เฉพาะสำหรับจัดการ routing และ navigation

## 1. useRouter

### 📝 คำอธิบาย
`useRouter` ใช้สำหรับเข้าถึง router object เพื่อ navigate, อ่าน query parameters, และจัดการ route ต่างๆ

### 🔧 Import

```javascript
// Pages Router (pages directory)
import { useRouter } from 'next/router';

// App Router (app directory)
import { useRouter } from 'next/navigation';
```

### 💡 ตัวอย่างการใช้งาน

**ตัวอย่างที่ 1: Basic Navigation (Pages Router)**
```jsx
import { useRouter } from 'next/router';

function NavigationExample() {
  const router = useRouter();

  return (
    <div>
      {/* Navigate ไปหน้าอื่น */}
      <button onClick={() => router.push('/about')}>
        ไปหน้า About
      </button>

      {/* Navigate พร้อม query params */}
      <button onClick={() => router.push('/search?q=react')}>
        ค้นหา React
      </button>

      {/* Navigate แบบ replace (ไม่เก็บใน history) */}
      <button onClick={() => router.replace('/dashboard')}>
        ไป Dashboard
      </button>

      {/* ย้อนกลับ */}
      <button onClick={() => router.back()}>
        ย้อนกลับ
      </button>

      {/* Refresh */}
      <button onClick={() => router.reload()}>
        Refresh
      </button>
    </div>
  );
}
```

**ตัวอย่างที่ 2: อ่าน Route Information (Pages Router)**
```jsx
import { useRouter } from 'next/router';

function RouteInfo() {
  const router = useRouter();

  return (
    <div>
      <p>Pathname: {router.pathname}</p>
      {/* เช่น /blog/[slug] */}
      
      <p>AsPath: {router.asPath}</p>
      {/* เช่น /blog/hello-world?ref=home */}
      
      <p>Query: {JSON.stringify(router.query)}</p>
      {/* เช่น { slug: 'hello-world', ref: 'home' } */}
      
      <p>Route: {router.route}</p>
      {/* เช่น /blog/[slug] */}
      
      <p>Locale: {router.locale}</p>
      {/* เช่น th, en */}
    </div>
  );
}
```

**ตัวอย่างที่ 3: Dynamic Route Navigation**
```jsx
// pages/post/[id].js
import { useRouter } from 'next/router';

function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  // Navigate ไป post อื่น
  const goToNextPost = () => {
    const nextId = parseInt(id) + 1;
    router.push(`/post/${nextId}`);
  };

  return (
    <div>
      <h1>Post #{id}</h1>
      <button onClick={goToNextPost}>โพสต์ถัดไป</button>
    </div>
  );
}
```

**ตัวอย่างที่ 4: Navigation with State**
```jsx
import { useRouter } from 'next/router';

function ProductCard({ product }) {
  const router = useRouter();

  const viewDetails = () => {
    router.push({
      pathname: '/product/[id]',
      query: { id: product.id },
    });
  };

  // หรือแบบ shallow routing (ไม่รัน data fetching methods)
  const updateFilter = (category) => {
    router.push(
      { query: { ...router.query, category } },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={viewDetails}>ดูรายละเอียด</button>
    </div>
  );
}
```

**ตัวอย่างที่ 5: Route Events**
```jsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function LoadingIndicator() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return loading ? <div className="loading-bar" /> : null;
}
```

**ตัวอย่างที่ 6: Redirect Based on Auth**
```jsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

function ProtectedPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login?redirect=' + router.asPath);
    }
  }, [user, loading, router]);

  if (loading) return <p>กำลังตรวจสอบ...</p>;
  if (!user) return null;

  return <div>Protected Content</div>;
}
```

**ตัวอย่างที่ 7: App Router Navigation**
```jsx
'use client';
import { useRouter } from 'next/navigation';

function AppRouterExample() {
  const router = useRouter();

  return (
    <div>
      {/* Push - เพิ่มใน history */}
      <button onClick={() => router.push('/dashboard')}>
        ไป Dashboard
      </button>

      {/* Replace - แทนที่ history ปัจจุบัน */}
      <button onClick={() => router.replace('/dashboard')}>
        Replace to Dashboard
      </button>

      {/* Refresh - re-fetch data */}
      <button onClick={() => router.refresh()}>
        Refresh Data
      </button>

      {/* Back */}
      <button onClick={() => router.back()}>
        ย้อนกลับ
      </button>

      {/* Forward */}
      <button onClick={() => router.forward()}>
        ไปข้างหน้า
      </button>

      {/* Prefetch */}
      <button 
        onMouseEnter={() => router.prefetch('/heavy-page')}
        onClick={() => router.push('/heavy-page')}
      >
        Go to Heavy Page
      </button>
    </div>
  );
}
```

---

## 2. useParams

### 📝 คำอธิบาย
`useParams` (App Router) ใช้สำหรับอ่าน dynamic parameters จาก URL

### 🔧 Import
```javascript
import { useParams } from 'next/navigation';
```

### 💡 ตัวอย่างการใช้งาน

**ตัวอย่างที่ 1: Basic Usage**
```jsx
// app/shop/[category]/[productId]/page.js
'use client';
import { useParams } from 'next/navigation';

function ProductPage() {
  const params = useParams();
  // URL: /shop/electronics/123
  // params = { category: 'electronics', productId: '123' }

  return (
    <div>
      <p>หมวดหมู่: {params.category}</p>
      <p>รหัสสินค้า: {params.productId}</p>
    </div>
  );
}
```

**ตัวอย่างที่ 2: TypeScript Support**
```tsx
'use client';
import { useParams } from 'next/navigation';

type Params = {
  slug: string;
  id: string;
};

function BlogPost() {
  const params = useParams<Params>();

  return (
    <article>
      <h1>Slug: {params.slug}</h1>
      <p>ID: {params.id}</p>
    </article>
  );
}
```

**ตัวอย่างที่ 3: Catch-all Segments**
```jsx
// app/docs/[...slug]/page.js
'use client';
import { useParams } from 'next/navigation';

function DocsPage() {
  const params = useParams();
  // URL: /docs/react/hooks/usestate
  // params.slug = ['react', 'hooks', 'usestate']

  const breadcrumb = params.slug?.join(' > ');

  return (
    <div>
      <nav>เส้นทาง: {breadcrumb}</nav>
    </div>
  );
}
```

**ตัวอย่างที่ 4: ใช้ร่วมกับ Data Fetching**
```jsx
'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      fetch(`/api/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data));
    }
  }, [userId]);

  if (!user) return <p>กำลังโหลด...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

---

## 3. useSearchParams

### 📝 คำอธิบาย
`useSearchParams` ใช้สำหรับอ่าน query string parameters จาก URL (เช่น `?page=1&sort=desc`)

### 🔧 Import
```javascript
import { useSearchParams } from 'next/navigation';
```

### 💡 ตัวอย่างการใช้งาน

**ตัวอย่างที่ 1: อ่าน Query Params**
```jsx
'use client';
import { useSearchParams } from 'next/navigation';

function SearchResults() {
  const searchParams = useSearchParams();
  
  // URL: /search?q=react&page=2&sort=date
  const query = searchParams.get('q');        // 'react'
  const page = searchParams.get('page');      // '2'
  const sort = searchParams.get('sort');      // 'date'
  const missing = searchParams.get('missing'); // null

  // ตรวจสอบว่ามี param หรือไม่
  const hasSort = searchParams.has('sort');   // true

  // ดึงทุกค่าของ param (กรณี multiple values)
  // URL: /filter?color=red&color=blue
  const colors = searchParams.getAll('color'); // ['red', 'blue']

  return (
    <div>
      <p>ค้นหา: {query}</p>
      <p>หน้า: {page}</p>
      <p>เรียงตาม: {sort}</p>
    </div>
  );
}
```

**ตัวอย่างที่ 2: อัปเดต Query Params**
```jsx
'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateParams = (key, value) => {
    // สร้าง URLSearchParams ใหม่จากของเดิม
    const params = new URLSearchParams(searchParams.toString());
    
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    
    // Navigate พร้อม params ใหม่
    router.push(`${pathname}?${params.toString()}`);
  };

  const clearAllParams = () => {
    router.push(pathname);
  };

  return (
    <div>
      <select 
        value={searchParams.get('sort') || ''}
        onChange={(e) => updateParams('sort', e.target.value)}
      >
        <option value="">เรียงตาม...</option>
        <option value="price-asc">ราคา: ต่ำ-สูง</option>
        <option value="price-desc">ราคา: สูง-ต่ำ</option>
        <option value="newest">ใหม่ล่าสุด</option>
      </select>

      <select
        value={searchParams.get('category') || ''}
        onChange={(e) => updateParams('category', e.target.value)}
      >
        <option value="">หมวดหมู่ทั้งหมด</option>
        <option value="electronics">อิเล็กทรอนิกส์</option>
        <option value="clothing">เสื้อผ้า</option>
      </select>

      <button onClick={clearAllParams}>ล้างตัวกรอง</button>
    </div>
  );
}
```

**ตัวอย่างที่ 3: Pagination Component**
```jsx
'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

function Pagination({ totalPages }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  
  const currentPage = Number(searchParams.get('page')) || 1;

  const goToPage = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="pagination">
      <button 
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        ก่อนหน้า
      </button>
      
      <span>หน้า {currentPage} จาก {totalPages}</span>
      
      <button 
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        ถัดไป
      </button>
    </div>
  );
}
```

**ตัวอย่างที่ 4: Custom Hook สำหรับ Search Params**
```jsx
'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

function useQueryParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const setQueryParam = useCallback((key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === null || value === undefined || value === '') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`${pathname}?${params.toString()}`);
  }, [searchParams, pathname, router]);

  const setQueryParams = useCallback((newParams) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined || value === '') {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    router.push(`${pathname}?${params.toString()}`);
  }, [searchParams, pathname, router]);

  const getQueryParam = useCallback((key, defaultValue = null) => {
    return searchParams.get(key) ?? defaultValue;
  }, [searchParams]);

  return {
    searchParams,
    setQueryParam,
    setQueryParams,
    getQueryParam,
  };
}

// ใช้งาน
function FilteredList() {
  const { getQueryParam, setQueryParams } = useQueryParams();

  const handleFilter = () => {
    setQueryParams({
      category: 'electronics',
      minPrice: '100',
      maxPrice: '1000',
      page: '1'
    });
  };

  return (
    <div>
      <p>Category: {getQueryParam('category', 'all')}</p>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
}
```

---

## 4. usePathname

### 📝 คำอธิบาย
`usePathname` ใช้สำหรับอ่าน pathname ปัจจุบันของ URL (ไม่รวม query string และ hash)

### 🔧 Import
```javascript
import { usePathname } from 'next/navigation';
```

### 💡 ตัวอย่างการใช้งาน

**ตัวอย่างที่ 1: Active Link Navigation**
```jsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'หน้าแรก' },
    { href: '/about', label: 'เกี่ยวกับ' },
    { href: '/products', label: 'สินค้า' },
    { href: '/contact', label: 'ติดต่อ' },
  ];

  return (
    <nav>
      {navItems.map((item) => {
        const isActive = pathname === item.href || 
          (item.href !== '/' && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={isActive ? 'active' : ''}
            style={{
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? '#0070f3' : '#333',
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
```

**ตัวอย่างที่ 2: Breadcrumb**
```jsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Breadcrumb() {
  const pathname = usePathname();
  
  // แปลง pathname เป็น array
  const pathSegments = pathname.split('/').filter(Boolean);
  
  // สร้าง breadcrumb items
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    
    return { href, label };
  });

  return (
    <nav aria-label="Breadcrumb">
      <ol style={{ display: 'flex', gap: '8px', listStyle: 'none' }}>
        <li>
          <Link href="/">หน้าแรก</Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href}>
            <span> / </span>
            {index === breadcrumbs.length - 1 ? (
              <span>{crumb.label}</span>
            ) : (
              <Link href={crumb.href}>{crumb.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

**ตัวอย่างที่ 3: Analytics Tracking**
```jsx
'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function AnalyticsProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view เมื่อ pathname เปลี่ยน
    const url = window.location.href;
    
    // ตัวอย่าง: Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pathname,
      });
    }

    console.log('Page view:', pathname);
  }, [pathname]);

  return children;
}
```

**ตัวอย่างที่ 4: Conditional Rendering Based on Route**
```jsx
'use client';
import { usePathname } from 'next/navigation';

function Layout({ children }) {
  const pathname = usePathname();

  // ซ่อน header ในบางหน้า
  const hideHeader = ['/login', '/register', '/onboarding'].includes(pathname);
  
  // ซ่อน footer ในหน้า admin
  const hideFooter = pathname.startsWith('/admin');

  return (
    <div>
      {!hideHeader && <Header />}
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
```

**ตัวอย่างที่ 5: ใช้ร่วมกับ useSearchParams**
```jsx
'use client';
import { usePathname, useSearchParams } from 'next/navigation';

function CurrentUrl() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // สร้าง full URL
  const fullUrl = searchParams.toString() 
    ? `${pathname}?${searchParams.toString()}`
    : pathname;

  // Share URL
  const shareUrl = () => {
    const url = window.location.origin + fullUrl;
    navigator.clipboard.writeText(url);
    alert('คัดลอก URL แล้ว!');
  };

  return (
    <div>
      <p>Current Path: {pathname}</p>
      <p>Full URL: {fullUrl}</p>
      <button onClick={shareUrl}>แชร์ลิงก์</button>
    </div>
  );
}
```

---

# สรุปตาราง Hooks

## React Hooks

| Hook | หน้าที่ | เมื่อไหร่ควรใช้ |
|------|--------|----------------|
| `useState` | จัดการ state | เมื่อต้องการเก็บและอัปเดตข้อมูล |
| `useEffect` | จัดการ side effects | fetch data, subscriptions, DOM manipulation |
| `useContext` | อ่านค่าจาก Context | หลีกเลี่ยง prop drilling |
| `useRef` | เก็บ reference | เข้าถึง DOM, เก็บค่าที่ไม่ trigger re-render |
| `useMemo` | cache ผลลัพธ์ | การคำนวณที่หนัก |
| `useCallback` | cache function | ป้องกัน unnecessary re-renders |
| `useReducer` | จัดการ state ซับซ้อน | state มีหลาย fields ที่เกี่ยวข้องกัน |

## Next.js Hooks (App Router)

| Hook | หน้าที่ | ตัวอย่าง URL |
|------|--------|-------------|
| `useRouter` | navigate และ router methods | - |
| `useParams` | อ่าน dynamic params | `/shop/[id]` → `{ id: '123' }` |
| `useSearchParams` | อ่าน query string | `?page=1&sort=desc` |
| `usePathname` | อ่าน current path | `/products/shoes` |

## Next.js Hooks (Pages Router)

| Property/Method | คำอธิบาย |
|-----------------|----------|
| `router.pathname` | Route pattern เช่น `/blog/[slug]` |
| `router.query` | Dynamic params + query params |
| `router.asPath` | URL จริงที่แสดงใน browser |
| `router.push()` | Navigate ไปหน้าใหม่ |
| `router.replace()` | Replace หน้าปัจจุบัน |
| `router.back()` | ย้อนกลับ |
| `router.events` | Subscribe route events |

---

# แหล่งอ้างอิง

## React Official
- [React Hooks Reference](https://react.dev/reference/react/hooks)
- [useEffect Documentation](https://react.dev/reference/react/useEffect)
- [useState Documentation](https://react.dev/reference/react/useState)

## Next.js Official
- [useRouter (Pages Router)](https://nextjs.org/docs/pages/api-reference/functions/use-router)
- [useRouter (App Router)](https://nextjs.org/docs/app/api-reference/functions/use-router)
- [useParams](https://nextjs.org/docs/app/api-reference/functions/use-params)
- [useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
- [usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname)

## Tutorials
- [freeCodeCamp - React Hooks](https://www.freecodecamp.org/news/react-hooks-useeffect-usestate-and-usecontext/)
- [W3Schools - React Hooks](https://www.w3schools.com/react/react_hooks.asp)
- [GeeksforGeeks - useRouter](https://www.geeksforgeeks.org/userouter-in-next-js/)

---

> 📅 อัปเดตล่าสุด: 2025  
> 📝 เขียนโดย: Claude AI  
> 🔗 สำหรับ: React 18+ และ Next.js 13+ (App Router)
