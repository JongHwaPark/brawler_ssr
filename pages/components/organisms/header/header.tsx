import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    Input,
    Label,
    Button,
} from 'semantic-ui-react';
import styles from './header.module.scss';
import {setUser, setBattle} from "../../../modules/reducers/user";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

console.log(styles);

function Header() {
    const dispatch = useDispatch();
    const [tagData, setTag] = useState('2LYRJQYGJ');

    const handleClickSearchBtn = async () => {
        try {
            dispatch(setUser('#'+tagData));
            dispatch(setBattle('#'+tagData));

        } catch (err){
            console.log(err);
        }
    };

    return (
        <header className={cx('header-wrap')}>
            <div>
                <a className={cx('logo')}>LOGO</a>
                <ul className={cx('header-nav')}>
                    <li>
                        <Input labelPosition='right' placeholder='Search...'>
                            <Label basic>#</Label>
                            <input value={tagData}  onChange={({ target: { value } }) => setTag(value)} />
                            <Button type='submit' onClick={handleClickSearchBtn}>Search</Button>
                        </Input>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
