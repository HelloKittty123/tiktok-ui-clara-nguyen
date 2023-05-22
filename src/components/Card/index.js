import classNames from 'classnames/bind';

import AccountItem from '../AccountItem/AccountItem';
import styles from './Card.module.scss';
import Image from '../Image/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Card({ data }) {
    return (
        <div className={cx('card')}>
            <AccountItem
                data={data}
                className={{ avatar: 'avatar-card', name: 'name-card', username: 'username-card' }}
            />
            <div className={cx('image-wrap')}>
                <Image src={data.avatar} alt={data.nickname} className={cx('card-image')} />
                <div className={cx('icon-wrapper')}>
                    <div className={cx('icon-item')}>
                        <FontAwesomeIcon icon={faHeart} className={cx('card-icon')} />
                    </div>
                    <div className={cx('icon-item')}>
                        <FontAwesomeIcon icon={faComment} className={cx('card-icon')} />
                    </div>
                    <div className={cx('icon-item')}>
                        <FontAwesomeIcon icon={faShare} className={cx('card-icon')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
