// apiService.ts
export const apiService = {
    fetchData: async (url: string) => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'x-rapidapi-key': '21f4233c8emsh95db32faaff5112p158945jsnf78236e26469',
            // 'x-rapidapi-host':  'tasty.p.rapidapi.com'
          },
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
      }
    },
  };
  