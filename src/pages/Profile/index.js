import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import Image from '~/components/Image/Image';
import styles from './Profile.module.scss';
import Button from '~/components/Button/Button';
import { dataProfile, datas } from '~/mocks';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Profile() {
    const { nickname } = useParams();
    const [profile, setProfile] = useState();

    useEffect(() => {
        fetchApi();
    }, [nickname]);

    const fetchApi = async () => {
        let result = await searchServices.search(nickname);
        if (!result.length) {
            result = datas.filter((data) => data.nickname === nickname);
        }
        if (Object.keys(result).length) {
            setProfile(result[0]);
        } else {
            setProfile({});
        }
    };

    return (
        <div className={cx('profile')}>
            {profile &&
                (!Object.keys(profile).length ? (
                    <span className={cx('no-profile')}>No profile for this user</span>
                ) : (
                    <>
                        <div className={cx('profile-header')}>
                            <div className={cx('profile-header-info')}>
                                <Image alt="img" className={cx('profile-image')} src={profile.avatar} />
                                <div className={cx('profile-title')}>
                                    <h2 className={cx('profile-name')}>{nickname}</h2>
                                    <Button className={cx('button-follow')}>Follow</Button>
                                </div>
                            </div>
                            <div className={cx('profile-header-follow')}>
                                <div>
                                    <span className={cx('following-number')}>989</span> Following
                                </div>
                                <div>
                                    <span className={cx('following-number')}>21M</span> Followers
                                </div>
                                <div>
                                    <span className={cx('following-number')}>567.2M</span> Likes
                                </div>
                            </div>
                        </div>
                        <div className={cx('profile-content')}>
                            <h3>Videos</h3>
                            <div className={cx('profile-videos')}>
                                {dataProfile.map((item, index) => {
                                    return (
                                        <div className={cx('video-item')} key={index}>
                                            <Image className={cx('video-image')} src={item.src} alt={item.title} />
                                            <span className={cx('video-title')}>{item.title}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                ))}
        </div>
    );
}

export default Profile;
