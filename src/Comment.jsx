import { useState } from "react";
import "./Comments.css";
import CommentForm from "./CommentForm";

export default function Comment() {
    let [comments, setComments] = useState([
        {
            username: "React.js",
            remarks: "This example of react.js",
            rating : 5
        },
    ]);

    let addNewComment = (comment) => {
        setComments((currComments) => {
            return [...currComments, comment];
        });
    };

    return (
        <>
            <CommentForm addNewComment={addNewComment} />
            <hr />
            <div>
                <h3>All Comments</h3>
                {comments && comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <span>Comments = {comment.remarks}</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>Rating = {comment.rating}</span>
                        &nbsp;&nbsp;&nbsp;
                        <p>- {comment.username}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
