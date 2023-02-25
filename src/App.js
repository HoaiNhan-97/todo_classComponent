import classNames from 'classnames/bind';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ListItems from './components/ListItems/ListItems';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';

let cx = classNames.bind(styles);
console.log(styles);
function App() {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <h1>Todo App</h1>
            </div>
            <div className={cx('container-content')}>
                <div className={cx('content')}>
                    <Header />
                    <div className={cx('listItem')}>
                        <ListItems />
                    </div>
                    <div className={cx('footer')}>
                        <Footer />
                    </div>
                </div>
            </div>
            {/* {loading && (
                <div className={cx('add-loading')}>
                    <FontAwesomeIcon icon={faSpinner} className={cx('loader')} />{' '}
                </div>
            )} */}
        </div>
    );
}

export default App;
