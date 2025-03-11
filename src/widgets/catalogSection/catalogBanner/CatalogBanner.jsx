import './catalogBanner.scss'
import Image from '../../../shared/catalogSection/image (3).svg'

const book = [
    {
        id: 1,
        title: 'Прощай, Гульсары',
        author: ':Чыңгыз Айтматов',
        description: 'Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.',

    },

    {
        id: 2,
        title: 'Прощай, Гульсары',
        author: ':Чыңгыз Айтматов',
        description: 'Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.',

    },

    {
        id: 3,
        title: 'Прощай, Гульсары',
        author: ':Чыңгыз Айтматов',
        description: 'Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.',

    },
]

export  const CatalogBanner = () => {
    return (

        <div>
            {book.map((book) => (
                <div className='book container'>
                    <div className='book_img'>
                        <img src={Image} alt="" />
                    </div>
                    <div className='book_text'>
                        <h1>📖 Название книги:{book.title}</h1>
                        <h2>✍️ Автор:{book.author}</h2>
                        <p>📜 Описание:</p>
                        <p>{book.description}</p>
                    </div>
                    <div className='book_btn'>
                        <button className='btn1'>читать</button>
                        <button className='btn2'>скачать</button>
                    </div>
                </div>
            ))}
        </div>
    );
}


