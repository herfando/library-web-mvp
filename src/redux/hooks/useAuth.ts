// src/redux/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// Hook untuk dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Hook untuk selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
