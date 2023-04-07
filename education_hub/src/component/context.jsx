import React,{ useState, useEffect } from "react";



const AppContext = React.createContext();
const URL = "http://openlibrary.org/search.json?title";




const AppProvider = ({children}) =>{

    const [bookName, setBookName] = useState("chemistry");
    const [book, setBook] = useState([]);
    const [resultTitle, setResultTitle] = useState("");

     const searchBook = async(url)=>{
         try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === 'True'){
                const {docs} = data;
               if(docs){
                const newBook = docs.slice(0,20).map((singleBook)=>{
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = singleBook;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                 })
                 setBook(newBook);

                 if(setBook.length>1){
                    setResultTitle("Your Search result is found");
                 }
                 else{
                    setResultTitle("Your Search result is not found")
                 }
               }
               
            }
         } catch (error) {
            
         }
     }

    useEffect(()=>{
        const timeOut = setTimeout(() => {
            searchBook(`${URL}=${bookName}`)
        }, 1000);
    })
    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};