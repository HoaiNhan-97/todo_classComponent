import classNames from 'classnames/bind';
import React from 'react';
import styles from './FilterByStatus.module.scss';

let cx = classNames.bind(styles);
class FilterByStatus extends React.Component {
    render() {
        return (
            <div className={cx('container')}>
                <h3 className={cx('title')}>Filter By Color</h3>
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
        );
    }
}

export default FilterByStatus;
