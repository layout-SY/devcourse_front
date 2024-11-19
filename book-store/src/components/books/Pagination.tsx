import styled from 'styled-components';
import { Pagination as IPagination } from '../../models/pagination.model';
import { useState } from 'react';
import { LIMIT } from '../../constants/pagination';
import Button from '../common/Button';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRING } from '../../constants/querystring';

interface Props {
	pagination: IPagination;
}

function Pagination({ pagination }: Props) {
	const [searchParams, setSearchParams] = useSearchParams();

	const { totalCount, currentPage } = pagination;
	const pages: number = Math.ceil(totalCount / LIMIT);

	const handleClickPage = (page: number) => {
		const newSearchParams = new URLSearchParams(searchParams);

		newSearchParams.set(QUERYSTRING.PAGE, page.toString());

		setSearchParams(newSearchParams);
	};

	return (
		<>
			<PaginationStyle>
				{pages > 0 && (
					<ol>
						{Array(pages)
							.fill(0)
							.map((_, index) => (
								<li>
									<Button
										key={index}
										size="small"
										scheme={index + 1 === currentPage ? 'primary' : 'normal'}
										onClick={() => handleClickPage(index + 1)}
									>
										{index + 1}
									</Button>
								</li>
							))}
					</ol>
				)}
			</PaginationStyle>
		</>
	);
}
const PaginationStyle = styled.div``;

export default Pagination;