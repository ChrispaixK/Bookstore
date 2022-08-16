import { useSelector, useDispatch } from 'react-redux';
import { CheckStatus } from '../redux/categories/categories';

function Categories() {
  const txt = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const CheckStatusHandler = () => {
    dispatch(CheckStatus());
  };

  return (
    <>
      <button type="button" onClick={CheckStatusHandler}>Check Status</button>
      <p>{txt}</p>
    </>
  );
}

export default Categories;
