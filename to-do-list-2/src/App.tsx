import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minute, setMinute] = useRecoilState(minuteState);
  const hour = useRecoilValue(hourSelector);
  const onMinuteChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinute(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minute}
        onChange={onMinuteChange}
        type="number"
        placeholder="Minutes"
      />
      <input value={hour} type="number" placeholder="Hours" />
    </div>
  );
}

export default App;
