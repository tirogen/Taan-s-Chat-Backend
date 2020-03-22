import React, { useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './../store';
import { selectRoom, joinRoom, leaveRoom, addRoom } from './../store/actions'

const Room: React.FC = () => {

  const room = useSelector((state: AppState) => state.room)
  const dispatch = useDispatch();
  const inputRoom = useRef<HTMLInputElement>(null);

  const yourRooms: JSX.Element[] = [];
  room.yourRooms.map((room: string) => {
    yourRooms.push(
      <Card body>
        <Row>{room}</Row>
        <Row>
          <Col><button onClick={() => dispatch(selectRoom(room))}>Select</button></Col>
          <Col><button onClick={() => dispatch(leaveRoom(room))}>Leave</button></Col>
        </Row>
      </Card>
    )
  })

  const otherRooms: JSX.Element[] = [];
  room.otherRooms.map((room: string) => {
    otherRooms.push(
      <Card body>
        <Row>{room}</Row>
        <Row><button onClick={() => dispatch(joinRoom(room))}>JOIN</button></Row>
      </Card>
    )
  })

  return (
    <>
      <h2>Selected Room</h2>
      {room.selectedRoom}
      <h2>Your Room</h2>
      {yourRooms}
      <h2>Other Room</h2>
      {otherRooms}
      <h2>Add Room</h2>
      <input type="text" ref={inputRoom} />
      <button onClick={() => dispatch(addRoom(inputRoom.current?.value || ''))}>Add room</button>
    </>
  )
}

export default Room;
