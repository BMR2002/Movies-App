import React from 'react'
import { Comment, Avatar} from 'antd';
function SingleComment(props) {
    return (
        <div>
            <Comment
                author={props.comment.writer.name}
                avatar={
                    <Avatar
                        src={props.comment.writer.image}
                        alt="image"
                    />
                }
                content={
                    <p>
                        {props.comment.content}
                    </p>
                }
            ></Comment>

        </div>
    )
}

export default SingleComment 