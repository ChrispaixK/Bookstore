const CHECKSTATUS = 'Check Book';

export const CheckStatus = () => ({ type: CHECKSTATUS });

export default function checkreducer(state = [], action) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default:
      return state;
  }
}
