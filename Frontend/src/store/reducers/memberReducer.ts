import { MemberAction, MemberState } from './../type';

const initialState: MemberState = {
  members: [{
    member: 'x123',
    room: 'taan0229'
  },
  {
    member: 'x456',
    room: 'taan0229'
  },
  {
    member: 'x789',
    room: 'taan0229'
  },
  {
    member: 'pud99',
    room: 'taan0229'
  }]
}

const memberReducer = (state = initialState, action: MemberAction) => {
    switch(action.type){
      case 'JOINMEMBER':
        return {
          members: state.members.find(member => member.member === action.member && member.room === action.room) ? state.members :  [...state.members, {
            member: action.member,
            room: action.room,
          }]
        };
      case 'LEAVEMEMBER':
        return {
          members: state.members.filter(member => member.member !== action.member || member.room !== action.room)
        };
      default:
        return state;
    }
}

export default memberReducer;
