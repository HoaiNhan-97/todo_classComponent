import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Item.module.scss';
import { COLORS } from '~/constant/constants';
let cx = classNames.bind(styles);
function Item() {
    return (
        <div className={cx('container')}>
            <label className={cx('checkbox')}>
                <input type="checkbox" />
                <span className={cx('checkmark')}></span>
            </label>
            <input type="text" className={cx('name')} defaultValue="123456" />

            <select>
                {Object.keys(COLORS).map((color, index) => {
                    return (
                        <option style={{ color: color }} key={index} defaultValue={COLORS[color]}>
                            {COLORS[color]}
                        </option>
                    );
                })}
            </select>
            <FontAwesomeIcon icon={faXmark} className={cx('deleteIcon')} />
        </div>
    );
}

export default Item;
