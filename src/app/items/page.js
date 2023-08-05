import {DATABASE_ID, TOKEN} from "../../../config"


export async function getData() {

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  

  // The rest of the code for fetching data
  const projects = await res.json()

  // console.log('anything???');
  // console.log(result);

  const projectIds = projects.results.map((aproject)=>(
    aproject.id
  ))

  console.log(projectIds);

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }



  // return console.log(result);
}

getData();

export default function ItemsPage() {
  return (
    <>
      <h1>Projects</h1>
    </>
  );
}



