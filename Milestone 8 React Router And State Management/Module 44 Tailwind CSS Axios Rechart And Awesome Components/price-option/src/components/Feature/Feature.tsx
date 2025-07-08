import { FcApproval } from "react-icons/fc";

const Feature = ({feature}) => {
    return (
        <>
        <div className='flex gap-2'>
            <FcApproval />
            <p>{feature}</p>
        </div>
        </>
    );
};

export default Feature;