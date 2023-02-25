import classNames from 'classnames/bind';
import styles from './Remaining.module.scss';
let cx = classNames.bind(styles);
function Remaining() {
    return (
        <div className={cx('container')}>
            <h3>Remaining Todos</h3>
            <span> 3 items</span>
        </div>
    );
}

export default Remaining;
