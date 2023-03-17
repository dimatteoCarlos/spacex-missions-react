const ApiUrl = 'https://api.spacexdata.com/v3';

export function getAllLaunches() {
  return (
    fetch(`${ApiUrl}/launches`)
    .then((x) => x.json())
    //different syntaxis
      // .then((x) => {
      //   return x.json();
      // })
      
      // .then((x) => console.log(x))
  );
}

export async function takeLaunches() {
  try {
  const resp = await fetch(`${ApiUrl}/launches/`);
  const data = await resp.json();
  // console.table([data])
  return data;
} catch(error){
  console.error(error)
}
}

export async function getLbyFN(flightNumber){
  try{
    const resp=await fetch(`${ApiUrl}/launches/${flightNumber}`);
    const data=await resp.json();
    return data;

  } catch (error){
    console.error(error)
  }
}
