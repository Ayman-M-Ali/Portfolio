const apiKey = '10742ed7bd4d5ef0efe8b3a97f009f29da6a66ee';
const apiSecret = 'ac7cab67708002c5fbc70fe313658e84761ecb03';
const methodName = 'contest.hacks'; // Example method
const contestId = 566; // Example contest ID

export async function fetchProgrammingNews() {
    const time = Math.floor(Date.now() / 1000); // Current time in seconds
    const rand = Math.random().toString(36).substring(2, 8); // Random string

    // Create the API signature
    const apiSig = generateApiSignature(rand, methodName, {
        apiKey,
        contestId,
        time
    });

    const url = `https://codeforces.com/api/${methodName}?contestId=${contestId}&apiKey=${apiKey}&time=${time}&apiSig=${rand}${apiSig}`;

    try {
        const response = await fetch(url);
        console.log('Response Status:', response.status); // Log the status code
        if (!response.ok) {
            const errorText = await response.text(); // Log the error response
            throw new Error(`Network response was not ok: ${errorText}`);
        }
        const data = await response.json();
        displayCodeforcesData(data.result); // Pass the result to display function
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to generate the API signature
function generateApiSignature(rand, methodName, params) {
    const sortedParams = Object.keys(params)
        .sort()
        .map(key => `${key}=${params[key]}`)
        .join('&');

    const stringToHash = `${rand}/${methodName}?${sortedParams}#${apiSecret}`;
    
    // Compute SHA-512 hash (you'll need a library for this, e.g., crypto-js)
    const hash = CryptoJS.SHA512(stringToHash).toString(CryptoJS.enc.Hex);
    
    return hash;
}

// Function to display data from Codeforces API
function displayCodeforcesData(hacks) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear any existing content

    if (hacks.length === 0) {
        newsContainer.innerHTML = '<p>No hacks found.</p>'; // Handle case with no hacks
        return;
    }

    // Limit to the first 6 hacks
    const limitedHacks = hacks.slice(0, 6);

    limitedHacks.forEach(hack => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');
        articleElement.innerHTML = `
          <img src="https://picsum.photos/150" alt="Hack Image" class="news-image">
          <h3>Hack ID: ${hack.id}</h3>
          <p>Hacker: ${hack.hacker}</p>
          <small>Time: ${new Date(hack.time).toLocaleString('default', { month: 'numeric', year: 'numeric' })}</small>
        `;
        newsContainer.appendChild(articleElement);
    });
}

// Call the function to fetch data from Codeforces API
fetchProgrammingNews();