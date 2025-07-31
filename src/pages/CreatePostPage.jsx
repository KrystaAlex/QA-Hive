import CreateBugForm from "../components/CreateBugForm";

export default function CreatePostPage({onSubmit}) {

        const handleBugSubmit= (bugData) => {
        if (onSubmit) onSubmit(bugData);
    };
    
    return (
    <>
    <CreateBugForm onSubmit={handleBugSubmit}/>
    </>
    )
}