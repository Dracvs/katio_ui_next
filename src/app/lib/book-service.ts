export class BookService {
    async getAllBooks() : Promise<any[]>
    {
        const result = await fetch("http://localhost:8080/katio/books/getall");
        const books = result.json();
        return books;
    }
}