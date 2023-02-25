import classNames from 'classnames/bind';
import Item from './item/Item';
import styles from './ListItems.module.scss';
let cx = classNames.bind(styles);
function ListItems() {
    return (
        <div className={cx('container')}>
            <Item />
        </div>
    );
}

export default ListItems;
