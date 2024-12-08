"use client"
import ItemInList from '../ItemInList/ItemInList';
import { MainListContainer } from './MainList.style';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setCurrentData, setPagesCount } from '@/store/userSclise';


export default function MainList({ data }) {
    const dispatch = useDispatch();
    const currentData = useSelector((state) => state.userData.currentData)

    useEffect(() => {
        dispatch(setData(data));
        dispatch(setCurrentData());
        const pages = Math.ceil(data.length / 10);
        dispatch(setPagesCount(pages));
    }, [data, dispatch]);

    return (
        <MainListContainer>
            {currentData && currentData.length > 0 ? (
                currentData.map((item) => (
                    <ItemInList key={item.id} item={item} />
                ))
            ) : (
                <p style={{ color: "white" }}> Немає даних для відображення</p>
            )}
        </MainListContainer>
    )
}