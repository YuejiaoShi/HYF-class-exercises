// https://pourya.gitbook.io/javascript-3/week-3

class Book {
  constructor(title, author, isbn, isBorrowed) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isBorrowed = isBorrowed;
  }
  borrow() {
    this.isBorrowed = true;
  }
  returnBook() {
    this.isBorrowed = false;
  }
}

class Member {
  constructor(name, memberId) {
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = [];
  }
  borrowBook(book) {
    if (!book.isBorrowed) {
      this.borrowedBooks.push(book);
      book.borrow();
    } else {
      console.log(`The book "${book.title}" is already borrowed.`);
    }
  }
  returnBook(bookIsBn) {
    const bookToReturn = this.borrowedBooks.find(
      (book) => book.isbn === bookIsBn
    );
    this.borrowedBooks = this.borrowedBooks.filter(
      (book) => book.isbn !== bookIsBn
    );
    bookToReturn.returnBook();
  }
}

class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  addMember(member) {
    this.members.push(member);
  }
  findBookByIsbn(isbn) {
    const bookToFind = this.books.filter((book) => book.isbn === isbn);
    return bookToFind[0];
  }
  borrowBook(memberId, isbn) {
    const bookToBorrowed = this.findBookByIsbn(isbn);
    const memToBorrowed = this.members.filter(
      (member) => member.memberId === memberId
    )[0];
    memToBorrowed.borrowBook(bookToBorrowed);
    bookToBorrowed.borrow();
    console.log(`${memToBorrowed.name} borrows ${bookToBorrowed.title}`);
  }
  returnBook(memberId, isbn) {
    const bookToReturned = this.books.filter((book) => book.isbn === isbn)[0];
    bookToReturned.returnBook();
    const memToReturned = this.members.filter(
      (member) => member.memberId === memberId
    )[0];
    memToReturned.returnBook(isbn);
    console.log(`${memToReturned.name} returns ${bookToReturned.title}`);
  }
}

// Example Usage
const library = new Library();
const book1 = new Book("1984", "George Orwell", "1234567890", false);
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321", false);

library.addBook(book1);
library.addBook(book2);

const member = new Member("John Doe", "M001");

library.addMember(member);

library.borrowBook("M001", "1234567890");
library.borrowBook("M001", "0987654321"); // John Doe borrows 1984
console.log(member.borrowedBooks);
library.returnBook("M001", "1234567890"); // John Doe returns 1984
console.log(member.borrowedBooks);
