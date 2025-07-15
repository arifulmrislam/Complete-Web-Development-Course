import { toast } from 'react-toastify';
const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
};

const getStoredReadWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    } else {
        return [];
    }
};

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in the read list');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        // ideally trigged toast from the component
        toast('This book is added to your read list.');
    }
};

const addToStoredReadWishList = (id) => {
    const storedWishList = getStoredReadWishList();
    if (storedWishList.includes(id)) {
        console.log(id, 'already exists in the wish list');
    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList); 
        localStorage.setItem('wish-list', storedWishListStr);
    }
};

export { addToStoredReadList, addToStoredReadWishList, getStoredReadList, getStoredReadWishList };

