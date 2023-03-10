import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";

const Chart = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <Link to={"/main"}>
          <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
        </Link>
        <h1 className="text-xl font-bold text-main">통계</h1>
      </Header>
      <div className="mt-28">
        <Link to={"/ChartCate"}>
          <Bt>월간 카테고리 통계</Bt>
        </Link>
        <Link to={"/ChartMonth"}>
          <Bt>월간 사용 금액</Bt>
        </Link>
        <Link to={"/ChartYear"}>
          <Bt>연간 사용 금액</Bt>
        </Link>
      </div>
    </>
  );
};
const Bt = tw.button`
w-80 h-12 ml-14 my-2.5 bg-main 
  text-white text-xl leading-tight uppercase 
  rounded-xl shadow-md hover:bg-sub 
  font-bold
  py-2
  px-4
  focus:bg-sub focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sub active:shadow-lg transition duration-150 ease-in-out
`;
const Header = tw.div`
flex
items-center
w-full
h-20
`;
export default Chart;
