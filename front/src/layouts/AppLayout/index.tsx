import React, { FC } from 'react'
import styled from '@emotion/styled'
import Header from 'layouts/Header'
import ChatLayout from 'layouts/ChatLayout'

const AppLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
        <MainContainer>
            <Header />
                <Content>
                    {children}
                </Content>
            <ChatLayout />
        </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
    max-width: 1600px;
    // width: 80%;
    // height: 90vh;
    min-height: 600px;
    max-height: 900px;
    overflow: scroll;
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // align-items: center;
    margin: 4rem auto;
    background: white;
    position: relative;
`

const Content = styled.div`
    overflow: scroll;
`

export default AppLayout