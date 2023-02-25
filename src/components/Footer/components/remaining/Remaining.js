import classNames from 'classnames/bind';
import React from 'react';
import styles from './Remaining.module.scss';
let cx = classNames.bind(styles);
class Remaining extends React.Component {
    render() {
        return (
            <div className={cx('container')}>
                <h3>Remaining Todos</h3>
                <span> 3 items</span>
            </div>
        );
    }
}

export default Remaining;
