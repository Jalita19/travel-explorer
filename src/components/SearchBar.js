// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onResults, setIsLoading }) => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!query.trim()) {
            alert('Please enter a search term.'); // Alert for empty input
            return;
        }

        setLoading(true);
        setIsLoading(true);
        console.log('Searching for:', query); // Log the search query

        const url = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=man';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'da67456831msh26f381b32e02e04p1d2f92jsn493beb5a63f7', // Replace with your actual API key
                'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API Response:', data); // Log the response

            if (data && data.length > 0) {
                onResults(data);
                setError(''); // Clear any previous error messages
            } else {
                setError('No destinations found. Please try another search.');
                onResults([]);
            }
        } catch (error) {
            console.error("API request failed:", error);
            setError('An error occurred while fetching destinations.');
        } finally {
            setLoading(false); // Reset loading state
            setIsLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                aria-label="Search destinations"
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>
            {error && <p className="error-message">{error}</p>} {/* Display error messages */}
        </div>
    );
};

export default SearchBar;