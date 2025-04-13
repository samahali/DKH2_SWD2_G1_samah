// hooks/useReadingList.js
import { useCallback } from 'react';

export function useReadingList(readingList, dispatch) {
  const addToReadingList = useCallback((book) => {
    const newReadingItem = {
      id: book.id,
      title: book.titleEn,
      titleAr: book.titleAr,
      author: book.authorEn,
      authorAr: book.authorAr,
      image: book.image,
      progress: 0,
      totalPages: Math.floor(Math.random() * 300) + 150, // Random page count
    };
    
    dispatch({ type: 'ADD_TO_READING_LIST', payload: newReadingItem });
  }, [dispatch]);

  const removeFromReadingList = useCallback((bookId) => {
    dispatch({ type: 'REMOVE_FROM_READING_LIST', payload: bookId });
  }, [dispatch]);

  const toggleReadingList = useCallback((book) => {
    const existingBook = readingList.find(item => item.id === book.id);
    
    if (existingBook) {
      removeFromReadingList(book.id);
    } else {
      addToReadingList(book);
    }
  }, [readingList, addToReadingList, removeFromReadingList]);

  const updateReadingProgress = useCallback((bookId, progress) => {
    dispatch({ 
      type: 'UPDATE_READING_PROGRESS', 
      payload: { bookId, progress } 
    });
  }, [dispatch]);

  const getReadingStats = useCallback(() => {
    return readingList.reduce((stats, book) => {
      if (book.progress === 0) {
        stats.notStarted += 1;
      } else if (book.progress >= book.totalPages) {
        stats.completed += 1;
      } else {
        stats.inProgress += 1;
      }
      return stats;
    }, { completed: 0, inProgress: 0, notStarted: 0 });
  }, [readingList]);

  const isInReadingList = useCallback((bookId) => {
    return readingList.some(book => book.id === bookId);
  }, [readingList]);

  return {
    toggleReadingList,
    updateReadingProgress,
    getReadingStats,
    isInReadingList
  };
}