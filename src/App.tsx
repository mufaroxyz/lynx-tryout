import { useState, useEffect } from '@lynx-js/react';
import { useNavigate } from 'react-router';

export default function Index() {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  return (
    <view className="bg-bg pt-site h-full">
      <text className="p-4 font-bold text-alt-1 text-5xl">App!</text>
      <view className="section">
        <view className="container">
          <text class="text-2xl">{count}</text>
        </view>
      </view>
      <view
        className="section"
        bindtap={() => {
          setCount(count + 1);
        }}
      >
        <view className="flex container">
          <text class="px-6 py-2 rounded-full text-2xl bg-accent-1">+1</text>
        </view>
      </view>
      <view className="section" bindtap={() => navigate('/home')}>
        <view className="flex justify-center container">
          <text class="bg-alt-1 px-6 py-2 rounded-full text-2xl">Go</text>
        </view>
      </view>
    </view>
  );
}

function bgOnly() {
  console.log('Test');
}
