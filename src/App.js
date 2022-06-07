import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; //함수 작동 X
    }
    setToDo("");
  };

return <div>
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder='할 일을 입력하세요.'
      />
      <button>할 일 추가</button>
    </form>
  </div>
}

export default App;