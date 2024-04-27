import api from "../../../service/api";


// SECTION --> MODEL DE 
export const handleChats = () => {    
    const chats = api.get("api/chats")
    .then((res) => {
        return res.data;
    })

    return chats
};