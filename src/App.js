import './App.css';
import { useState } from 'react';

function App() {
  
 
  const [글제목,글제목변경]= useState(['부산 맛집 추천', '강남 맛집 추천', '리액트독학'])
  const [따봉,따봉변경]= useState(0);
  const [modal, showModal] =useState(false);

 
  return ( 
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button onClick={()=>{
        const copy =[...글제목];
        copy.sort();
         글제목변경(copy)}}>가나다순정렬</button>
      <button onClick={()=>{
        const copy = [...글제목];    // ... 괄호를뺴주세요
        copy[0] = "여자 코트 추천";
          글제목변경(copy);
          }}>글제목수정</button>

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={()=>{따봉변경(따봉+1)}}>👍🏿</span>
        {따봉}</h4>
        <p>9월 24일 발행</p>
      </div>
      
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>9월 24일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{showModal(!modal)}}>{ 글제목[2] }</h4>
        <p>9월 24일 발행</p>
      </div>
     {
      // 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
      // 1 == 1 ? '맞음' : '아님' => 삼항 연산자
      modal == true ? <Modal/> : null
      
     }
    </div>
  );

      function Modal(){
        return(
          <div className='modal'>
          <h4>제목</h4>
          <h4>날짜</h4>
          <h4>상세내용</h4>
        </div>
        )
      }

}


export default App;
