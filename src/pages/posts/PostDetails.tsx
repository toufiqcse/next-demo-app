import { FunctionComponent } from "react"
import { IPost } from "../../../types";
import Link from "next/link";

const PostDetails:FunctionComponent<{
    post: IPost
}> = ({post}) => {

    return (
        <div className="p-[2em]">
          <Link href= {`/posts/${post?.id}`} passHref>
          <p className="font-semibold text-[1.5rem]">{post?.title}</p>
          </Link>
        </div>
    )
}

export default PostDetails



