import classNames from 'classnames/bind';
import React from 'react';
import Item from './item/Item';
import styles from './ListItems.module.scss';
let cx = classNames.bind(styles);
class ListItems extends React.Component {
    render() {
        return (
            <div className={cx('container')}>
                <Item />
            </div>
        );
    }
}

export default ListItems;
