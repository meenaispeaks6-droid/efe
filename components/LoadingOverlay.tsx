/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import Spinner from './Spinner';

interface LoadingOverlayProps {
  message: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ message }) => {
  return (
    <div className="absolute inset-0 bg-white/80 flex items-center justify-center backdrop-blur-md animate-fade-in z-50">
        <div className="flex flex-col items-center gap-4 text-center">
        <Spinner />
        <p className="text-lg font-serif text-gray-700">{message}</p>
        </div>
    </div>
  );
};

export default LoadingOverlay;
