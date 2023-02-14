import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";

const Chart = () => {
  return (
    <>
      <Header>
        <Link to={"/"}>
          <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
          <h1> 통 계 </h1>
        </Link>
      </Header>
      <div className="my-20">
        <Bt>많이 쓴 카테고리</Bt>
        <Bt>월간 사용 금액</Bt>
        <Bt>연간 사용 금액</Bt>
      </div>
    </>
  );
};
const Bt = tw.button`
 w-80 h-12 ml-14 my-2.5 bg-main 
   text-white font-medium text-xl leading-tight uppercase 
   rounded shadow-md hover:bg-sub hover:shadow-lg
    focus:bg-sub focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sub active:shadow-lg transition duration-150 ease-in-out
`;
const Header = tw.div`
flex
items-center
w-full
h-20
`;
export default Chart;
