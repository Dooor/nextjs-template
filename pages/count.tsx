// Library
import { connect } from 'react-redux';

// Components
import App from '../src/views/layouts/App';

// Actions
import { increaseCount } from '../src/actions';

// Reducers
import { getCount } from '../src/reducers';

interface IProps {
  count: number;
  increaseCount: () => any;
}

const CountPage = (props: IProps) => (
  <App>
    <p>This is the count page {props.count}</p>
    <button onClick={props.increaseCount}>+</button>
  </App>
);

const mapStateToProps = (state: any) => ({
  count: getCount(state),
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    increaseCount: () => dispatch(increaseCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountPage);
