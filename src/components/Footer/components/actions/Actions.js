import classNames from 'classnames/bind';
import styles from './Action.module.scss';

let cx = classNames.bind(styles);
function Action() {
    return (
        <div className={cx('container')}>
            <h3>Action</h3>
            <button>Mark All Completed</button>
            <button>Clear Completed</button>
        </div>
    );
}

export default Action;
