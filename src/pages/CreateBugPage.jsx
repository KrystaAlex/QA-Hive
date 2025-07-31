import CreateBugForm from "../components/CreateBugForm";

export default function CreateBugPage() {

        const handleBugSubmit= (bugData) => {
        console.log('Bug submitted:', bugData);
    };
    
    return (
    <>
    <CreateBugForm onSubmit={handleBugSubmit}/>
    </>
    )
}