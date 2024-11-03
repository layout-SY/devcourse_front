//redux를 위한 hooks(useSelector, useDispatch)

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();

//TypeScript가 타입을 추론하지 못한다면(unknown 타입) 따로 타입을 지정(annotate)
// const logger = useSelector((state: RootState) => state.logger);

// //위에서 TypedUseSelectorHook을 써야하는 이유에 대한 예시
// interface State {
// 	state: {
// 		data: string;
// 		loading: boolean;
// 	};
// }

// const obj: Obj<State> = {
// // 그냥 State로 타입 설정 시 에러 발생
// 	name: {
// 		state: {
// 			data: 'abcd',
// 			loading: false,
// 		},
// 	},
// };

// interface Obj<T> {
// 	name: T;
// }
