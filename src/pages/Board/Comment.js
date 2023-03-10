import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import tw from "tailwind-styled-components";

const Comment = ({ seq }) => {
  // 게시글 댓글 데이터 호출
  const [comment, setComment] = useState([]);
  const boardComment = () => {
    axios
      .get(`http://192.168.0.151:9898/comment/list/${seq}`)
      .then((res) => {
        const rr = res.data.map((item) => {
          return item;
        });
        const result = rr.filter((value) => value.viewStatus === true);
        setComment(result);
        boardComment();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    boardComment();
  }, []);

  const [commentSeq, setCommentSeq] = useState("");
  //댓글 삭제
  const user = useSelector((state) => state.user);

  const commentDelete = (ciSeq) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .delete(
          `http://192.168.0.151:9898/comment/delete/${user.miSeq}/${ciSeq}`
        )
        .then((res) => {
          alert("삭제 되었습니다.");
          boardComment();
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    } else {
      alert("취소 되었습니다.");
    }
  };

  const [isEdit, setIsEdit] = useState(false);
  const onClickIsEdit = (event) => {
    console.log(event.target.id);
    const aaa = isEdit;
    aaa[event.target.id] = true;
    console.log(aaa);
    setIsEdit([...aaa]);
  };

  return (
    <div>
      {comment.map((item, index) => (
        <div key={index}>
          <div
            className="mt-4 flex justify-between mb-2"
            key={item.ciSeq}
            value={item.ciSeq}
          >
            <div>
              <span className="text-main">{item.nickName}</span>
              <span className="ml-3 text-[14px] text-sub2">
                {moment(item.ciRegDt).format("YYYY-MM-DD")}
              </span>
            </div>
            <div className="flex">
              <Button
                className="text-sm"
                onClick={(e) => {
                  onClickIsEdit();
                }}
              >
                수정
              </Button>
              <Button
                className="ml-2 text-sm"
                onClick={(e) => {
                  commentDelete(item.ciSeq);
                }}
              >
                삭제
              </Button>
            </div>
          </div>
          <span className="">{item.ciContent}</span>
        </div>
      ))}
    </div>
  );
};

const Button = tw.button`
border
border-main
rounded-xl
px-3
`;
export default Comment;
