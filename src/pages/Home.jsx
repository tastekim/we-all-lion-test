import React from 'react';
import CreateRoom from '../components/CreateRoom';
import RoomItem from '../components/RoomItem';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <div>
      <CreateRoom />
      <RoomItem />
      <div>상단 슬라이드</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>여기에 룸 리스트</div>
        <Chat />
      </div>
    </div>
  );
};

export default Home;
