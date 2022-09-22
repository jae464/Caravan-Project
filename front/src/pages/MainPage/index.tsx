import React, {useState, useCallback} from 'react';
import axios, {AxiosRequestConfig} from 'axios';
import styled from 'styled-components';
import Header from 'components/Header';
import { Link } from 'react-router-dom';
const MainPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const axiosConfig: AxiosRequestConfig = {
        baseURL: 'http://localhost:3000',
        withCredentials: true
    }
    
    const client = axios.create(axiosConfig);
    const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const data = {
            id: email,
            password: password
        }
        const result = await client.post('/users', data);
        console.log(result);
    }

    return (
        <>
            <MainContainer>
                <Header />
                <ItemList>
                    <Item to="/reserve">예약하기</Item>
                    <Item to="/cancel">예약현황 및 취소</Item>
                    <Item to="/status">회의실 현황</Item>
                </ItemList>
                <ChatInput />
            </MainContainer>
        </>
        

    )
}

const MainContainer = styled.div`
    width: 800px;
    height: 800px;
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    margin: auto;
    margin-top: 160px;
    background: #E0E0E0;
    
`

const ItemList = styled.div`
    display: flex;
    // margin-top: 12rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
        font-size: 20px;
        style: none;
    }
`

const Item = styled(Link)`
    display: flex;
    text-decoration: none;
    font-size: 2rem;
    outline: none;
    height: 4rem;
    width: 16rem;
    color: white;
    text-align: center;
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
    margin-bottom: 4rem;
    background: #A5B5EC;
`

const ChatInput = styled.input`
    display: flex;
    width: 790px;
    height: 2rem;
    margin-left: auto;
    margin-right: auto;
`

export default MainPage;