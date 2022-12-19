import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEllipsisVertical, 
    faEarthAsia, 
    faCircleQuestion, 
    faKeyboard, 
    faUser,
    faCoins,
    faGear,
    faSignOut,  
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import { Link } from 'react-router-dom';

import config from '~/config'
import Button from '~/components/Button/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts'
    }
]

function Header() {

    const currentUser = true

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change 
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}/>,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}/>,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx('logo-link')}><img src={images.logo} alt="TIKTOK"/></Link>
            
            <Search/>

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 50]} content="Upload Video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <UploadIcon/>
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Message" placement="bottom">
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
                            </button>
                       </Tippy>
                    </>
                ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                )} 

                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <Image
                            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ad1e7c0c39e0c46655ec5a7a6701cf4a~c5_100x100.jpeg?x-expires=1670140800&x-signature=Nei5o7nKm%2Fd1m0ShfTklHqtS1lY%3" 
                            className={cx('user-avatar')} 
                            alt="Nguyen Van A"
                            fallback='https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                            />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                    )}
                                
                </Menu>      
            </div>
        </div>
    </header>;
}

export default Header;