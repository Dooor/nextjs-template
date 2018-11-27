// Library
import Link from 'next/link';
import { connect } from 'react-redux';

// Components
import Layout from '../src/views/components/Layout';

// Actions
import { increaseCount } from '../src/actions';

// Reducers
import { getCount } from '../src/reducers';

interface IProps {
  count: number;
  increaseCount: () => any;
}

const CountPage = (props: IProps) => (
  <Layout title='Counter'>
    <p>This is the count page {props.count}</p>
    <button onClick={props.increaseCount}>+</button>
    <p><Link href='/'><a>Go home</a></Link></p>
  </Layout>
);

const mapStateToProps = (state) => ({
  count: getCount(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: () => dispatch(increaseCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountPage);
