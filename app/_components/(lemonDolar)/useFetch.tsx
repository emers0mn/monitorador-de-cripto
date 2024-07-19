// 'use client'
// import { useState, useEffect } from 'react';

// // Hook para buscar dados
// function useFetch(url: string) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch(url, {
//           next: {
//             revalidate: 15, // Opcional, pode ajustar conforme necessidade
//           },
//         });

//         if (!res.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         const result = await res.json();
//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [url]);

//   return { data, error, loading };
// }

// export default useFetch;
