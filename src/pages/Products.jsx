import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import BookList from '../components/BookList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Pagination from '../components/Pagination';
import Swal from 'sweetalert2';
import '../styles/Products.css';

const Products = () => {
    const [books, setBooks] = useState([]);
    const [totalBooks, setTotalBooks] = useState(0);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const booksPerPage = 8;

    useEffect(() => {
        fetchBooks();
    }, [filters, sort, currentPage, searchTerm]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const fetchBooks = async () => {
        try {
            let url = 'http://localhost:3000/books?';
            const params = [];

            if (filters.genre) {
                params.push(`genre=${filters.genre}`);
            }

            if (filters.pageCount) {
                if (filters.pageCount === '101-300') {
                    params.push(`page_count_gte=101&page_count_lte=300`);
                } else if (filters.pageCount === '301-500') {
                    params.push(`page_count_gte=301&page_count_lte=500`);
                } else if (filters.pageCount === '501') {
                    params.push(`page_count_gte=501`);
                }
            }

            if (filters.price) {
                if (filters.price === '0-10') {
                    params.push(`price_gte=0&price_lte=10`);
                } else if (filters.price === '10-20') {
                    params.push(`price_gte=10&price_lte=20`);
                } else if (filters.price === '20') {
                    params.push(`price_gte=20`);
                }
            }

            if (filters.date) {
                if (filters.date === '500-1000') {
                    params.push(`publication_date_gte=0500-01-01&publication_date_lte=1000-12-31`);
                } else if (filters.date === '1000-1500') {
                    params.push(`publication_date_gte=1000-01-01&publication_date_lte=1500-12-31`);
                } else if (filters.date === '1500-2000') {
                    params.push(`publication_date_gte=1500-01-01&publication_date_lte=2000-12-31`);
                } else if (filters.date === '>2000') {
                    params.push(`publication_date_gte=2000-01-01`);
                }
            }

            if (sort) {
                if (sort === 'alphabetical') {
                    params.push('_sort=title');
                } else if (sort === 'price-asc') {
                    params.push('_sort=price');
                } else if (sort === 'price-desc') {
                    params.push('_sort=price&_order=desc');
                } else if (sort === 'date-asc') {
                    params.push('_sort=publication_date');
                } else if (sort === 'date-desc') {
                    params.push('_sort=publication_date&_order=desc');
                } else if (sort === 'id') {
                    params.push('_sort=id=order');
                }
            }

            if (searchTerm) {
                params.push(`q=${searchTerm}`);
            }

            params.push(`_page=${currentPage}`);
            params.push(`_limit=${booksPerPage}`);

            if (params.length > 0) {
                url += params.join('&');
            }

            console.log(`Fetching books from URL: ${url}`);
            const response = await fetch(url);
            const data = await response.json();
            console.log(`Fetched books: `, data);

            const totalCount = response.headers.get('X-Total-Count');
            setTotalBooks(Number(totalCount));

            setBooks(data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleFilterChange = (filterType, filterValue) => {
        setFilters({ ...filters, [filterType]: filterValue });
        setCurrentPage(1);
    };

    const handleSortChange = (sortValue) => {
        setSort(sortValue);
        setCurrentPage(1);
    };

    const handleSearchChange = (term) => {
        setSearchTerm(term);
        setCurrentPage(1);
    };

    const handleAddToCart = (book) => {
        if (!cart.some(cartItem => cartItem.id === book.id)) {
            let u = JSON.parse(localStorage.getItem('user')).user;
            book.user_id = u.id;
            const updatedCart = [...cart, book];
            setCart(updatedCart);
            Swal.fire({
                icon: 'success',
                title: 'Added to cart',
                text: 'The book has been added to your cart.',
            });
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='Products fade-in'>
            <Header />
            <div className="products-page">
                <div className='options'>
                    <Search onSearchChange={handleSearchChange} />
                    <Filter genres={['Dystopian', 'Fiction', 'Classic', 'Romance', 'Adventure', 'Historical', 'Psychological', 'Epic', 'Gothic', 'Philosophical', 'Fantasy', 'Thriller', 'Mystery', 'Horror', 'Satire']} onFilterChange={handleFilterChange} />
                    <Sort onSortChange={handleSortChange} />
                </div>
                <BookList books={books} onAddToCart={handleAddToCart} />
                <Pagination
                    currentPage={currentPage}
                    totalBooks={totalBooks}
                    booksPerPage={booksPerPage}
                    onPageChange={handlePageChange}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Products;


