import React, { createContext, useEffect, useState } from 'react'


export const BookContext = createContext()

const BookContextProvider = (props) => {

  const [books, setBooks] = useState([
    {
      id:1,
      title: "Kırmızı Pazartesi",
      author: "Gabriel Garcia Marquez",
      pageNum: 296,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
      topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
    },
    {
      id:2,
      title: "Şeker Portakalı",
      author: "Jose Muro de Vasconselos",
      pageNum: 200,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
      topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
    },
    {
      id:3,
      title: "En Uzun Yüzyıl",
      author: "İlber Ortaylı",
      pageNum: 296,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg",
      topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
    },
    {
      id:4,
      title: "Dracula",
      author: "Bram Stoker",
      pageNum: 200,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
      topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
    },
    {
      id:5,
      title: "Karamazov Kardeşler",
      author: "Fyodor Mihayloviç Dostoyevski",
      pageNum: 200,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg",
      topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
    },
    {
      id:6,
      title: "Sultanın Korsanları",
      author: "Emrah Safa Gürkan",
      pageNum: 296,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
      topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
    }
  ])

  useEffect(() => {
    const bookData = JSON.parse(localStorage.getItem("books"))


    { bookData && setBooks(bookData) }
  }, [])

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))

  }, [books])

  const addBook = (id,title, author,pageNum, imageURL,topic) => {
    setBooks([{id, title, author,pageNum,imageURL,topic }, ...books])
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  const editBook = (id, updatedBook) => {
    setBooks(books.map(book => (book.id == id ? updatedBook : book  )))
  }


  return (
    <BookContext.Provider value={{ books, addBook, removeBook,editBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider