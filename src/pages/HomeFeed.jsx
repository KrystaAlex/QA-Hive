import PostContainer from "../components/PostContainer";

export default function HomeFeed({bugFeed}) {

return (
    <>
    <h1>Bug Feed</h1>
    <PostContainer bugFeed={bugFeed}/>
    </>
)
}