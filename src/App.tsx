import { useState } from '@lynx-js/react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <view className="bg-gray-dark w-full h-full">
      <text className="p-4 text-green text-2xl">{count}</text>
      <text className="p-4 text-blue">Hello World 3</text>
      <text className="bg-blue p-4 text-yellow text-2xl">Hello World</text>
      <view
        className="bg-green p-2"
        bindtap={() => {
          setCount(count + 1);
        }}
      >
        <text className="p-2 text-gray-light text-3xl">+1</text>
      </view>
    </view>
  );
}
