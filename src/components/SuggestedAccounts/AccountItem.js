// import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './SuggestedAccounts.module.scss'
import AccountPreview from './AccountPreview'

const cx = classNames.bind(styles)

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1670569200&x-signature=1BoPkL1LSEQ1qKsQG5imiY2UZuM%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p clasName={cx('nickname')}>
                            <strong>nguyenducthang</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p clasName={cx('name')}>Nguyen Duc Thang</p>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

AccountItem.propTypes = {}

export default AccountItem
