import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredReadList } from '../Root/addToDb';
import Book from '../Book/Book';
const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    // ideally we will directly get the read book list from the database.

    const allBooks = useLoaderData();


    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    }, [])


    return (
        <div>
            <h3 className='text-3xl my-8 text-center'>Listed Books</h3>

            <Tabs>
                <TabList className='text-xl text-center rounded-2xl'>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read: {readList.length}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {readList.map((book) => (
                            <Book book={book} key={book.bookId}></Book>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 cla>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
