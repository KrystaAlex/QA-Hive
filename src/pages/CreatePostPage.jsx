import CreateBugForm from "../components/CreateBugForm";

export default function CreatePostPage({onSubmit}) {

        const handleBugSubmit= (bugData) => {
        if (onSubmit) onSubmit(bugData);
    };
    
    return (
    <>
    <h1>Submit a new post</h1>
    <CreateBugForm onSubmit={handleBugSubmit}/>
    </>
    )
}