import classNames from 'classnames/bind';
import styles from './FilterByStatus.module.scss';

let cx = classNames.bind(styles);
function FilterByStatus() {
    return (
        <div className={cx('container')}>
            <h3 className={cx('title')}>Filter By Color</h3>
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
        </div>
    );
}

export default FilterByStatus;
