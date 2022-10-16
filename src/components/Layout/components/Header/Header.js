import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import images from '~/assets/images';
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
import Tooltip from '@tippyjs/react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { Menu } from '../../../Popper';

import Button from '~/components/Button/Button';
import { MessageIcon } from '~/components/icons/Icon';
import Image from '~/components/image/Image';
import Search from '../search/Search';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const Header = () => {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem) {
            case 'language':
                console.log('123');
                break;

            default:
                break;
        }
    };
    const useritem = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <StyledHeader>
            <div className="inner">
                <div className="logo">
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/* Search */}
                <Search />
                <div className="actions">
                    {currentUser ? (
                        <>
                            <Tooltip delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className="action-btn">
                                    <MessageIcon />
                                </button>
                            </Tooltip>
                            <Tooltip delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className="action-btn">
                                    <MessageIcon />
                                </button>
                            </Tooltip>
                            <Tooltip delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className="action-btn">
                                    <MessageIcon />
                                </button>
                            </Tooltip>
                            {/* <button className='action-btn'>
                                <FontAwesomeIcon icon={faMessage} />
                            </button> */}
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? useritem : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_100x100.jpeg?x-expires=1666029600&x-signature=EwOGiLrYgsb7lST9Yk4l0E2a168%3D"
                                alt=""
                                className="user-avatar"
                            />
                        ) : (
                            <button className="more-btn">
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
    height: 60px;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
    --search-boder-radius: 92px;
    --search-height: 46px;
    --search-top-spacer: 9px;

    .search-title {
        color: rgba(22, 24, 35, 0.5);
        font-weight: 500;
        font-size: 1.4rem;
        padding: 5px 12px;
    }
    .inner {
        height: 100%;
        max-width: var(--default-layout);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .search-result {
        width: 361px;
    }
    /* .logo {
    } */
    .search {
        width: 361px;
        height: var(--search-height);
        background-color: rgba(22, 24, 35, 0.06);
        border-radius: var(--search-boder-radius);
        position: relative;
        padding-left: 16px;
        display: flex;
        border: 1.5px solid transparent;

        input {
            font-size: 1.6rem;
            height: 100%;
            background-color: transparent;
            flex: 1;
            caret-color: var(--pri);
        }
        input:not(:placeholder-shown) ~ .search-btn {
            color: rgba(22, 24, 35, 0.75);
        }
        ::after {
            content: '';
            position: absolute;
            top: var(--search-top-spacer);
            right: 52px;
            height: calc(var(--search-height) - var(--search-top-spacer) * 2);
            width: 1px;
            background-color: rgba(22, 24, 35, 0.12);
        }
        &:focus-within {
            border-color: rgba(22, 24, 35, 0.2);
        }
    }
    .clear,
    .loading {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: calc(52px + 10px);
        color: rgba(22, 24, 35, 0.34);
    }
    .search-btn {
        width: 52px;
        height: 100%;
        border-top-right-radius: var(--search-boder-radius);
        border-bottom-right-radius: var(--search-boder-radius);
        cursor: pointer;
        font-size: 1.6rem;
        color: rgba(22, 24, 35, 0.34);
        &:hover {
            background-color: rgba(22, 24, 35, 0.03);
        }
        :active {
            background-color: rgba(22, 24, 35, 0.06);
        }
    }

    /* Acction */
    .actions {
        display: flex;
        align-items: center;
    }
    .action-btn {
        background-color: transparent;
        font-size: 2.2rem;
        color: #161823;
        padding: 4px 12px;
    }
    .more-btn {
        font-size: 2rem;
        margin-left: 24px;
        background-color: transparent;
        padding: 4px 8px;
        cursor: pointer;
    }
    .user-avatar {
        width: 32px;
        height: 32px;
        border-radius: 100rem;
        object-fit: cover;
        margin-left: 12px;
        cursor: pointer;
    }

    /* Menu item */
    .menu-items {
        width: 224px;
    }
    .menu-list {
        width: 224px;
        .item {
            margin-left: 0;
            width: 100%;
            border-radius: 0;
            line-height: 1.8rem;
            &.separate {
                border-top: 1px solid rgba(22, 24, 35, 0.12);
            }
            :hover {
                background-color: rgba(22, 24, 35, 0.03);
            }
        }

        .menu-popper {
            padding-bottom: 8px;
        }
    }
    .header-menu {
        position: relative;
        height: 50px;
        margin-top: -8px;
    }
    .back-btn {
        width: 50px;
        height: 100%;
        background-color: transparent;
        cursor: pointer;
    }
    .header-title-menu {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
export default Header;