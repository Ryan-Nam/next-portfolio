
getData();

 async function getData() {

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer secret_u9zg95JdHDDp1Mg3AOZpaX4NmC2qHqPhnxjg2IFS7Fb`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/6b6da228e77f4cf5b244bc4ad61208c4/query`,
    options
  );
  

  // The rest of the code for fetching data
  const result = await res.json()

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }


  
  console.log('anything???');
  console.log(result);

//   return console.log(result);
}