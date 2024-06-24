import NavbarAuth from '../../components/Navbar/NavbarAuth'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import './Upload.css'

export default function Upload() {
    const documents = [
        {
            id:1,
            author: 'John De',
            documentName: 'Research IA',
            description: 'An in-depth research paper on the advacements in artifial intelligence'
        },
        {
            id:2,
            author:'Jane Smith',
            documentName: 'Quantum Computing',
            description:'A comprehensive overview of quantum computing and its potencial'
        },
        {
            id:3,
            author:'Camilo Zapata',
            documentName: 'Software Update',
            description:'The world software is change for a new speaking the computer'
        },
        {
            id:4,
            author:'Richard Morrison',
            documentName: 'Celule Biology',
            description:'A new feature the celula revolving the future'
        }
    ]
    return (
        <>
            <NavbarAuth />
            <main className='upload-page'>
                <div>
                    {documents.map(doc => (
                        <Card 
                        key={doc.id}
                        author={doc.author}
                        documentName={doc.documentName}
                        description={doc.description}
                    />
                    ))}
                </div>
                
                <div className='sidebar'>
                    <button className='upload-button'>Upload Documntation</button>
                    <div className='filter-links'>
                        <a href="#">Recent</a>
                        <a href="#">Favorite</a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}