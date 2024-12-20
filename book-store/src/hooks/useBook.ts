import { useEffect, useState } from 'react';
import { BookDetail } from '../models/book.model';
import { fetchBook, likeBook, unlikeBook } from '../api/books.api';
import { useAuthStore } from '../store/authStore';
import { useAlert } from './useAlert';
import { addCart } from '../api/carts.api';

export const useBook = (bookId: string | undefined) => {
	const [book, setBook] = useState<BookDetail | null>(null);
	const { isloggedIn } = useAuthStore();
	const { showAlert } = useAlert();
	const [cartAdded, setCardAdded] = useState(false);

	const likedToggle = () => {
		//권한 확인
		if (!isloggedIn) {
			showAlert('로그인이 필요합니다.');
			return;
		}

		if (!book) return;

		if (book.liked) {
			// like 상태 -> 언라이크 실행
			unlikeBook(book.id).then(() => {
				setBook({
					...book,
					liked: false,
					likes: book.likes - 1,
				});
			});
		} else {
			// unlike 상태 -> 라이크 실행
			likeBook(book.id).then(() => {
				setBook({
					...book,
					liked: true,
					likes: book.likes + 1,
				});
			});
		}
	};

	const addToCart = (quantity: number) => {
		if (!book) return;

		addCart({
			book_id: book.id,
			quantity: quantity,
		}).then(() => {
			setCardAdded(true);
			setTimeout(() => {
				setCardAdded(false);
			}, 3000);
		});
	};

	useEffect(() => {
		if (!bookId) return;

		fetchBook(bookId).then((book) => {
			setBook(book);
		});
	}, [bookId]);

	return { book, likedToggle, addToCart, cartAdded };
};
